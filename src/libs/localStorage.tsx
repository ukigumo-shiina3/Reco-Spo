export enum KEYS {
  LIKE_STORAGE = 'LIKE_STORAGE',
}

export function getItem(key: KEYS) {
  const value = localStorage.getItem(KEYS.LIKE_STORAGE);
  if (value !== null) {
    return value;
  }
  return '';
}

export function removeItem(key: KEYS) {
  localStorage.removeItem(key);
}

export function setItem(key: KEYS, value: any) {
  localStorage.setItem(key, value);
}
