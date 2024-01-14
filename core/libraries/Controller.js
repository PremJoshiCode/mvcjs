export default class Controller{
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