function getAlbum(id, view) {
    const myInit = {
        method: 'GET',
        mod: 'cors'
    };

    fetch(`https://jsonplaceholder.typicode.com/albums/${id.id}`, myInit)
        .then(status)
        .then((response) =>  response.json())
        .then(view.setAlbumTitle)
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
         });       
        
    fetch(`https://jsonplaceholder.typicode.com/albums/${id.id}/photos`, myInit)
        .then(status)
        .then((response) => response.json())
        .then(view.displayPhotoList)
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
    });
}

function getNextAlbum(id) {
    id.next();
    getAlbum(id, view);
}

function getPrevAlbum(id) {
    if(id.id > 1){
        id.prev();
        getAlbum(id, view);
    }
}