import axios from "axios";
import store from '../store'

export const  getprofiles = () => {
    axios.get('http://127.0.0.1:8000/api/profile/').then(
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
export const gettutorials = () => {axios.get('http://127.0.0.1:8000/api/tutorial/').then(
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



