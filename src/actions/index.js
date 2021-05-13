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
  axios.post('asiys-backend.herokuapp.com/api/register', {username:username, email:email, password:password}).then(res => {
    store.dispatch({
      type:'REGISTER',
      payload:res.data
    })
  }).catch(err => {
    store.dispatch({
      type:'REGISTERERROR',
      payload:err.message
    })
  })
}
