import Controller from "../../core/libraries/Controller.js"
export default class CatController extends Controller{
    constructor() {
        return new Promise(async (resolve) => {
            super();
            // await this.loadModal('Cat');
            resolve(this);
        });
    }
    async index(id){
        this.view.load('cat/index', id);
    }
}