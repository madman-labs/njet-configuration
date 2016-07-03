'use strict';

class Environment {
    constructor(name) {
        name = String(name).trim().toLowerCase();
        if (name.length === 0) {
            throw new Error(`Invalid environment name "${name}"`);
        }
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

module.exports = Environment;