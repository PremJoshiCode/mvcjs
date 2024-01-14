import Controller from "../../core/libraries/Controller.js"
import {view} from "../../core/helpers/common.js";

export default class HomeController extends Controller{
    constructor() {
        return new Promise(async (resolve) => {
            super();
            /*--------------------*/

            /* Load Libraries here. */


            /*--------------------*/
            resolve(this);
        });
    }
    async wellcome(){
        view('Home/welcome');
    }
}