const saveToken = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

const getTokenFromLocal = (key) => {
  const data = localStorage.getItem(key);
  return data;
};

export { saveToken, getTokenFromLocal };
