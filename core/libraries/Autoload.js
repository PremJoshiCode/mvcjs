import Route from '../../apps/config/Routes.js';

export default class Autoload{
    constructor() {
        Route.listen();
    }
}