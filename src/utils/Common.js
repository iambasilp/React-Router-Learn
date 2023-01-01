import routeConfig from './route-config-main.json'
import { matchPath } from 'react-router-dom';
const testFun = () => {
  console.log("Hello world");
};
console.log(routeConfig)

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
  } catch{
    return false;
  }
};
const getRolesPath = (pathname)=>{
  for(const [path,obj] of Object.entries(routeConfig)){
     if(matchPath(path,pathname)){
      return obj.role
     }
  }
  return null;
}
const getRoles = ()=>{
  try{
    const value = JSON.parse(localStorage.getItem('cred') || {})
    const role = value.role || [];
    return role;
  }catch{
    return []
  }

}
const isRouteRoleMatch = (role)=>{
   if(!role){
    return true;
   }
   const userRole = getRoles()
  //  ["admin"] , ["admin"]
  const filtered = role.filter((item)=>{
    return userRole.includes(item)
  })
  // return filtered.length ? true : false
  return !!filtered.length

  

}
const isPathAllowd = (pathname)=>{
  const role = getRolesPath(pathname)
  return isRouteRoleMatch(role)
}

// Header
// toggle
var navToggle = () => {
  const Menu = document.querySelector('#nav-menu')
  Menu.classList.add('show-menu')
}
var navClose = () => {
  const Menu = document.querySelector('#nav-menu')
  Menu.classList.remove('show-menu')

}
var navLink = () => {
  const Menu = document.querySelector('#nav-menu')
  Menu.classList.remove('show-menu')
}
// Header end
export { testFun, saveUsreInfo, clearUserInfo, isLoggedIn,isPathAllowd,navClose, navToggle,navLink };
export default testObj;
