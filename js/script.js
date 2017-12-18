let id = 1;
const myInit = {
    method: 'GET',
    mod: 'cors'
};

function getAlbum(id) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, myInit)
        .then(status)
        .then(json)
        .then((albumInfo) => {
            document.querySelector('.album-title').textContent = albumInfo.title;
            return fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`, myInit);
        })
        .then(status)
        .then(json)
        .then(createPhotoList)
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
    });
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

function createPhotoList(photoArr) {
    const albumPhoto = document.querySelector('.album-photo');
    cleanElement(albumPhoto);

    photoArr.forEach((photo, index) => {
        let a = document.createElement('a');
        a.href = photo.url;
        a.target = '_blank';
        a.title = `photo ${index + 1}`;

        let img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        img.alt = `photo ${index + 1}`;

        a.appendChild(img);
        albumPhoto.appendChild(a);                    
    });    
}

function cleanElement(elem) {
    while (elem.firstChild)
        elem.removeChild(elem.firstChild);
}

document.querySelector('.next-album').onclick = () => {
    getAlbum(++id);
};

document.querySelector('.prev-album').onclick = () => {
    if(id > 1)
        getAlbum(--id);
};

getAlbum(id);
