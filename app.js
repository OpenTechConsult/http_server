const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log(`statusCode: ${response.status}`);
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })