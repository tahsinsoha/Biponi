import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import axios from "axios";

export function LoginForm(props) {

  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login handleLogin={setLoggedIn} />
      ) : (
        <Dashboard handleLogin={setLoggedIn} />
      )}
    </div>
  );

}
const Login = ({ handleLogin }) => {
  const { switchToSignup } = useContext(AccountContext);
  const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [correct, setCorrect] = useState(true)

  async function signin() {
    console.log(email)
    console.log(password)
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }
      // const { ata } = await axios.get(
      //   'http://localhost:5000/api/users/')
      //   console.log(ata)

      const { data } = await axios.post(
        'http://localhost:5000/api/users/login/',
        {
          'Email': email, 'Password': password
        },
        config)

      console.log(data)
      localStorage.setItem('user', data.id)

      history.push("../../");

    // const response = await fetch('http://localhost:5000/api/users/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		email,
		// 		password,
		// 	}),
		// })

		// const data = await response.json()
    //  console.log(data)
		// if (data.user) {
		// 	localStorage.setItem('token', data.user)
		// 	alert('Login successful')
			
		// } else {
		// 	alert('Please check your username and password')
		// }
	

    }
    catch (e) {
      setCorrect(false)
      console.log(e)
    }
  }

  return (

    <BoxContainer >
      <FormContainer>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => { setemail(e.target.value) }} />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => { setpassword(e.target.value) }} />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      {!correct && (<p style={{ "color": "#ff0000" }} >Please provide correct email/password </p>)}
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={signin}>Login</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );


}

const Dashboard = ({ handleLogin }) => {
  return (
    <div className="dashboard">
      <div>Welcome you are now logged in</div>
      <SubmitButton onClick={() => handleLogin(false)} variant="primary">
        Log Out
      </SubmitButton>
    </div>
  );
};