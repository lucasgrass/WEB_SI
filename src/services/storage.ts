const StorageService = {
  getItem: (key: string) => {
    const authCache = localStorage.getItem(key);

    if (authCache) {
      return JSON.parse(authCache);
    }
  },
  setItem: (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default StorageService;
