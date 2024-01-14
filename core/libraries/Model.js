import * as setting from '../../apps/config/setting.js';

export default class Model{
    constructor(controller) {
        this.controller = controller;
    }

    #token = setting.TOKEN;

    #apiKey = setting.API_KEY;

    async fetchApi(url, options){
        return fetch(url, options);
    }
}