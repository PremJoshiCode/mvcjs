import { ROOT } from '../../apps/config/setting.js'

class Route {
    // Private Properties
    #locationPath = window.location.pathname;

    #isMatched = false;

    #isRuned = false;

    #to;

    #parameters = {};

    // Public Methods
    get(from, to) {
        this.#add(from, to);
        return this;
    }

    middelware(middelware) {

    }

    listen() {
        if (!this.#isMatched) {
            this.#notFound();
            return;
        }

        if (this.#isRuned) {
            return;
        }

        if (typeof this.#to === 'function') {
            this.#to(this.#parameters);
        }

        else if (Array.isArray(this.#to) && this.#to.length > 1) {
            this.#loadControllerAndMethod(this.#to[0]/* Controller */, this.#to[1]/* method */, this.#parameters);
        }

        else {
            console.log(this.#to);
        }

        this.#isRuned = true;
    }

    // Private Methods
    #add(from, to) {
        if (this.#isMatched) {
            return;
        }

        if (!this.#locationPath || !from) {
            return;
        }

        const locationPathArr = this.#locationPath.replace(/\/$/, "").split('/');
        const fromArr = from.replace(/\/$/, "").split('/');

        const ROOT_PATH_ARR = new URL(ROOT).pathname.replace(/\/$/, "").split('/');
        
        const ROOT_PATH_ARR_LEN = ROOT_PATH_ARR.length;

        let samePathIndexs = [];
        for (let i = 0; i < ROOT_PATH_ARR_LEN; i++) {
            if(ROOT_PATH_ARR[i] === locationPathArr[i] !== ''){
                samePathIndexs.push(i);
            }
        }

        const samePathIndexsLen = samePathIndexs.length;
        for (let i = 0; i < samePathIndexsLen; i++) {
            locationPathArr.splice(samePathIndexs[i], i);
        }

        const fromArrLen = fromArr.length;

        if (fromArrLen !== locationPathArr.length) {
            return;
        }

        const parameters = {};

        for (let i = 0; i < fromArrLen; i++) {
            if (fromArr[i] === locationPathArr[i]) {
                continue;
            }

            else if (fromArr[i].charAt(0) === ':') {
                parameters[fromArr[i].replace(':', '')] = locationPathArr[i];
                continue;
            }

            return;
        }

        this.#isMatched = true;
        this.#to = to;
        this.#parameters = parameters;
    }

    #loadControllerAndMethod(controller, method, parameters) {
        try {
            import(`../../apps/controllers/${controller}Controller.js`)
                .then((module) => {
                    new module.default()
                        .then((e) => {
                            e[method](parameters);
                        })
                });
        } catch (error) {
            console.error(error);
        }
    }

    #docWrite(...text) {
        document.open();
        document.write(...text);
        document.close();
    }

    #notFound() {
        this.#docWrite('<h1 align="center">404 Not Found!</h1>');
    }
}

export default new Route();