import React,{useState} from "react";
import styled from "styled-components";
import styles from "../Styles/Login.module.css";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username==='foo' && password==='bar'){
        localStorage.setItem('auth','true');
        alert('Welcome to the world of scrolling')
        navigate('/home');
    }
    else{
        setError(true);
    }
  };

  return (
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginDiv}>
          <div className={styles.loginImage}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.W4JwOf9fsiNIwPhyOyHfnQHaE4&pid=Api&P=0"
              alt="FACE PREP"
            />
          </div>
          <h2> Start Your Journey</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="username">UserName</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="password">Password</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper} type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                </InsideDiv>
              </div>
               
               {error && <p className={styles.error}>Invalid UserName or Password</p>}
              <FormButtonDiv>
                <button className={styles.btn} type="submit">LOGIN</button>
              </FormButtonDiv>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


const InsideDiv = styled.div`
  display: flex;
  justify-content: start;
  font-size: 15px;
`;

const FormButtonDiv = styled.div`
  width: 70%;
`;

