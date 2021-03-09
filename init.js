import {generateOptions} from "./utils.js";
import currencies from "./currency.js";
import {fromSelect, toSelect, form} from "./elements.js";
import {handleInput} from "./handlers.js";





export function init() {
    const optionsHTML = generateOptions(currencies);
// populate options element 
fromSelect.innerHTML=optionsHTML;
toSelect.innerHTML=optionsHTML;

form.addEventListener('input', handleInput);
}