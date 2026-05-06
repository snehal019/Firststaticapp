import { useState } from "react";
import API from "../api/api.jsx";
import { useNavigate } from "react-router-dom";

function Login()
 {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate =useNavigate();
  const handleLogin = async () => 
  {
    try
     {
      const res = await API.post("/auth/login", 
      {
        username,
        password
      });
      navigate("./dashboard");
     } catch (err) 
    {
        console.log(err);
        alert("login failed");
    }
};
return(
            <>
            <h2> my Login</h2>
            <input type="text" placeholder="username" onChange={(e) =>setUsername(e.target.value)}/>
            
            <input type="password" placeholder="password" onChange= {(e) =>setPassword(e.target.value)}/>
            
            <button onClick={handleLogin} >login</button>
            </>
    )
}

export default Login;