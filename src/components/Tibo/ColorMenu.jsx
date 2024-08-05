import ColorPicker from "./ColorPicker.jsx";
import {useContext} from "react";
import styled from "styled-components";
import {ColorContext} from "../../Context/Tibo/ColorContextProvider.jsx";
import {SelectionContext} from "../../Context/Nathan/SelectionContext.jsx";

function toRGBString(color){
    /*
    * Internally colors have been stored as an array (of length 3), containing RGB values,
    * but CSS renders it using rgb(...) format, this function converts the array to this format
    * */
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

function toComplementaryColor(color){
    /*
    * This function makes the RGB color the complement,
    * taking the RGB value 255 and subtract it by the real value (rang 0-255)
    * if the color is 0 -> complement 255
    * ....
    * if the color is 255 -> complement 0
    * */

    var newColor = []
    for (let i =0; i< color.length; i++){
        newColor.push(255-color[i]);
    }

    return newColor
}

function darkenColor(color){

    const darkValue = 50;

    /*
    * Sometimes the color needs to become a bit darker, this function returns a modified color
    * being a bit darker based on the darkValue
    * */

    var newColor = []
    for (let i =0; i< color.length; i++){
        newColor.push(color[i]-darkValue);
    }
    return newColor;
}

const StyledMenu = styled.div`
    width: 25vw;
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled.button`
    /*
    * Display the rgb color as the background color of the button
    */
    background-color: ${(props) => toRGBString(props.color)};
    width: 80%;
    margin: 0.2vw auto;
    
    /*
    * Makes text color the complementary color of the background
    */
    color: ${(props) => toRGBString(toComplementaryColor(props.color))};
    font-size: calc(2px + 2.6vw);
    
    border: 0;
    border-radius: 0.8vw;
    cursor: pointer;
    
    &:active{
        /*
        * Make the background color -20 darker, to see when button is pressed
        */
        background-color: ${(props) => toRGBString(darkenColor(props.color))};
        color: ${(props) => toRGBString(darkenColor(toComplementaryColor(props.color)))};
    }
`;

export default function ColorMenu(){
    /*
    * Provide a menu to select a color,
    * Containing a button to apply the change
    *
    * Component Created by Tibo Verreycken
    * */
    const {color} = useContext(ColorContext);
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