import View from "../libraries/View.js";

/**
 * view - load and display view file.
 * @param {string} path Path of your view file in views foolder.
 * @param {object} data Pass data to your view file.
 */
export function view(path, data){
    View.load(path, data);
}