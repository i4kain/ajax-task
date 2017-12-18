function cleanElement(elem) {
    while (elem.firstChild)
        elem.removeChild(elem.firstChild);
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}