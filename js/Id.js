class Id {
    constructor(id){
        this._id = (id < 1) ? 1 : id;
    }

    currentId() {
        return this._id;
    }

    next() {
        this._id += 1;
    }

    prev() {
        if(this._id > 1) this._id -= 1;    
    }
}