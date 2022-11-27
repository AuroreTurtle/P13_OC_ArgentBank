/**
 * It removes the item from both localStorage and sessionStorage.
 * @param itemToRemove - The item to remove from localStorage and sessionStorage.
 */
export function removeItem(itemToRemove) {
    window.localStorage.removeItem(itemToRemove);
    window.sessionStorage.removeItem(itemToRemove);
}

/**
 * It returns the value of the item in local storage.
 * @param item - The item to get from localStorage
 * @returns The value of the item in localStorage.
 */
export function getItem(item) {
    return window.localStorage.getItem(item) || window.sessionStorage.getItem(item);
}

/**
 * It adds a new item to the local storage.
 * @param localeStorageName - The name of the local storage item to add.
 * @param newItem - The item to add to the localStorage.
 */
export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}

/**
 * It adds a new item to the session storage.
 * @param sessionStorageName - The name of the session storage item to add.
 * @param newItem - The item to add to the session storage.
 */
export function addItemSession(sessionStorageName, newItem) {
    window.sessionStorage.setItem(sessionStorageName, newItem);
}
