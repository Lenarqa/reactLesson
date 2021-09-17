import React from "react";
import { useState, useEffect, useRef } from "react";
import styled  from "styled-components"

const MyButtonComponents = (props) => {
    const [count, setCount] = useState(0);
    const [login, setLogin] = useState(true);
    let ref = useRef(null)

    return login ? <MyButtonComponentStyle><Button onClick={()=>{setLogin(false);}}>Выйти</Button></MyButtonComponentStyle> :
    <MyButtonComponentStyle><Button onClick={()=>{setLogin(true);}}>Войти</Button></MyButtonComponentStyle>

    // if(login) {
    //     return (
    //         <MyButtonComponentStyle>
    //             <Button onClick={()=>{setLogin(false);}}>Выйти</Button>
    //         </MyButtonComponentStyle>
    //     );
    // }else{
    //     return (
    //         <MyButtonComponentStyle>
    //             <Button onClick={()=>{setLogin(true);}}>Войти</Button>
    //         </MyButtonComponentStyle>
    //     );
    // }

    // useEffect(() => {
    //     if(ref) {
    //         // ref.current.click();
    //     }
    //     document.title = `You click ${count} times!`;
    // }, [count]);
    
    // return (
    //     <MyButtonComponentStyle>
    //         {/* <Button ref={ref} onClick={() => setCount(count+1)}>You click {count} times!</Button> */}
    //         {/* <Button isActive = {props.isActive} ref={ref} onClick={() => alert("You click")}>Click me!</Button> */}
    //     </MyButtonComponentStyle>
    // );
};

const Button = styled.button`
    background: ${ props => props.isActive ? "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)" : "grey"}; 
    padding: 12px 0; 
    width: 200px; 
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    margin-bottom: 10px;
`;

const MyButtonComponentStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default MyButtonComponents;