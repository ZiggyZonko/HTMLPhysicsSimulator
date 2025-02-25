# 🖥️ HTMLPhysicsSimulator 🛜

🖼️ Background 🖼️

This physics simulator represents how gravity works in the form of spheres with a constant gravity amount, being able to change the amount of gravity units presented in the simulation. Being able to simulate real-life gravity would be vitally important in the future for simulating new awesome technology relating to physics and gravity.

❓ How it works ❓

The Simulation works by having a class/constructor for the circle class and spawning whenever the button is pressed. The class parameters are colours, size, x-pos, y-pos and vy (velocity Y). The Gravity interval works by every second it is in the air, the vy goes up when it reaches the bottom of the canvas, bouncing it in the other direction, and the velocity y ticks down depending on the gravity and how long and how many bounces the ball has taken. The Gravity slider works by having a range between 1 and 3000 and dividing whatever you get or slide to by 1000 hence the line

`gravity = this.value / 1000`

and

`text.textContent = 'Gravity:' + this.value / 1000`


The `Physicssim.js` script contains all the necessary code for the circle and class as well as the canvas/background physics. Where the `index.js` script contains all the nessecary code for the navigation side of the HTML function, which I will add later

👋 If you have any questions feel free to contact me! Have Fun 👋
