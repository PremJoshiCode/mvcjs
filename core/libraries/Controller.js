import View from "./View.js";

export default class Controller{
    constructor() {
        this.view = new View();
    }
    /**
     * loadModal
     * @param {string} modal
     * @param {string} obj
     */
    async loadModal(modal, obj){
        if(!obj){
            obj = modal.toLowerCase();
        }
        const module = await import(`../models/${modal}.js`);
        this[obj] = new module.default(modal);
    }
}