let connection_uri;

exports.handler = async (event) => {
    const uri = process.env['DB_URI'];
    let body = { event };
    
    if (connection_uri != null) {
        body.message = 'cache connection!!!!';
    }
    else {
        body.message = 'create connection =[';
        connection_uri = uri;
    } 

    return {
        statusCode: 200,
        body: JSON.stringify(body)
    };
};
