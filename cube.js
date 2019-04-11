const Cube = require('cubejs');
Cube.initSolver();

module.exports.solveCube = async (event) => {
    const params = event.queryStringParameters;

    if (params && params.state) {
        const cube = Cube.fromString(params.state);
        const state = cube.asString();
        const moviments = cube.solve();

        cube.move(moviments);

        return {
            statusCode: 200,
            body: JSON.stringify({
                state,
                moviments,
                solved: cube.asString(),
                isSolved: cube.isSolved(),
            })
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: 'State parameter don\'t informed',
            params,
        })
    };
};
