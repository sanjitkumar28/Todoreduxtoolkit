import userEvent from '@testing-library/user-event';
import React,{useState,ChangeEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';
import "./Register.css"
export default function Register() {
  const history =  useNavigate()
  const [ user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    reEnterPassword: ""
})
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const name=e.target.name
    const value=e.target.value
    console.log(name)
    console.log(value)
    setUser({
        ...user,
        [name]: value
    })
}
const register = () => {
if (user.name&&user.email&&user.password&&user.reEnterPassword) {
    if(user.password===user.reEnterPassword){
    localStorage.setItem("email", JSON.stringify(user.email));
    localStorage.setItem("password",JSON.stringify(user.password))
    setUser({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })
    alert('Successfully Register');
    history('/');
    }
    else{
        alert('password not match');
    }
}
else{
  alert('Please Enter all Fields')
}
}

  return (
    <div>
      <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name"onChange={ handleChange } ></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password"onChange={ handleChange } ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password"onChange={ handleChange } ></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" >
            <Link to="/" style={{ color: '#FFF',textDecoration: 'none'}}>Login</Link>
            </div>
        </div>
    </div>
  )
}
