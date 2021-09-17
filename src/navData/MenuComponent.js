import styled from "styled-components";
import NavigationButton from "./NavigationButton";
import menuData from "./menuData";
import { useState } from "react";

const MenuComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <MenuWrapper>
            <NavigationButton img={menuData[0].image} title="Menu" onClick={()=>setIsOpen(!isOpen)} />
            {
                isOpen && ( 
                    <MenuItemsWrapper>
                        {menuData.map((item, index) => {
                            return <NavigationButton key={index} img={item.image} title={item.title} />
                        })}
                    </MenuItemsWrapper>
                )
            }
        </MenuWrapper>
    );
};

export default MenuComponent;


const MenuWrapper = styled.div`
    display: grid;
    justify-items: center;
`

const MenuItemsWrapper = styled.div`
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 20px 20px;
`