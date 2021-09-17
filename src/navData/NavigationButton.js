import styled from "styled-components";

const NavigationButton = (props) => {
    return (
        <ButtonWrapper onClick={props.onClick}>
            <Image src={props.img} alt="img"/>
            <Title>{props.title}</Title>
        </ButtonWrapper>
    );
};

export default NavigationButton;

const ButtonWrapper = styled.div`
    display: flex;
    background: none;
    border: none;
    border-radius: 14px;
    padding: 10px 20px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    background-blend-mode: overlay;

    p {
        transition: 0.3s ease-in-out;
      }

    :hover {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);

        p {
          color: #fff;
          transform: translateY(-1px);
        }
    }

    :focus {
        outline: none;
    }
`;

const Image = styled.img`
    margin: auto;
    height: 24px;
    width: 24px;
    object-fit: cover;
`;

const Title = styled.p`
    align-items: center;
    color: #ffffff;
    text-align: center;
    margin: auto;
    margin-left: 10px;
`;

