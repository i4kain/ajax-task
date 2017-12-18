const id = new Id(1);

getAlbum(id);

document.querySelector('.album__btn_next').onclick = () => {
    getNextAlbum(id);
};

document.querySelector('.album__btn_prev').onclick = () => {
    getPrevAlbum(id);
};
