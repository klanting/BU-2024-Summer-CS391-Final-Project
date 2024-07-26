import styled from "styled-components";
import {useState} from "react";
//${(prop) => prop.colors.map((elem) => `rgb(${elem[0]}, ${elem[1]}, ${elem[2]})`)}
const StyledColorField = styled.div`
    width: 50vw;
    height: 50vw;
    background-image: conic-gradient(
            ${(prop) => prop.colors.map((elem) => `rgb(${elem[0]}, ${elem[1]}, ${elem[2]})`).join(",")}
    );
    border-radius: 50%;
`;

const StyledWhitenessField = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 50%;
    
    /*background-image: radial-gradient( rgba(255, 255, 255, 1),  rgba(255, 255, 255, 0));*/
    background-image: radial-gradient(ellipse at center, rgba(255,255,255,1) 5%, transparent 55%);
    
`;

export default function ColorField(){

    const [angle, setAngle] = useState(0);

    /*
    * List of colors in the color picker (equally seperated)
    * */
    const rgbList = [
        [255, 0, 0],
        [255, 255, 0],
        [0, 255, 0],
        [0, 255, 255],
        [0, 0, 255],
        [255, 0, 255],
        [255, 0, 0]
    ];

    function updateMouse(e){

        const bounds = e.target.getBoundingClientRect();
        const x = (e.clientX - bounds.left)/bounds.width*2-1;
        const y = ((e.clientY - bounds.top)/bounds.height*2-1)*-1;

        /*
        * x and y are now relative mouse positions between [-1, 1] for both x and y
        * (x, y) represents (cos(angle), sin(angle)) of an unknown angle
        *
        * (x, y) represents a 2D vector, we want to find the angle on a circle,
        * so we search the angle between (x, y) and (1, 0). This angle equals to.
        *
        * to determine this angle and to distinguish (359 degrees with 1 degree),
        * we will do an inverse rotation.
        *
        * 2D rotation over angle:
        * [[cos(angle), -sin(angle)], [sin(angle), cos(angle)]] * [[1], [0]] =
        * [[x], [y]]
        * Writing out the left side: cos(angle) = x, sin(angle) = y
        * So angle = tan^(-1)(b/a), but when y < 0 an angle of pi need to be added
        *
        * */
        let angleValue = Math.atan(y/(x))
        if (x < 0){
            angleValue += Math.PI
        }

        /*
        * The angle is not necessary in the range of [0, 2 PI]
        * so below the value will be changed with 2PI till it is in range
        * */

        const rotationsChanged = Math.floor(angleValue/(2*Math.PI));
        angleValue -= rotationsChanged*2*Math.PI;

        setAngle(angleValue);

    }

    /*
    * The color depends on the angle.
    * An angle is always between 2 other predefined color angles.
    * The selected color will be a linear interpolation between the 2 colors, based on the angle
    * */

    return(
        <StyledColorField onClick={updateMouse} colors={rgbList}>
            <StyledWhitenessField>

            </StyledWhitenessField>
        </StyledColorField>
    );
}