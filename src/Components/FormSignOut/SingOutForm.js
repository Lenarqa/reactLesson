import styled from "styled-components";
import useInput from "../InputComponent/InputComponent";

import getFirebase from "../../firebaseInit";
require('firebase/auth')

const SignOutForm = () => {
    const firebaseInstance = getFirebase();
    const email = useInput("");
    const password = useInput("");

    const signOut = async (event) => {
        event.preventDefault();
        try {
            if(firebaseInstance) {
                const user = await firebaseInstance.auth().signOut();
                alert(`Goodbye`);
            }
        }catch(error) {
            console.log("error", error);
        }
        console.log(email.value);
        console.log(password.value);
    }

    return (
        <MyContainer>
            <Title>Sign out</Title>
            <Button onClick={signOut} type="submit">Sign out</Button>
        </MyContainer>
    );
};

export default SignOutForm;


const MyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    text-align: center;
    margin:0px 0px 1rem 0px;
`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 10px 20px;
    background-blend-mode: overlay;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.4);
    margin-bottom: 1rem;
    :focus {
        outline: none;
    }
`;

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;