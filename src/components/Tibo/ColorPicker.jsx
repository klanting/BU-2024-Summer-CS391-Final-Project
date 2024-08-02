import ColorWheel from "./ColorWheel.jsx";
import {useContext} from "react";
import styled from "styled-components";
import ColorSlider from "./ColorSlider.jsx";
import {ColorContext} from "../../Context/Tibo/ColorContextProvider.jsx";

const StyledPicker = styled.div`
    background-color: #32303e;
    width: 100%;
    
    /*
    * guarantees that the height is 3/2 of the width
    */
    aspect-ratio: 3/5;

    display: flex;
    flex-direction: column;
    padding: 2vw 0.5vw;
    border-radius: 2vw;

`;

const StyledResult = styled.div`
    background-color: ${(prop) => prop.color};
    width: 80%;
    height: 10%;
    margin: 2vh auto;
    border: 2px solid white;
`;

export default function ColorPicker(){
    /*
    * Visualize the color picker to select a color, by using either a slider or a color wheel
    * */
    const {color, setColor} = useContext(ColorContext);

    function setColorWrapper(value){
        /*
        * Wrapper to set Color constraints (between 0, 255 for each entry (RGB))
        * */
        for (let i = 0; i<value.length; i++){
            value[i] = Math.min(255, Math.max(0, value[i]));
        }

        setColor(value)
    }

    return (
        <StyledPicker>
            <ColorWheel setColor={setColorWrapper}/>

            <StyledResult color={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}>
            </StyledResult>

            <ColorSlider color={color} setColor={setColorWrapper} index={0} label="R"/>
            <ColorSlider color={color} setColor={setColorWrapper} index={1} label="G"/>
            <ColorSlider color={color} setColor={setColorWrapper} index={2} label="B"/>


        </StyledPicker>



    );

}