import {useState} from "react";


export default function useMouseColorUpdate(updateFunction){
    /**
     * This Hook is a hook to update a field, based on whether a mouse button is clicked
     * while being inside a component.
     * This tracks whether the mouse is clicked or not while being inside a component
     *
     * Using this hook, it is easy to track whether a place inside a component is clicked or not
     *
     * hook Created by Tibo Verreycken
     */

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

    function checkUpdate(e){
        /*
        * only update the color if the mouse is clicked
        * */
        if (!mouseClicking){
            return;
        }

        return updateFunction(e);
    }

    return {clickMouse, releaseMouse, enterMouse, checkUpdate}
}
