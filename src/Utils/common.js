const saveUserInfo = (user)=>{
    localStorage.setItem('cred',JSON.stringify(user))
}
const clearUserInfo = ()=>{
    localStorage.removeItem('cred')
}
const isLoggedin = ()=>{
    try{
        const Value = JSON.parse(localStorage.getItem('cred'))
        return !!Value
    }catch{
        return false
    }
}
export {saveUserInfo, isLoggedin, clearUserInfo}