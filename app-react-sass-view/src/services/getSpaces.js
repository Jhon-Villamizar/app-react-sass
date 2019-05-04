const Get = function getSpaces() {
    var url = 'http://localhost:3001/api/spaces';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}


export default Get;