const id = new Id(1);

const view = {
    displayPhotoList,
    setAlbumTitle
}

getAlbum(id, view);

document.querySelector('.album__btn_next').onclick = () => {
    getNextAlbum(id, view);
};

document.querySelector('.album__btn_prev').onclick = () => {
    getPrevAlbum(id, view);
};
