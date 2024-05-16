/**
 * Send a GET request to the backend API to retrieve data.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise<Response>} - A Promise that resolves with the parsed JSON response from the server.
 */
async function get(url).then(function(response) {
    if (response.status == 200){
        const username = response.data.id;
        const score = response.data.score;
    }
    else{
        post("https://",{score: 0});
    }
});

function get(url){
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.onload = function(){
            resolve({status: http.status, data: JSON.parse(http.response) });
        };
        http.open("GET", url);
        http.send();
    });
}

/**
 * Send a POST request to the backend API to send data.
 * @param {string} url - The URL of the API endpoint.
 * @param {object} data - The data to send to the server.
 * @returns {Promise<response>} - A Promise that resolves with the parsed JSON response from the server.
 */
const dataToSend = { score: 5 };
post("https://example.com/myUserName", dataToSend).then(function(response){
  switch(response.status){
    case 200:
      const score = response.data.score;
      break;
    case 201:
      const score = response.data.score;
      break;
    case 400:
      console.error(response.data);
      break;
    case 500:
      console.error(response.data);
      break;
  }
});

function post(url, data) {
 data = JSON.stringify(data);
 return new Promise((resolve, reject) => {
   const http = new XMLHttpRequest();
   http.onload = function() {
     resolve({ status: http.status, data: JSON.parse(http.response) });
   };
   http.open("POST", url);
   http.setRequestHeader("Content-Type", "application/json");
   http.send(data);
 });
}
