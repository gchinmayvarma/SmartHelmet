const VRMode = false;

function preload() {
    if (VRMode) createVRCanvas();
}

function setup_vr() {
    setVRBackgroundColor(23, 23, 23);
}

function setup() {
    if (VRMode) setup_vr();
    else createCanvas(500, 500, WEBGL);
}

function calculate() { }

function draw() {
    if (!VRMode) {
        background(10);
        orbitControl();
    }
    let n = 20,
        d = 40;
    for (let i = 0; i < n; i++) {
        let t = map(i, 0, n, 0, TWO_PI);
        push();
        rotateY(t + frameCount / 100);
        translate(0, 0, d);

        // translate(d * cos(t), 0, d * sin(t));

        // rotateX(10);
        // rotateY(20);

        box(i * 0.7);
        pop();
    }
}
