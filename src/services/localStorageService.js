const setValue = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

const getValue = key => JSON.parse(window.localStorage.getItem(key));

export default { setValue, getValue };
