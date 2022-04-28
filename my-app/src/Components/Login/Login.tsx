import React,{useState,ChangeEvent} from 'react'
import {Link,useNavigate } from "react-router-dom"
import './Login.css'
const Login = ()=> {
    const history =  useNavigate ();
    const [ user, setUser] = useState({
        email:"",
        password:"",
    })
      const handleChange =(e:ChangeEvent<HTMLInputElement>) => {
        const name=e.target.name
        const value=e.target.value
        console.log(name)
        console.log(value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
  
    function handleLogin(event: React.MouseEvent<HTMLElement>) {
      event.preventDefault();
      let password = localStorage.getItem("password")?.replace(/"/g,"");
      let email=localStorage.getItem("email")?.replace(/"/g,"");
      console.log('handlelogin',password);
      
      if(user.email==email&&user.password){
        history('/task');
      }
      else{
          alert('User mail or password did not match');
      }
    }
  return (
    <div className='login'>
      <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  value={user.password} placeholder="Enter your Password"onChange={ handleChange } ></input>
            <div className="button" onClick={handleLogin} >Login</div>
            <div>or</div>
            <div className="button" >
            <Link to="/register" style={{ color: '#FFF' ,textDecoration: 'none'}}>Register</Link>
            </div>  
    </div>
  )

  }
export default Login