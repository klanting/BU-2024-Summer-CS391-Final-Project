import styled from "styled-components";
import {useState} from "react";

const StyledField = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    height: 10%;
    font-size: calc(2px + 1.8vw);
`;

const StyledSlider = styled.div`
    width: 50%;
    background: linear-gradient(to right, ${(prop) => prop.colors.map((elem) => `rgb(${elem[0]}, ${elem[1]}, ${elem[2]})`).join(",")});
    margin: 1% auto;
`;

const StyledLabel = styled.label`
    width: 7%;
    margin: auto 0;
`;

const StyledNumberField = styled.div`
    width: 40%;
    margin: auto 0;
    
`;

const StyledNumberInput = styled.input`
    width: 37%;
    background: transparent;
    border: 2px solid white;
    color: white;
    margin-right: 5%;
    font-size: calc(2px + 1.6vw);
`;

const StyledP = styled.p`
    margin: 0;
`;

export default function ColorSlider(props){

    /*
    * Shallow copy
    * */
    let dark = [...props.color];
    dark[props.index] = 0;
    console.log("d", dark, props.index)

    let bright = [...props.color];
    bright[props.index] = 255;
    console.log("d", dark, props.index)

    const colorList = [
        dark,
        bright
    ];

    /*
    * Stores whether the user clicked the mouse button or not
    * */
    const [mouseClicking, setMouseClicking] = useState(false);

    function clickMouse(){
        /*
        * Mark the mouse as clicked
        * */
        setMouseClicking(true);
    }

    function releaseMouse(){
        /*
        * Mark the mouse as released
        * */
        setMouseClicking(false);
    }

    function enterMouse(e){
        /*
        * If mouse Click selected when entering box, click Mouse
        * */
        if (!(e.buttons === 1)){
            return
        }

        clickMouse()
    }


    function updateMouse(e){
        /*
        * only update the color if the mouse is clicked
        * */
        if (!mouseClicking){
            return
        }

        const bounds = e.target.getBoundingClientRect();
        const x = (e.clientX - bounds.left)/bounds.width;
        console.log(x)

        const colorValue = Math.round((1-x)*dark[props.index]+x*bright[props.index]);
        const colorCopy = [...props.color];
        colorCopy[props.index] = colorValue;
        console.log("w", colorCopy)
        props.setColor(colorCopy)
    }

    function updateNumber(e){
        const colorValue = e.target.value;
        const colorCopy = [...props.color];
        colorCopy[props.index] = colorValue;
        props.setColor(colorCopy)
    }

    return(
        <StyledField>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledSlider colors={colorList}
                         onMouseDown={clickMouse}
                         onMouseUp={releaseMouse}
                         onMouseMove={updateMouse}
                         onMouseLeave={releaseMouse}
                          onMouseEnter={enterMouse}
            >
            </StyledSlider>
            <StyledNumberField>

                <StyledP>
                    <StyledNumberInput
                    value={props.color[props.index]}
                    onChange={updateNumber}
                    type="number"
                    min="0"
                    max="255"
                    />
                    /255
                </StyledP>
            </StyledNumberField>

        </StyledField>
    );

}