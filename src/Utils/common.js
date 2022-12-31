const saveUserInfo = (user) => {
    localStorage.setItem('cred', JSON.stringify(user))
}
const clearUserInfo = () => {
    localStorage.removeItem('cred')
}
const isLoggedin = () => {
    try {
        const Value = JSON.parse(localStorage.getItem('cred'))
        return !!Value
    } catch {
        return false
    }
}

// toggle
const navToggle = () => {
    const Menu = document.querySelector('#nav-menu')
    Menu.classList.add('show-menu')
}
const navClose = () => {
    const Menu = document.querySelector('#nav-menu')
    Menu.classList.remove('show-menu')
 
}
const navLink = () => {
    const Menu = document.querySelector('#nav-menu')
    Menu.classList.remove('show-menu')
}


export { saveUserInfo, isLoggedin, clearUserInfo,navToggle,navClose,navLink}