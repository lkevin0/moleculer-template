"use strict";

module.exports = function(values) {
    return {
        questions: [
            {
                type: "confirm",
                name: "apiGW",
                message: "Add API Gateway (moleculer-web) service?",
                default: true,
            },
            {
                type: "confirm",
                name: "needCacher",
                message: "Would you like to use cache?",
                default: false,
            },
            {
                type: "confirm",
                name: "useJest",
                message: "Use jest to test your code?",
                default: false,
            },
        ],
        filters: {
            "src/services/routes.service.ts": "apiGW",
        },
        completeMessage: `
To get started:
        cd {{projectName}}
        yarn install`
    };
}