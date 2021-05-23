import Cookies from "universal-cookie";

export const readcookie = () => {
    const Cookie = new Cookies()
    let user = Cookie.get('user')
    console.log(user)
    if (user === undefined) {
    	return ''
    }
    else {
	    console.log(user)
	    return user
   }
   

}

export const setcookie = (data) => {
    const Cookie = new Cookies()
    data = JSON.parse(data)
    Cookie.set('user', JSON.stringify(data), {path:'/'})
    return JSON.stringify(data)
}

export const removecookie = () => {
	const Cookie = new Cookies()
	console.log(Cookie)
	Cookie.remove('user')
}