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
    background-image: radial-gradient(rgba(255,255,255,1) 5%, transparent 55%);
    
`;

export default function ColorField(props){

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


    function updateMouse(e){

        /*
        * only update the color if the mouse is clicked
        * */
        if (!mouseClicking){
            return
        }

        const bounds = e.target.getBoundingClientRect();
        const x = (e.clientX - bounds.left)/bounds.width*2-1;
        const y = ((e.clientY - bounds.top)/bounds.height*2-1)*-1;

        const distance = Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2));

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

        /*
        * Make angle value start at the top (while also changing the direction)
        * */
        angleValue -= Math.PI/2
        angleValue *= -1

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

        /*
        * The color depends on the angle.
        * An angle is always between 2 other predefined color angles.
        * The selected color will be a linear interpolation between the 2 colors, based on the angle
        * */

        const colorAngleSize = (2*Math.PI/(rgbList.length-1));

        const colorIndex1 = Math.floor(angle / colorAngleSize)
        const colorIndex2 = Math.ceil(angle / colorAngleSize)

        const angleRemainder = angle - Math.floor(angle / colorAngleSize)

        const colorWeight1 = 1 - angleRemainder;
        const colorWeight2 = angleRemainder;

        const color1 = rgbList[colorIndex1];
        const color2 = rgbList[colorIndex2];

        let resultColor = []

        for (let i=0; i<color1.length; i++){
            resultColor.push(Math.round((color1[i]*colorWeight1)+(color2[i]*colorWeight2)))
        }

        /*
        * The distance from the center also influences the color
        * because of the sphere the max distance is 1. In the code
        * the center 5% is white, and 5%-55% center is a gradient of white.
        * This code will apply the right interpolation between the white coloring and the real colors
        * */
        if (distance <= 0.05){
            resultColor = [255, 255, 255];
        } else if (distance <= 0.55){

            const whiteWeight = 1 - (distance-0.05)*2;

            const colorCopy = resultColor
            resultColor = []

            for (let i=0; i<color1.length; i++){
                resultColor.push(Math.round((colorCopy[i]*(1-whiteWeight))+(255*whiteWeight)))
            }

        }

        props.setColor(resultColor);

    }

    return(
        <StyledColorField colors={rgbList}
                          onMouseDown={clickMouse}
                          onMouseUp={releaseMouse}
                          onMouseMove={updateMouse}
        >
            <StyledWhitenessField>

            </StyledWhitenessField>
        </StyledColorField>
    );
}