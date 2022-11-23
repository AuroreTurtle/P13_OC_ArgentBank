export function removeItem(itemToRemove) {
    window.localStorage.removeItem(itemToRemove);
    window.sessionStorage.removeItem(itemToRemove);
}

export function getItem(item) {
    return window.localStorage.getItem(item);
}

export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}

export function addItemSession(sessionStorageName, newItem) {
    window.sessionStorage.setItem(sessionStorageName, newItem);
}
