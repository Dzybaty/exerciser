export const getLastStoredURL = () => localStorage.getItem('lastUsedURL') || '';

export const setLastStoredURL = (url: string) => localStorage.setItem('lastUsedURL', url);
