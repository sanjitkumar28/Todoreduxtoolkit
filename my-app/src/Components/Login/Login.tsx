import React,{useState,ChangeEvent} from 'react'
import {Link,useNavigate } from "react-router-dom"
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../app/store'
import './Login.css'
import { userInfo } from 'os';
const Login = ()=> {
  const userList = useSelector((state: RootState) => state.user);
    const navigate =  useNavigate ();
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
    function handleLogin(event: React.MouseEvent<HTMLElement>) {
    let flag=false;
    userList.map((users)=>{
      if(users.email==user.email&&users.password===user.password){
        flag=true;
        navigate('/task')
      }
      })
   if(!flag){
     alert('mail and password did not match');
   }
  
      // let password = localStorage.getItem("password")?.replace(/"/g,"");
      // let email=localStorage.getItem("email")?.replace(/"/g,"");
      // console.log('handlelogin',password);
      
      // if(user.email==email&&user.password){
      //   history('/task');
      // }
      // else{
      //     alert('User mail or password did not match');
      // }
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