import {useState} from "react";
import styled from "styled-components";


const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
};

export default useInput;