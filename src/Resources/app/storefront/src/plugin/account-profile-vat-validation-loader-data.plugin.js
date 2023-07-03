import {checkVAT, countries} from "jsvat";
import Plugin from "src/plugin-system/plugin.class";
import HttpClient from 'src/service/http-client.service';
import ElementLoadingIndicatorUtil from "src/utility/loading-indicator/element-loading-indicator.util";
import {titleCase} from "./helper/typography.helper";
import DomAccess from "src/helper/dom-access.helper";

export default class AccountProfileVatValidationLoaderDataPlugin extends Plugin {
    static options = {
        companyVatIdSelector: "#vatIds",
        companyNameSelector: "#company",
        vatAttr: 'data-form-validation-vat-valid',
        viesCheckFailedMessage: 'data-form-validation-vies-check-failed-message',
        styleCls: 'was-validated',
    };

    init() {
        this._client = new HttpClient();
        this.$companyVatId = DomAccess.querySelector(this.el, this.options.companyVatIdSelector);
        this.$companyName = DomAccess.querySelector(this.el, this.options.companyNameSelector);

        this._registerEvents();
    }

    _registerEvents() {
        this.$companyVatId.addEventListener("change", this._onChange.bind(this));
    }

    _onChange(event) {
        const field = event.target;
        const value = field.value.trim();
        const {isValid} = checkVAT(value, countries);

        if (isValid) {
            this._resetAllCompanyRegistrationValues();
            void this._fetchData(value);
        }
    }

    _fetchData(vatId) {
        ElementLoadingIndicatorUtil.create(this.$companyVatId.parentNode);

        return new Promise((resolve, reject) => {
            this._client.get(`/vat-check/${vatId}`, (response, request) => {
                ElementLoadingIndicatorUtil.remove(this.$companyVatId.parentNode);

                if (request.status >= 400) {
                    reject(`Failed to parse vat validation info from VIES response`);
                    this._showInvalidVatMessage(vatId);
                    return;
                }

                this._parseData(response);

                resolve();
            });
        });
    }

    _showInvalidVatMessage(vatId) {
        const parent = this.$companyVatId.parentElement;
        const message = DomAccess.getDataAttribute(this.$companyVatId, this.options.viesCheckFailedMessage, false);

        if (parent) {
            parent.classList.add(this.options.styleCls);
        }

        this.$companyVatId.insertAdjacentHTML('afterEnd', `<div class="invalid-feedback js-validation-message" data-type="${this.options.vatAttr}">${message}</div>`);
        this.$companyVatId.setCustomValidity(message);
        this.$companyVatId.setAttribute('invalid', true);
    }

    _parseData(response) {
        const {traderName} = JSON.parse(response);

        this._setInputValue(this.$companyName, traderName);
    }

    _resetAllCompanyRegistrationValues() {
        this._resetInputValue(this.$companyName);
    }

    _setInputValue(element, value, isTitleCase = false) {
        element.value = isTitleCase ? titleCase(value) : value;
    }

    _resetInputValue(element) {
        element.value = "";
    }
}
