import ColorPicker from "./ColorPicker.jsx";
import {useContext} from "react";
import styled from "styled-components";
import {colorContext} from "../../Context/Tibo/ColorContextProvider.jsx";
import {SelectionContext} from "../../Context/Nathan/SelectionContext.jsx";

const StyledMenu = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled.button`
    background-color: ${(props) => `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`};
    width: 80%;
    margin: 0.2vw auto;
    
    /*
    * Makes text color the complementary color of the background
    */
    color: ${(props) => `rgb(${255-props.color[0]}, ${255-props.color[1]}, ${255-props.color[2]})`};
    font-size: calc(2px + 2.6vw);
    
    border: 0;
    border-radius: 0.8vw;
    cursor: pointer;
    
    &:active{
        background-color: ${(props) => `rgb(${props.color[0]-20}, ${props.color[1]-20}, ${props.color[2]-20})`};
        color: ${(props) => `rgb(${255-20-props.color[0]}, ${255-20-props.color[1]}, ${255-20-props.color[2]})`};
    }
`;

export default function ColorMenu(){
    /*
    * Provide a menu to select a color
    * */
    const {color} = useContext(colorContext);
    const {updateColor} = useContext(SelectionContext);

    function update(){
        const text = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
        updateColor(text)

    }

    return (
        <StyledMenu>
                <ColorPicker/>
                <StyledButton color={color} onClick={update}><strong>Apply color</strong></StyledButton>
        </StyledMenu>
    );
}