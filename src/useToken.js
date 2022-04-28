import { useState } from 'react';
//Non-auth0 solution for requesting a token using HTTPS POST request
//Uses bcrypt.compareSync and S3 to verify identity and start a session

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    //original had JSON.parse(tokenString)
    const userToken = tokenString
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  //returns an object that cointains the token and saveToken
  //set to the setToken property name
  return {
    setToken: saveToken,
    token
  }
}