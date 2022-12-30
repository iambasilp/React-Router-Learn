const testFun = () => {
  console.log("Hello world");
};
const testObj = {
  key1: "value1",
  key2: "value2",
};

const saveUsreInfo = (data) => {
  localStorage.setItem("cred", JSON.stringify(data));
};

const clearUserInfo = () => {
  localStorage.removeItem("cred");
};

const isLoggedIn = () => {
  try {
    const value = JSON.parse(localStorage.getItem("cred"));
    return !!value;
  } catch (e) {
    return false;
  }
};
export { testFun, saveUsreInfo, clearUserInfo, isLoggedIn };
export default testObj;
