import axios from "axios";
import store from '../store'

export const  getprofiles = () => {
    axios.get('http://asiys-backend.herokuapp.com/api/profile/').then(
  res => {
    store.dispatch(
      {
        type:'GETPROFILES',
        payload:res.data
      }
    )
  }
)

}  
export const gettutorials = () => {axios.get('http://asiys-backend.herokuapp.com/api/tutorial/').then(
  (res) =>
  {
    store.dispatch(
      {
        type:'GETTUTORIALS',
        payload:res.data
      }
    )
  }
).catch(
  (err) => {
    store.dispatch(
      {
        type:'ERROR',
        payload:err.message
      }
    )
  }
)
}

export const gettutorial = (id) => {
  axios.get('http://asiys-backend.herokuapp.com/api/tutorial/'+ id + '/').then(res => {

    store.dispatch({
      type:'GETTUTORIAL',
      payload:res.data
    })
  }).catch(
    err => {
      store.dispatch({ 
        type:'ERROR',
        payload:err.message
      })
    })
}


export const signin = (username, email, password) => {
  axios.post('http://asiys-backend.herokuapp.com/api/auth/register', {username:username, email:email, password:password}).then(res => {
    store.dispatch({
      type:'REGISTER',
      payload:res.data
    })
  }).catch(err => {
    store.dispatch({
      type:'REGISTERERROR',
      payload:err
    })
    console.log('error = ', err.message)
  })
}


export const loadTutorials = () => {
  store.dispatch({
    type:'GETTINGTUTORIALS'
  })
}

export const fakesignin = (username, email, password) => {
  store.dispatch({
    type:'REGISTER',
    payload:{
      username:username,
      email:email,
      password:password
    }
  })
}

export const loadUser = () => {
  store.dispatch({
    type:'BUFFERING'
  })
}

export const refresh = () => {
  store.dispatch({
    type:'REFRESH'
  })
}


export const logout = () => {
  store.dispatch({
    type:"LOGOUT"
  })
}