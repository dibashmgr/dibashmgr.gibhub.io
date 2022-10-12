
function setup() {
    createCanvas (600, 400);
    background(0)

}

px = 0
py = 0

vx = 0
vy = 0
radius = 30
function draw () {
    background(0)

    vx = vx + 0.5
    vy = vy + 0.5


    ellipse(px+vx, radius, radius);
}
