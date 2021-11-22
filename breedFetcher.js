const request = require('request');

const baseURL = "https://api.thecatapi.com/v1";
const query = process.argv[2];

const callbackfn = (data) => {
  const returndata = JSON.parse(data);

  if (returndata.length === 0) {
    return `No cats with breed type ${query} found!`;
  } else {
    return returndata[0].description;
  }
};

request(baseURL + "/breeds/search?q=" + query, (err, res, body) =>{
  if (!err) {
    console.log(callbackfn(body));
  } else {
    console.log(`Request error : ${err}`);
  }
});


