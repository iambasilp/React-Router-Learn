import data from './userInfo.json'
import { saveUserInfo } from '../Utils/common'
const dummyApi = (user)=>{
    if(data[user]){
        return Promise.resolve(data[user].role)
    }
        return Promise.reject("Invalid User")
}
const login = (username,password)=>{
  return dummyApi(username,password)
    .then((role)=>{
        saveUserInfo({
            username,
            role,
        })
        return {
            status:"sucess",
            data:role,
        }
    })
}
export {
    login
}