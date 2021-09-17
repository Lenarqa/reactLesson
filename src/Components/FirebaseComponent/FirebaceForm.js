import FormComponent from "../FormComponents/FormComponent";
import styled from "styled-components";


const FirebaceForm = () => {
    return (
        <MyContainer>
            <FormComponent />
        </MyContainer>
    );
};

export default FirebaceForm;

const MyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:100vh;
    flex-direction: column;
`

