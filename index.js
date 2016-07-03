'use strict';

let Environment = require(__dirname + '/src/Environment.js');

class NjetConfiguration {

    constructor() {
        this.environments = [];

        // Exporting
        this.Environment = Environment;
    }


    getEnvironments() {
        return this.environments;
    }


    addEnvironment(environment) {

        if (false === (environment instanceof Environment)) {
            if (typeof environment === 'string') {
                environment = new Environment(environment);
            } else {
                throw new Error('Wrong environment type');
            }
        }

        for (let index in this.getEnvironments()) {
            let env = this.getEnvironments()[index];
            if (env.getName() === environment.getName()) {
                throw new Error(`Duplicate environment name ${env.getName()}`);
            }
        }

        this.getEnvironments().push(environment);
        return this;
    }


    removeEnvironment(environment) {
        let removed = false;
        if (environment instanceof Environment) {
            let index = this.getEnvironments().indexOf(environment);
            if (index >= 0) {
                this.getEnvironments().splice(index, 1);
                removed = true;
            }
        } else {
            for (let i = 0; i < this.getEnvironments().length; i++) {
                let env = this.getEnvironments()[i];
                if (env.getName() === environment) {
                    this.getEnvironments().splice(i, 1);
                    removed = true;
                    break;
                }
            }
        }
        return removed;
    }
}

module.exports = NjetConfiguration;