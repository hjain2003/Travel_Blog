import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const Logout = async () => {
        try {
          const res = await fetch("http://localhost:5000/user/logout", {
            method: "GET",
            headers: {
              Accept : "application/json",
              "Content-Type" : "application/json"
            },
            credentials : 'include'
          });
    
          const data = await res.json();
    
          if(!res.status ===200){
            const error = new Error(res.error);
            throw error;
          }
          else{
            navigate('/login');
            setIsLoggedIn(false);
            localStorage.removeItem('userId');
          }
        } catch (err) {
          console.log(err);
        }
      }

      useEffect(() => {
        Logout();
      },[]);

  return (
    <>
    </>
  )
}

export default Logout
