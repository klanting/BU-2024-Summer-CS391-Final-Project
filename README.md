# Final Project CS 391

Created by:
- Nathan Arlan Djunaedi
- Tibo Verreycken

## Who did what
Nathan:
 - JSONEditor.jsx (visualization of the json on the page containing the styled information)
 - LoginPage.jsx (page to provide the API we want to load)
 - SelectionContext.jsx (Context containing which color is associated with which attribute, also tracking which option in the drop down menu is selected)

Tibo:
 - ColorMenu.jsx (Menu containing an apply button and the color picker)
 - ColorPicker.jsx (Wrapper to combine the color wheel and the color sliders)
 - ColorSlider.jsx (selector to change the RGB values of the color)
 - ColorWheel.jsx (Wheel to select a color)
 - ColorContextProvider.jsx (Context to store the current color, stored by the color wheel)
 - useMouseColorUpdate.jsx (custom hook to track whether the mouse is clicked (left-mouse click))

## Overview project
During this project, we make a tool that let you enter a URL to an API,
our program will display the json code, A color picker tool will be provided to change the color
of json components.

## Color Picker
The colorPicker component is made by Tibo Verreycken.
(It is recommended to read this part of the README using an editor that supports LaTeX)
This picker has multiple components. This color picker has lots of (complex) mathematical formulas.
All these calculations are done by myself.

### Color Wheel
The color wheel is a circle, when a user clicks inside the circle, the color will change
to the selected color. Determining the color required a lot of calculations.

The visualization of the color wheel is done using 'conic-gradient'. This sadly gives no feedback 
to which color the user clicks. That's why the following calculations are performed.
First using the event, the user its relative mouse position is retrieved and scaled to an XY-axis bound
by [-1, 1] for both x and y. The Wheel is a circle so the distance from the center (0, 0) is maximum 1.
The Next steps require some linear algebra, calculus, and computer graphics math, knowledge.
So the user puts its mouse on a position in the wheel [x, y]. The color gradient displayed by 'conic-gradient' 
is an interpolation based on the angle, so it is needed to determine an angle. The angle that will be determined is the angle between
[x, y] and [1, 0]. SideNote: the angle can be the same for [x, y] and [-x, y], that is why we will do an inverse rotation.


$`\begin{bmatrix}
\cos(\alpha) & -\sin(\alpha) \\
\sin(\alpha) & \cos(\alpha)
\end{bmatrix}
\cdot
\begin{bmatrix}
a\\
b
\end{bmatrix}
=\begin{bmatrix}
x\\
y
\end{bmatrix}`$

$`
a = 1
`$ and $`
b = 0
`$
as a result:
$`
\cos(\alpha) = x
`$ and $`
\sin(\alpha) = y
`$
We can find $`\alpha`$ using $`atan`$

$`\alpha = \tan^{-1}(y/x)`$
The only issue is that, if x < 0, we need to add PI to make sure
we have the correct angle.

Now we have the angle between the vector (1, 0) and (x, y). Keep in mind that the angle is calculated based on rotation, so that (x, y) and (-x, y) don't have the same angle with (1, 0).
This is important to distinguish both situations. Now an angle of 0 degrees, would be (1, 0), but the conic-gradient starts on top and works clockwise (instead of angle -> counterclockwise).
That is why a transformation of the angle is performed. First the angle get an angle of PI/2 subtracted, and after the angle is multiplied by -1. As a result the angle will match beter with conic-gradient.

Now having the angle, it is easy to find between which 2 color centers the angle is.
using linear interpolation $`color = color1*weight1+color2*weight2`$ with $`weight1 + weight 2 = 1`$.
The weight can be easily calculated. There is a list of predefined colors. Our angle is an angle in between 2 colors. So lets say we have x colors in a circle, than the angle between 2 such colors is
360 degrees divided by x. Using math floor, and ceil of the angle divided by this angle in between these 2 indexes can be found. The weights can be calculated by the proportion of the angle.
by subtracting the 'angle divided by angleSize' by the lower bound (floor) of 'angle divided by angleSize' index. The result is a providing the percentage of the angle away from the lower bound index,
the other weight is just 100% (1) - percentage angle.
'
### Color Slider
There are 3 color sliders, one for each value of RGB, the left is this color with the corresponding colorValue on 0 and the right on 255,
So the slider for Red (R) would be between colors: [0, g, b] - [255, g, b]. Just like the color wheel a user can click on a position to make changes to the color,
one of the RGB parameters at a time.

