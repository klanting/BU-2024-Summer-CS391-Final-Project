import ColorWheel from "./ColorWheel.jsx";
import {useState} from "react";
import styled from "styled-components";
import ColorSlider from "./ColorSlider.jsx";

const StyledPicker = styled.div`
    background-color: #32303e;
    width: 40vw;
    height: 60vw;
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

export default function ColorPicker(props){

    const [color, setColor] = useState([0, 255, 0]);

    return (
        <StyledPicker>
            <ColorWheel setColor={setColor}/>

            <StyledResult color={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}>
            </StyledResult>

            <ColorSlider color={color} setColor={setColor} index={0} label="R"/>
            <ColorSlider color={color} setColor={setColor} index={1} label="G"/>
            <ColorSlider color={color} setColor={setColor} index={2} label="B"/>


        </StyledPicker>



    );

}