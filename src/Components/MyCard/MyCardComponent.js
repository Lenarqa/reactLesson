import styled from "styled-components";
import MyButtonComponents from '../MyButtonComponent/MyButtonComponents';
import { useState, useEffect } from "react";
import MenuComponent from "../../navData/MenuComponent";


import NavigationButton from "../../navData/NavigationButton";

const MyCardComponent = () => {
    const [notificationNumber, setNotificationNumber] = useState(100);
    const [advice, setAdvice] = useState("no advice");
    
    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";
        
        const fetchData = async () => {
            try {
                let request = await fetch(url);
                let json = await request.json();
                setAdvice(json.slip.advice)
            }catch (error) {
                console.log(error);
            }
        }

        fetchData();
    });
    return (
        <MyContainer>
            <Advice>
                {advice}
            </Advice>
            <MyCardStyle>
                {/* {notificationNumber >= 1 && <p>notification {notificationNumber}</p>} */}
                {/* <MyButtonComponents isActive={false}/> */}
                <MenuComponent />
            </MyCardStyle>
        </MyContainer>
    );
};

const MyCardStyle = styled.div`
    display: flex;
    justify-content: center;
    // width: 300px;
    height:auto;
    // background-color:#61dafb;
`
const Advice = styled.div`
    display: flex;
    text-transform: uppercase;
    width: 100%;
    color: #fff;
    justify-content: center;    
    font-size: 1rem;
    margin-bottom: 2rem;
`
const MyContainer = styled.div`
    display: flex;
    justify-content: center;
    height:auto;
    flex-direction: column;
`

export default MyCardComponent;