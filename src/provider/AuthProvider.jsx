import { createContext} from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import auth from "../../firebase.config";

export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {

    const registerUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
       
    }

    const loginUser = (email,password)=>{
     return   signInWithEmailAndPassword(auth,email,password)
        
    }
 
    const authInfo={
       loginUser,
       registerUser
      }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes ={
    children:PropTypes.node
}