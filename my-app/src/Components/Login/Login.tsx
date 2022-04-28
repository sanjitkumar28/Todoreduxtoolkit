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
      let password = localStorage.getItem("localtask");
      let email=localStorage.getItem("localtask");
      // let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "") as string;
    //   if (!user.email || !user.password) {
    //     setFlag(true);
    //     console.log("EMPTY");
    //   } else if (user.password !== pass || user.email!== mail) {
    //     setFlag(true);
    //   } else {
    //     setHome(!home);
    //     setFlag(false);
    //   }
    // }
  

  //   const login = () => {
  //     axios.post("http://localhost:9002/login", user)
  //     .then(res => {       
        
  //       if (res.data.message === "Login Successfull") {
          
  //         history('/admin');
  //       }
  //       else {
  //         alert(res.data.message);
  //       }
          
         
          
  //     })
  // }
  history('/task');
    }
  return (
    <div className='login'>
      <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  value={user.password} placeholder="Enter your Password"onChange={ handleChange } ></input>
            <div className="button" onClick={handleLogin} >Login</div>
            
            <div>or</div>
            
            <div className="button" >
            <Link to="/register" style={{ color: '#FFF' }}>Register</Link>
            </div>  
    </div>
  )

  }
export default Login