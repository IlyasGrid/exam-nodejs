import { $ } from "./config.js";

const displayForm = () => { $('form').classList.remove('hidden') }
const hideForm = () => { $('form').classList.add('hidden') }

export { displayForm, hideForm }