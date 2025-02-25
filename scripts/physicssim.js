const canvas = document.getElementById("1");
const ctx = canvas.getContext("2d");
let gravity = 1.5;
let circles = [];

class Circle {
    constructor(x, y, vy = 0, radius = 15, color = "#f2f2f2") {
        this.x = x;      // X position of the circle
        this.y = y;      // Y position of the circle
        this.vy = vy;    // Vertical velocity of the circle
        this.radius = radius;  // Radius of the circle
        this.color = color;    // Color of the circle
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    update(gravity, canvasHeight) {
        this.vy += gravity;
        this.y += this.vy;

        if (this.y >= canvasHeight - this.radius) {
            this.y = canvasHeight - this.radius;
            this.vy *= -0.8;
        }
    }

    check() {
        if(this.y <= 700 && Math.round(this.vy) == 0) {
            
        }
    }
}

function spawnBallButton() {
    let xpos = Math.floor(Math.random() * (canvas.width - 30)) + 15; // Random X position
    let ypos = 0; // Start at the top of the canvas
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color
    let size = Math.floor(Math.random() * 10) + 10; // Random size between 10 and 20

    circles.push(new Circle(xpos, ypos, 0, size, color));
}

// Listen for the button click and trigger spawnBallButton
document.getElementById('spawnBallButton').addEventListener('click', spawnBallButton);

// Your existing drawCanvas function to animate the canvas
async function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    if (triggered) {
        // Create new circles every 2 seconds
        let count = 0;
        const interval = setInterval(() => {
            // Here we could trigger the spawn ball logic directly if needed
            count++;
            if (count >= 1) {
                clearInterval(interval);
            }
        }, 2000);

        // Simulate gravity and update the canvas
        const gravityInterval = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

            circles.forEach(circle => {
                circle.update(gravity, canvas.height);
                circle.draw(ctx);
                circle.check();
            });
        }, 1000 / 60); // Update at ~60 FPS
    }
}
