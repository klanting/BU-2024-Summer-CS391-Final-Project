import styled from "styled-components";

import PropTypes from "prop-types";
import useMouseColorUpdate from "../../hooks/Tibo/useMouseColorUpdate.jsx";

const StyledField = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    height: 10%;
    font-size: calc(2px + 1.8vw);
    cursor: pointer;
`;

const StyledSlider = styled.div`
    width: 47%;
    background: linear-gradient(to right, ${(prop) => prop.color.map((elem) => `rgb(${elem[0]}, ${elem[1]}, ${elem[2]})`).join(",")});
    margin: 1% auto;
`;

const StyledLabel = styled.label`
    width: 7%;
    margin: auto 0;
`;

const StyledNumberField = styled.div`
    width: 40%;
    margin: auto 0;
    font-size: calc(2px + 1.4vw);
    
`;

const StyledNumberInput = styled.input`
    width: 37%;
    background: transparent;
    border: 2px solid white;
    color: white;
    margin-right: 5%;
    font-size: calc(2px + 1.6vw);

    /*
    * Below removes the increase and decrease button of the input for the number for Firefox
    */
    -moz-appearance: textfield;

    /*
    * Below removes the increase and decrease button of the input for the number for Chrome, ..
    */
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`;

const StyledP = styled.p`
    margin: 0;
`;

export default function ColorSlider(props){
    /*
    * Circular color slider, when left mouse button is clicked while being inside this component,
    * the color will be the color hovered over
    * */


    /*
    * Shallow copy
    * */
    let dark = [...props.color];
    dark[props.index] = 0;

    let bright = [...props.color];
    bright[props.index] = 255;

    const colorList = [
        dark,
        bright
    ];

    /*
    * Stores whether the user clicked the mouse button or not
    * */


    function updateMouse(e){


        const bounds = e.target.getBoundingClientRect();
        const x = (e.clientX - bounds.left)/bounds.width;

        const colorValue = Math.round((1-x)*dark[props.index]+x*bright[props.index]);
        const colorCopy = [...props.color];
        colorCopy[props.index] = colorValue;

        props.setColor(colorCopy)
    }

    function updateNumber(e){
        const colorValue = e.target.value;
        const colorCopy = [...props.color];
        colorCopy[props.index] = colorValue;
        props.setColor(colorCopy)
    }

    const {clickMouse, releaseMouse, enterMouse, checkUpdate} = useMouseColorUpdate(updateMouse);

    return(
        <StyledField>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledSlider color={colorList}
                         onMouseDown={clickMouse}
                         onMouseUp={releaseMouse}
                         onMouseMove={checkUpdate}
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

ColorSlider.propTypes = {
    color: PropTypes.array,
    setColor: PropTypes.func,
    index: PropTypes.number,
    label: PropTypes.string
}