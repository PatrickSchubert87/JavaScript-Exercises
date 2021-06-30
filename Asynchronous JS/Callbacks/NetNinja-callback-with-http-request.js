/**
 * @youtube_link https://www.youtube.com/watch?v=aNDfsHQ5Gts - What are HTTP Requests
 * @youtube_link https://www.youtube.com/watch?v=R3tZ3FtTluQ - Status Codes
 * @youtube_link https://www.youtube.com/watch?v=K-Q-xyrA89M - Callbacks
 */

// creating a higher order function to create the HTTP request in a callback
const getToDos = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        /**
         * This console.log(), shows the status of the request.
         * The actual data is show on status 4 in responseText: 
         */
        console.log(request, request.readyState);

        /**
         * Now we use a conditional statement to check whether the readyState: 4 is achived.
         * The readyState has nothing to do with the status of the request.
         * The status of the request we'll check with whether the status is 200 = ok and usable or not
         */
        if(request.readyState === 4 && request.status === 200) {

            /**
             * With this console.log(), we get shown the data in the console
             */
            // console.log(request.responseText);

            /**
             * To get the data out of the JSON as a JS Object we need to use parse()
             * @youtube_link https://www.youtube.com/watch?v=a941B7g3fv8 - Using JSON Data
             */
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } /** if the readyState reaches the State 4 but the status is not 200 - we'll send an error message instead */
        else if (request.readyState === 4) {
            // console.log('An error ocured the data can not be reached - Could not fetch the data');
            callback('An error ocured the data can not be reached - Could not fetch the data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    /**
     * Without using a console.log() it's possible to look in the Dev-Tools > Network -
     * > Headers - will show you the GET request, the URL, and the status code
     * > Response - shows the data which comes from the request 
     */
    request.send();

}

console.log(1);
console.log(2);

// call the function getToDos() with callback functions
getToDos((err, data) => {
    console.log('callback fired');
    // console.log(err, data);
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);