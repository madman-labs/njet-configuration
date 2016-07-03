'use strict';

let should = require('should'),
    NjetConfiguration = require(__dirname + '/../index.js');

describe('NjetConfiguration', () => {
    describe('environments', () => {
        it ('should have no environments', () => {
            let configuration = new NjetConfiguration();
            should(configuration.getEnvironments().length).equal(0);
        });
        
        it ('should add test environment', () => {
            let configuration = new NjetConfiguration();
            configuration.addEnvironment('test');
            should(configuration.getEnvironments()).have.length(1);
            should((configuration.getEnvironments()[0]).getName()).equal('test');
        });

        it ('should not add test environment twice', () => {
            let configuration = new NjetConfiguration();
            configuration.addEnvironment('test');
            should(configuration.getEnvironments()).have.length(1);
            should((configuration.getEnvironments()[0]).getName()).equal('test');

            should(function () {
                configuration.addEnvironment('test');
            }).throw();

            should(configuration.getEnvironments()).have.length(1);
            should((configuration.getEnvironments()[0]).getName()).equal('test');
        });

        it ('should remove test environment', () => {
            let configuration = new NjetConfiguration();
            configuration.addEnvironment('test');
            should(configuration.getEnvironments()).have.length(1);
            should((configuration.getEnvironments()[0]).getName()).equal('test');

            configuration.removeEnvironment('test');
            should(configuration.getEnvironments()).have.length(0);

            configuration.addEnvironment('test');
            should(configuration.getEnvironments()).have.length(1);
            should((configuration.getEnvironments()[0]).getName()).equal('test');

            let environment = configuration.getEnvironments()[0];
            configuration.removeEnvironment(environment);
            should(configuration.getEnvironments()).have.length(0);
        });
    })
});