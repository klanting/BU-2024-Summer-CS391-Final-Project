# Final Project CS 391

Created by:
- Nathan Arlan Djunaedi
- Tibo Verreycken

## Overview project
During this project, we make a tool that let you enter a URL to an API,
our program will display the json code, A color picker tool will be provided to change the color
of json components.

## Color Picker
The colorPicker component is made by Tibo Verreycken.
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

$\begin{bmatrix}
\cos(\alpha) & -\sin(\alpha) \\
\sin(\alpha) & \cos(\alpha)
\end{bmatrix}
\cdot
\begin{bmatrix}
a\\
b
\end{bmatrix}
=
\begin{bmatrix}
x\\
y
\end{bmatrix}$


### Color Slider


