function getAlbum(id) {
    const myInit = {
        method: 'GET',
        mod: 'cors'
    };

    fetch(`https://jsonplaceholder.typicode.com/albums/${id.currentId()}`, myInit)
        .then(status)
        .then((response) => {            
            return response.json();            
        })
        .then(setAlbumTitle)
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
         });       
        
    fetch(`https://jsonplaceholder.typicode.com/albums/${id.currentId()}/photos`, myInit)
        .then(status)
        .then((response) => {
           return response.json();
        })
        .then(displayPhotoList)
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
    });
}

function getNextAlbum(id) {
    id.next();
    getAlbum(id);
}

function getPrevAlbum(id) {
    if(id.currentId() > 1){
        id.prev();
        getAlbum(id);
    }
}