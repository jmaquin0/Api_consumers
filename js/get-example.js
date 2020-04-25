const axios = require('axios');

/**
 * Get Example with no parameters
 */
axios.get('https://postman-echo.com/get')
.then(response => {
    console.log(`Status: ${response.status}`);
console.log(`Server: ${response.headers.server}`);
console.log(`Date: ${response.headers.date}`);
console.log(`Data: ${response.data[0]}`);
})
.catch(e => {
   console.log(`something went wrong: ${e}`)
})


/**
 * Get example with parameters
 */
axios.get('https://postman-echo.com/get', {
    params: {
      name: 'Sherlock'
    }
  })
  .then(response => {
    console.log(`Status: ${response.status}`);
    console.log(`Server: ${response.headers.server}`);
    console.log(`Date: ${response.headers.date}`);
    console.log(`Data: ${response.data[0]}`);
}).catch(e => {
    console.log(e);
})