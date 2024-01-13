import * as config from '../../config/config.js';

export default class Model{
    constructor(controller) {
        this.controller = controller;
    }
    mApi(url, options){
        return new Promise((resolve, reject) => {
            this.#fetchJson(`${this.controller}/${url}`, options)
            .then(res => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
    api(url, options){
        return new Promise((resolve, reject) => {
            this.#fetchJson(url, options)
            .then(res => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
    #fetchJson(url, options = {}){
        return new Promise((resolve, reject) => {
            const defaultparams = {
                apikey: config.API_KEY,
                token: config.TOKEN   
            }
            if(!options.body){
                options.data = options.data ? options.data : {};
                Object.assign(options.data, defaultparams);
                options.method = 'GET';
                options.body = JSON.stringify(options.data);
                options.data = undefined;
                console.log(options);
            }
            fetch(url, options)
            .then(x=>x.json())
            .then(y=>{
                resolve(y)
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
    #objectToUrlParams(object){
        
    }
}