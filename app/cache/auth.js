function LocalStorageAuth(){

    if(storageAvailable('localStorage')){
        return Object.freeze({
            addSessionToken,
            getSessionToken
        });
    }

    function addSessionToken(key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (e) {
            console.log(e)
            alert("Enable storage or delete some elements")
        }
    }
    
    function getSessionToken(key) {
        return localStorage.getItem(key)
    }

    return null
}

exports default LocalStorageAuth