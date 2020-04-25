const axios = require('axios');

/**
 * Get Example with no parameters
 */
axios.post('https://postman-echo.com/post', 'rawdata'
)
.then(response => {
    console.log(`Status: ${response.status}`);
console.log(`Server: ${response.headers.server}`);
console.log(`Date: ${response.headers.date}`);
console.log(`Data: ${response.data[0]}`);
})
.catch(e => {
   console.log(`something went wrong: ${e}`)
})
