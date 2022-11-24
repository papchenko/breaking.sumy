export function darkMode() {
    function getItem() {
        document.body.classList.toggle('_dark-mode');
    }
    function setLocalStorage() {
        if (getLocalStorage()) {
            localStorage.removeItem('key1');
        } else {
            localStorage.setItem('key1', 'darkmode');
        }
    }
    function getLocalStorage() {
    return localStorage.getItem('key1');
    }
    
    if (getLocalStorage()) {
        getItem();
    }

document.querySelector('.dark__mode').addEventListener('click', function() {
    setLocalStorage();
    getItem();
})
}