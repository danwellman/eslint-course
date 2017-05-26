'use strict';

module.exports = {
    meta: {
        docs: {
            description: 'Require IIFE around code in all files',
            category: 'Stylistic issues',
            recommended: false
        }
    },
    create(context) {

        const ERROR = {
            MESSAGE: 'All files should be wrapped in an IIFE'
        }

        function report(node) {
            context.report({
                node,
                message: ERROR.MESSAGE
            });
        }

        return {
            onCodePathStart: function (codePath, node) {
                if (node.tokens && node.tokens[0].value !== '(' && node.tokens[1].value !== 'function') {
                    report(node);
                }
            }
        }
    }
};
