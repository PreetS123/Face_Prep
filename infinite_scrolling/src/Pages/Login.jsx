import React from "react";
import styled from "styled-components";
import styles from "../Styles/Login.module.css";

export const Login = () => {
  const handleSubmit = () => {};

  return (
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginDiv}>
          <LoginImage>
            <ImageWrapper
              src="https://tse3.mm.bing.net/th?id=OIP.W4JwOf9fsiNIwPhyOyHfnQHaE4&pid=Api&P=0"
              alt="FACE PREP"
            />
          </LoginImage>
          <h2> Start Your Journey</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="email">Email</label>
                </InsideDiv>
                <InsideDiv>
                  <InputWrapper type="email" name="email" />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="password">Password</label>
                </InsideDiv>
                <InsideDiv>
                  <InputWrapper type="password" name="password" />
                </InsideDiv>
              </div>

              <FormButtonDiv>
                <ButtonDiv type="submit">LOGIN</ButtonDiv>
              </FormButtonDiv>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const LoginImage = styled.div`
  flex: 2;
`;
const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
`;


const InsideDiv = styled.div`
  display: flex;
  justify-content: start;
  font-size: 15px;
`;

const InputWrapper = styled.input`
  height: 30px;
  padding: 1% 2%;
  border-radius: 10px;
  border: 2px solid #1204C3;
`;
const FormButtonDiv = styled.div`
  width: 100%;
`;

const ButtonDiv = styled.button`
  width: 100%;
  height: 40px;
  background-color: #1204C3;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  padding: 1%;
`;
