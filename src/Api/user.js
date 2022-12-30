import data from './data.json'
import { saveUsreInfo, clearUserInfo } from '../utils/Common'
const dummyApi = (user)=>{
    if(data[user]){
        return Promise.resolve(data[user].role)
    }
    return Promise.reject("Invalid user")
}

const login = (username,password)=>{
    return dummyApi(username,password)
        .then((role)=>{
            saveUsreInfo({
                username,
                role,
                
            })
           return {
            status:'success',
            data:role,
           }
        })
}
export{
    login
}