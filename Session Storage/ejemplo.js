// sessionStorageOps.js

function setItem(key, value) {
  sessionStorage.setItem(key, value);
}

function getItem(key) {
  return sessionStorage.getItem(key);
}

function hasItem(key) {
  return sessionStorage.getItem(key) !== null;
}

function removeItem(key) {
  sessionStorage.removeItem(key);
}

function clearAll() {
  sessionStorage.clear();
}
