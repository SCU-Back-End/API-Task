const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Student-Doctor API',
            version: '1.0.0',
            description: 'Manage lists of students and doctors'
        }
    },
    apis: ['./routes/*.js', './models/*.js']
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
