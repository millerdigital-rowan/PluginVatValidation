(window.webpackJsonp=window.webpackJsonp||[]).push([["swag-example"],{NZUw:function(e,r,t){"use strict";t.r(r);var n=t("FGIj"),l=t("p4AR"),o=t("u0Tz");const u={name:"Austria",codes:["AT","AUT","040"],calcFn:e=>{let r=0;for(let t=0;t<7;t++){const n=Number(e.charAt(t))*u.rules.multipliers.common[t];r+=n>9?Math.floor(n/10)+n%10:n}return r=10-(r+4)%10,10===r&&(r=0),r===Number(e.slice(7,8))},rules:{multipliers:{common:[1,2,1,2,1,2,1]},regex:[/^(AT)U(\d{8})$/]}},i=e=>e%11<2?0:11-e%11,s={name:"Brazil",codes:["BR","BRA","076"],calcFn:e=>{const r=e.split("").map(Number);if((t=r).every((e=>t[0]===e)))return!1;var t;const n=((e,r)=>r.reduce((([r,t],n,l)=>[0===l?0:r+e[l-1]*n,t+e[l]*n]),[0,0]))(r,[6,5,4,3,2,9,8,7,6,5,4,3,2]);return r[12]===i(n[0])&&r[13]===i(n[1])},rules:{multipliers:{},regex:[/^(BR)?(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/]}},c={name:"Bulgaria",codes:["BG","BGR","100"],calcFn:e=>{if(9===e.length)return function(e){let r,t=a(0,e,0,8,1);const n=Number(e.slice(8));if(r=t%11,10!==r)return r===n;t=a(0,e,0,8,3),r=t%11,10===r&&(r=0);return r===n}(e);const{multipliers:r}=c.rules;return function(e,r){if(/^\d\d[0-5]\d[0-3]\d\d{4}$/.test(e)){const t=Number(e.slice(2,4));if(t>0&&t<13||t>20&&t<33||t>40&&t<53){let t=m(0,e,0,9,r);if(t%=11,10===t&&(t=0),t===Number(e.substr(9,1)))return!0}}return!1}(e,r.physical)||function(e,r){return m(0,e,0,9,r.foreigner)%10===Number(e.substr(9,1))}(e,r)||function(e,r){let t=m(0,e,0,9,r.miscellaneous);if(t=11-t%11,10===t)return!1;11===t&&(t=0);const n=Number(e.substr(9,1));return t===n}(e,r)},rules:{multipliers:{physical:[2,4,8,5,10,9,7,3,6],foreigner:[21,19,17,13,11,9,7,3,1],miscellaneous:[4,3,2,7,6,5,4,3,2]},regex:[/^(BG)(\d{9,10})$/]}};function a(e,r,t,n,l){let o=e;for(let e=t;e<n;e++)o+=Number(r.charAt(e))*(e+l);return o}function m(e,r,t,n,l){let o=e;for(let e=t;e<n;e++)o+=Number(r.charAt(e))*l[e];return o}const d={name:"Czech Republic",codes:["CZ","CZE","203"],calcFn:e=>{const{rules:r}=d,{multipliers:t,additional:n,lookup:l}=r;return!!n&&(function(e,r,t){let n=0;if(t[0].test(e)){for(let t=0;t<7;t++)n+=Number(e.charAt(t))*r[t];n=11-n%11,10===n&&(n=0),11===n&&(n=1);return n===Number(e.slice(7,8))}return!1}(e,t.common,n)||function(e,r,t,n){let l=0;if(t[2].test(e)){for(let t=0;t<7;t++)l+=Number(e.charAt(t+1))*r[t];let t;t=l%11==0?l+11:11*Math.ceil(l/11);const o=t-l-1,u=Number(e.slice(8,9));return!!n&&n[o]===u}return!1}(e,t.common,n,l)||function(e,r){if(r[3].test(e)){const r=Number(e.slice(0,2))+Number(e.slice(2,4))+Number(e.slice(4,6))+Number(e.slice(6,8))+Number(e.slice(8)),t=Number(e)%11==0;return!(r%11!=0||!t)}return!1}(e,n)||function(e,r){if(r[1].test(e))return Number(e.slice(0,2))<=62;return!1}(e,n))},rules:{multipliers:{common:[8,7,6,5,4,3,2]},lookup:[8,7,6,5,4,3,2,1,0,9,8],regex:[/^(CZ)(\d{8,10})(\d{3})?$/],additional:[/^\d{8}$/,/^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,/^6\d{8}$/,/^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/]}};const f={name:"Denmark",codes:["DK","DNK","208"],calcFn:e=>{let r=0;for(let t=0;t<8;t++)r+=Number(e.charAt(t))*f.rules.multipliers.common[t];return r%11==0},rules:{multipliers:{common:[2,7,6,5,4,3,2,1]},regex:[/^(DK)(\d{8})$/]}},p={name:"Estonia",codes:["EE","EST","233"],calcFn:e=>{let r,t=0;for(let r=0;r<8;r++)t+=Number(e.charAt(r))*p.rules.multipliers.common[r];return t=10-t%10,10===t&&(t=0),r=Number(e.slice(8,9)),t===r},rules:{multipliers:{common:[3,7,1,3,7,1,3,7]},regex:[/^(EE)(10\d{7})$/]}},b={name:"Finland",codes:["FI","FIN","246"],calcFn:e=>{let r=0;for(let t=0;t<7;t++)r+=Number(e.charAt(t))*b.rules.multipliers.common[t];r=11-r%11,r>9&&(r=0);return r===Number(e.slice(7,8))},rules:{multipliers:{common:[7,9,10,5,8,4,2]},regex:[/^(FI)(\d{8})$/]}},h={name:"Greece",codes:["GR","GRC","300"],calcFn:e=>{let r=0;const t=8===e.length?"0"+e:e;for(let e=0;e<8;e++)r+=Number(t.charAt(e))*h.rules.multipliers.common[e];r%=11,r=r>9?0:r;return r===Number(t.slice(8,9))},rules:{multipliers:{common:[256,128,64,32,16,8,4,2]},regex:[/^(EL)(\d{9})$/]}},N={name:"Hungary",codes:["HU","HUN","348"],calcFn:e=>{let r=0;for(let t=0;t<7;t++)r+=Number(e.charAt(t))*N.rules.multipliers.common[t];r=10-r%10,10===r&&(r=0);return r===Number(e.slice(7,8))},rules:{multipliers:{common:[9,7,3,1,9,7,3]},regex:[/^(HU)(\d{8})$/]}},g={name:"Ireland",codes:["IE","IRL","372"],calcFn:e=>{const{typeFormats:r,multipliers:t}=g.rules;if(!r||!r.first)return!1;let n=0,l=e;r.first.test(e)&&(l="0"+e.substring(2,7)+e.substring(0,1)+e.substring(7,8));for(let e=0;e<7;e++)n+=Number(l.charAt(e))*t.common[e];r.third.test(l)&&(n+="H"===l.charAt(8)?72:9),n%=23,n=0===n?"W":String.fromCharCode(n+64);return n===l.slice(7,8)},rules:{multipliers:{common:[8,7,6,5,4,3,2]},typeFormats:{first:/^\d[A-Z*+]/,third:/^\d{7}[A-Z][AH]$/},regex:[/^(IE)(\d{7}[A-W])$/,/^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/,/^(IE)(\d{7}[A-W][AH])$/]}},A={name:"Italy",codes:["IT","ITA","380"],calcFn:e=>{let r,t=0;if(0===Number(e.slice(0,7)))return!1;if(r=Number(e.slice(7,10)),r<1||r>201&&999!==r&&888!==r)return!1;for(let n=0;n<10;n++)r=Number(e.charAt(n))*A.rules.multipliers.common[n],t+=r>9?Math.floor(r/10)+r%10:r;t=10-t%10,t>9&&(t=0);return t===Number(e.slice(10,11))},rules:{multipliers:{common:[1,2,1,2,1,2,1,2,1,2]},regex:[/^(IT)(\d{11})$/]}},y={name:"Latvia",codes:["LV","LVA","428"],calcFn:e=>{let r=0;if(/^[0-3]/.test(e))return Boolean(/^[0-3][0-9][0-1][0-9]/.test(e));for(let t=0;t<10;t++)r+=Number(e.charAt(t))*y.rules.multipliers.common[t];r%11==4&&9===Number(e[0])&&(r-=45),r%11==4?r=4-r%11:r%11>4?r=14-r%11:r%11<4&&(r=3-r%11);return r===Number(e.slice(10,11))},rules:{multipliers:{common:[9,1,4,8,3,10,2,5,7,6]},regex:[/^(LV)(\d{11})$/]}},$={name:"Lithuania",codes:["LT","LTU","440"],calcFn:e=>function(e,r){let t=0;if(9===e.length){if(!/^\d{7}1/.test(e))return!1;t=function(e,r){let t=r;for(let r=0;r<8;r++)t+=Number(e.charAt(r))*(r+1);return t}(e,t),t=function(e,r,t){let n=r;if(n%11==10){n=0;for(let r=0;r<8;r++)n+=S(e,t.multipliers.short,r)}return n}(e,t,r),t=v(t);return t===Number(e.slice(8,9))}return!1}(e,$.rules)||function(e,r){let t=0;if(12===e.length){if(!r.check)return!1;if(!r.check.test(e))return!1;t=function(e,r,t){let n=r;for(let r=0;r<11;r++)n+=S(e,t.multipliers.med,r);return n}(e,t,r),t=function(e,r,t){let n=r;if(r%11==10){n=0;for(let r=0;r<11;r++)n+=S(e,t.multipliers.alt,r)}return n}(e,t,r),t=v(t);return t===Number(e.slice(11,12))}return!1}(e,$.rules),rules:{multipliers:{short:[3,4,5,6,7,8,9,1],med:[1,2,3,4,5,6,7,8,9,1,2],alt:[3,4,5,6,7,8,9,1,2,3,4]},check:/^\d{10}1/,regex:[/^(LT)(\d{9}|\d{12})$/]}};function S(e,r,t){return Number(e.charAt(t))*r[t]}function v(e){let r=e%11;return 10===r&&(r=0),r}const F={name:"Malta",codes:["MT","MLT","470"],calcFn:e=>{let r=0;for(let t=0;t<6;t++)r+=Number(e.charAt(t))*F.rules.multipliers.common[t];r=37-r%37;return r===Number(e.slice(6,8))},rules:{multipliers:{common:[3,4,6,7,8,9]},regex:[/^(MT)([1-9]\d{7})$/]}},E={name:"Netherlands",codes:["NL","NLD","528"],calcFn:e=>{const r=e.replace(/[\ \-\_]/g,"").toUpperCase(),{additional:t,multipliers:n}=E.rules;if(!t)return!1;const l=r.match(t[0]);if(!l||!l[1])return!1;const o=l[1],u=`NL${r}`.split("").map(x);let i=0;for(let e=0;e<8;e++)i+=Number(o.charAt(e))*n.common[e];i%=11,i>9&&(i=0);return i===Number(o.slice(8,9))||1===function(e,r){let t=0;for(const n of e.split(""))t=(10*t+ +n)%r;return t}(u.join(""),97)},rules:{multipliers:{common:[9,8,7,6,5,4,3,2]},regex:[/^(NL)(\d{9}B\d{2})$/],additional:[/^(\d{9})B\d{2}$/]}};function x(e){if("+"===e)return 36;if("*"===e)return 37;const r=e.charCodeAt(0)-55;return r>9&&r<91?r:parseInt(e,10)}const C={name:"Norway",codes:["NO","NOR","578"],calcFn:e=>{let r=0;for(let t=0;t<8;t++)r+=Number(e.charAt(t))*C.rules.multipliers.common[t];if(r=11-r%11,11===r&&(r=0),r<10){return r===Number(e.slice(8,9))}return!1},rules:{multipliers:{common:[3,2,7,6,5,4,3,2]},regex:[/^(NO)(\d{9})(MVA)?$/]}},R={name:"Poland",codes:["PL","POL","616"],calcFn:e=>{let r=0;for(let t=0;t<9;t++)r+=Number(e.charAt(t))*R.rules.multipliers.common[t];r%=11,r>9&&(r=0);return r===Number(e.slice(9,10))},rules:{multipliers:{common:[6,5,7,2,3,4,5,6,7]},regex:[/^(PL)(\d{10})$/]}},w={name:"Portugal",codes:["PT","PRT","620"],calcFn:e=>{let r=0;for(let t=0;t<8;t++)r+=Number(e.charAt(t))*w.rules.multipliers.common[t];r=11-r%11,r>9&&(r=0);return r===Number(e.slice(8,9))},rules:{multipliers:{common:[9,8,7,6,5,4,3,2]},regex:[/^(PT)(\d{9})$/]}},L={name:"Romania",codes:["RO","ROU","642"],calcFn:e=>{let r=0;const t=e.length,n=L.rules.multipliers.common.slice(10-t);for(let t=0;t<e.length-1;t++)r+=Number(e.charAt(t))*n[t];r=10*r%11,10===r&&(r=0);return r===Number(e.slice(e.length-1,e.length))},rules:{multipliers:{common:[7,5,3,2,1,7,5,3,2]},regex:[/^(RO)([1-9]\d{1,9})$/]}},I={name:"Russian Federation",codes:["RU","RUS","643"],calcFn:e=>function(e,r){let t=0;if(10===e.length){for(let n=0;n<10;n++)t+=Number(e.charAt(n))*r.multipliers.m_1[n];t%=11,t>9&&(t%=10);return t===Number(e.slice(9,10))}return!1}(e,I.rules)||function(e,r){let t=0,n=0;if(12===e.length){for(let n=0;n<11;n++)t+=Number(e.charAt(n))*r.multipliers.m_2[n];t%=11,t>9&&(t%=10);for(let t=0;t<11;t++)n+=Number(e.charAt(t))*r.multipliers.m_3[t];n%=11,n>9&&(n%=10);const l=t===Number(e.slice(10,11)),o=n===Number(e.slice(11,12));return l&&o}return!1}(e,I.rules),rules:{multipliers:{m_1:[2,4,10,3,5,9,4,6,8,0],m_2:[7,2,4,10,3,5,9,4,6,8,0],m_3:[3,7,2,4,10,3,5,9,4,6,8,0]},regex:[/^(RU)(\d{10}|\d{12})$/]}};const B={name:"Slovenia",codes:["SI","SVN","705"],calcFn:e=>{let r=0;for(let t=0;t<7;t++)r+=Number(e.charAt(t))*B.rules.multipliers.common[t];r=11-r%11,10===r&&(r=0);const t=Number(e.slice(7,8));return!(11===r||r!==t)},rules:{multipliers:{common:[8,7,6,5,4,3,2]},regex:[/^(SI)([1-9]\d{7})$/]}},Z={name:"Spain",codes:["ES","ESP","724"],calcFn:e=>{const{additional:r,multipliers:t}=Z.rules;return!!r&&(r[0].test(e)?function(e,r){let t=U(e,r,0);t=10-t%10,10===t&&(t=0);const n=Number(e.slice(8,9));return t===n}(e,t.common):r[1].test(e)?function(e,r){let t=U(e,r,0);t=10-t%10;const n=String.fromCharCode(t+64),l=e.slice(8,9);return n===l}(e,t.common):r[2].test(e)?function(e){let r=e;"Y"===r.substring(0,1)&&(r=r.replace(/Y/,"1"));"Z"===r.substring(0,1)&&(r=r.replace(/Z/,"2"));const t="TRWAGMYFPDXBNJZSQVHLCKE".charAt(+r.substring(0,8)%23);return r.charAt(8)===t}(e):!!r[3].test(e)&&function(e){const r="TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(e.substring(1,8))%23);return e.charAt(8)===r}(e))},rules:{multipliers:{common:[2,1,2,1,2,1,2]},regex:[/^(ES)([A-Z]\d{8})$/,/^(ES)([A-HN-SW]\d{7}[A-J])$/,/^(ES)([0-9YZ]\d{7}[A-Z])$/,/^(ES)([KLMX]\d{7}[A-Z])$/],additional:[/^[A-H|J|U|V]\d{8}$/,/^[A-H|N-S|W]\d{7}[A-J]$/,/^[0-9|Y|Z]\d{7}[A-Z]$/,/^[K|L|M|X]\d{7}[A-Z]$/]}};function U(e,r,t){let n,l=t;for(let t=0;t<7;t++)n=Number(e.charAt(t+1))*r[t],l+=n>9?Math.floor(n/10)+n%10:n;return l}const _={name:"Switzerland",codes:["CH","CHE","756"],calcFn:e=>{let r=0;for(let t=0;t<8;t++)r+=Number(e.charAt(t))*_.rules.multipliers.common[t];if(r=11-r%11,10===r)return!1;11===r&&(r=0);return r===Number(e.substr(8,1))},rules:{multipliers:{common:[5,4,3,2,7,6,5,4]},regex:[/^(CHE)(\d{9})(MWST|TVA|IVA)?$/]}},P={name:"United Kingdom",codes:["GB","GBR","826"],calcFn:e=>"GD"===e.substr(0,2)?function(e){const r=500;return Number(e.substr(2,3))<r}(e):"HA"===e.substr(0,2)?function(e){const r=499;return Number(e.substr(2,3))>r}(e):function(e,r){let t=0;if(0===Number(e.slice(0)))return!1;const n=Number(e.slice(0,7));for(let n=0;n<7;n++)t+=Number(e.charAt(n))*r[n];let l=t;for(;l>0;)l-=97;if(l=Math.abs(l),l===Number(e.slice(7,9))&&n<9990001&&(n<1e5||n>999999)&&(n<9490001||n>97e5))return!0;l>=55?l-=55:l+=42;const o=Number(e.slice(7,9));return Boolean(l===o&&n>1e6)}(e,P.rules.multipliers.common),rules:{multipliers:{common:[8,7,6,5,4,3,2]},regex:[/^(GB)?(\d{9})$/,/^(GB)?(\d{12})$/,/^(GB)?(GD\d{3})$/,/^(GB)?(HA\d{3})$/]}};function O(e,r,t){return{value:e||void 0,isValid:Boolean(r),isValidFormat:!!t&&k(e,t.rules.regex).isValid,isSupportedCountry:Boolean(t),country:t?{name:t.name,isoCode:{short:t.codes[0],long:t.codes[1],numeric:t.codes[2]}}:void 0}}const T=[s.name];function D(e){return!!e.match(/^\d{2}/)}function H(e,r){return function(e){return[...e.codes,"Greece"===e.name?"EL":void 0].filter(Boolean)}(r).filter((r=>e.startsWith(r))).length>0}function k(e,r){for(const t of r){if(t.test(e))return{isValid:!0,regex:t}}return{isValid:!1,regex:void 0}}function G(e,r=[]){if(!e)return O(e,!1);const t=function(e=""){return e.toString().toUpperCase().replace(/(\s|-|\.|\/)+/g,"")}(e),n=function(e,r){for(const n of r)if(H(e,n)||(t=n.name,T.includes(t)&&D(e)))return{...n};var t}(t,r);return O(t,!!n&&function(e,r){const t=k(e,r.rules.regex);if(!t.isValid||!t.regex)return!1;const n=t.regex.exec(e);return!!n&&r.calcFn(n[2])}(t,n),n)}const V=[{name:"Andorra",codes:["AD","AND","020"],calcFn:e=>8===e.length,rules:{multipliers:{},regex:[/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]}},u,{name:"Belgium",codes:["BE","BEL","056"],calcFn:e=>{const r=9===e.length?"0"+e:e;if(0===Number(r.slice(1,2)))return!1;return 97-Number(r.slice(0,8))%97===Number(r.slice(8,10))},rules:{multipliers:{},regex:[/^(BE)(0?\d{9})$/]}},s,c,{name:"Croatia",codes:["HR","HRV","191"],calcFn:e=>{let r=10,t=0;for(let n=0;n<10;n++)t=(Number(e.charAt(n))+r)%10,0===t&&(t=10),r=2*t%11;return(r+Number(e.slice(10,11)))%10==1},rules:{multipliers:{},regex:[/^(HR)(\d{11})$/]}},{name:"Cyprus",codes:["CY","CYP","196"],calcFn:e=>{if(12===Number(e.slice(0,2)))return!1;let r=function(e,r){let t=r;for(let r=0;r<8;r++){let n=Number(e.charAt(r));if(r%2==0)switch(n){case 0:n=1;break;case 1:n=0;break;case 2:n=5;break;case 3:n=7;break;case 4:n=9;break;default:n=2*n+3}t+=n}return t}(e,0);r%=26,r=String.fromCharCode(r+65);return r===e.substr(8,1)},rules:{multipliers:{},regex:[/^(CY)([0-59]\d{7}[A-Z])$/]}},d,f,p,{name:"Europe",codes:["EU","EUR","000"],calcFn:()=>!0,rules:{multipliers:{},regex:[/^(EU)(\d{9})$/]}},b,{name:"France",codes:["FR","FRA","250"],calcFn:e=>{let r;if(!/^\d{11}$/.test(e))return!0;r=Number(e.substring(2)),r=(100*r+12)%97;return r===Number(e.slice(0,2))},rules:{multipliers:{},regex:[/^(FR)(\d{11})$/,/^(FR)([A-HJ-NP-Z]\d{10})$/,/^(FR)(\d[A-HJ-NP-Z]\d{9})$/,/^(FR)([A-HJ-NP-Z]{2}\d{9})$/]}},{name:"Germany",codes:["DE","DEU","276"],calcFn:e=>{let r,t=10,n=0,l=0;for(let r=0;r<8;r++)n=(Number(e.charAt(r))+t)%10,0===n&&(n=10),t=2*n%11;return l=11-t==10?0:11-t,r=Number(e.slice(8,9)),l===r},rules:{multipliers:{},regex:[/^(DE)([1-9]\d{8})$/]}},h,N,g,A,y,$,{name:"Luxembourg",codes:["LU","LUX","442"],calcFn:e=>{const r=Number(e.slice(6,8));return Number(e.slice(0,6))%89===r},rules:{multipliers:{},regex:[/^(LU)(\d{8})$/]}},F,E,C,R,w,L,I,{name:"Serbia",codes:["RS","SRB","688"],calcFn:e=>{let r=10,t=0;for(let n=0;n<8;n++)t=(Number(e.charAt(n))+r)%10,0===t&&(t=10),r=2*t%11;return 1===(r+Number(e.slice(8,9)))%10},rules:{multipliers:{},regex:[/^(RS)(\d{9})$/]}},{name:"Slovakia Republic",codes:["SK","SVK","703"],calcFn:e=>0===Number(e)%11,rules:{multipliers:{},regex:[/^(SK)([1-9]\d[2346-9]\d{7})$/]}},B,Z,{name:"Sweden",codes:["SE","SWE","752"],calcFn:e=>{let r,t=0;for(let r=0;r<9;r+=2){const n=Number(e.charAt(r));t+=Math.floor(n/5)+2*n%10}let n=0;for(let r=1;r<9;r+=2)n+=Number(e.charAt(r));const l=(10-(t+n)%10)%10;return r=Number(e.slice(9,10)),l===r},rules:{multipliers:{},regex:[/^(SE)(\d{10}01)$/]}},_,P];function M(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).join(" ")}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,l=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){l=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(l)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return K(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return K(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function W(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function Y(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,r){return!r||"object"!==j(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,r){return(z=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var Q,ee,re,te=function(e){function r(){return W(this,r),q(this,X(r).apply(this,arguments))}var t,n,u;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&z(e,r)}(r,e),t=r,(n=[{key:"init",value:function(){this._client=new l.a,this.$vatIds=this.el.querySelector(this.options.vatIdsSelector),this.$companyName=this.el.querySelector(this.options.companyNameSelector),this.$companyAddress=this.el.querySelector(this.options.companyAddressSelector),this.$companyZipcode=this.el.querySelector(this.options.companyZipcodeSelector),this.$companyCity=this.el.querySelector(this.options.companyCitySelector),this.$companyCountry=this.el.querySelector(this.options.companyCountrySelector),this._registerEvents()}},{key:"_registerEvents",value:function(){this.$vatIds.addEventListener("change",this._onChange.bind(this))}},{key:"_onChange",value:function(e){console.log(G(e.target.value,V)),G(e.target.value,V).isValid&&this._fetchData(e.target.value)}},{key:"_fetchData",value:function(e){o.a.create(this.$vatIds.parentNode),this._client.get("store-api/company/".concat(e),this._handleData.bind(this))}},{key:"_handleData",value:function(e){o.a.remove(this.$vatIds.parentNode),this._parseData(e)}},{key:"_parseData",value:function(e){var r=JSON.parse(e);if(!r.traderAddress||!r.traderName)throw new Error("Failed to parse vat validation info from VIES response");var t=J(r.traderAddress.replace(/\n/g,", ").match(/^([^,]+), (\S+) ([^,]+)$/),4),n=t[1],l=t[2],o=t[3];if(!n||!l||!o)throw new Error("Failed to parse vat validation info from VIES response");this.$companyName.value=r.traderName,this.$companyAddress.value=M(n),this.$companyZipcode.value=l,this.$companyCity.value=M(o)}}])&&Y(t.prototype,n),u&&Y(t,u),r}(n.a);re={vatIdsSelector:"#vatIds",companyNameSelector:"#billingAddresscompany",companyAddressSelector:"#billingAddressAddressStreet",companyZipcodeSelector:"#billingAddressAddressZipcode",companyCitySelector:"#billingAddressAddressCity",companyCountrySelector:"#billingAddressAddressCountry"},(ee="options")in(Q=te)?Object.defineProperty(Q,ee,{value:re,enumerable:!0,configurable:!0,writable:!0}):Q[ee]=re,window.PluginManager.register("BaseExamplePlugin",te,".register-form")}},[["NZUw","runtime","vendor-node","vendor-shared"]]]);