import logo from './logo.svg';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import MyCardComponent from './Components/MyCard/MyCardComponent';
import FormComponent from './Components/FormComponents/FormComponent';
import FirebaceForm from './Components/FirebaseComponent/FirebaceForm';
import SignInForm from './Components/FormSingIn/SingInForm';
import getFirebase from './firebaseInit';
import SignOutForm from './Components/FormSignOut/SingOutForm';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let myFirebase = getFirebase();
  useEffect((firebase)=> {
    myFirebase.auth().onAuthStateChanged((authUser)=> {
      if(authUser) {
        setCurrentUser(authUser.email);
      }else {
        setCurrentUser(null);
      }
      // console.log(authUser.email);
    })
  })

  return (
    <MyApp className="App">
        {/* <MyCardComponent /> */}
        {/* <FormComponent /> */}
        {/* <FirebaceForm /> */}
        <SignInForm />
        {/* <SignOutForm /> */}
    </MyApp>
  );
}

const MyApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1270px;
    height: 100vh;
    margin: 0 auto;
    background-color: blue;
`

export default App;
