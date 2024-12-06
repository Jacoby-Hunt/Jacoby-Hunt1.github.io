let canvas_element = document.getElementById("myc");
let toolbox = canvas_element.getContext("2d");

document.body.addEventListener("keydown", onkeydown);

function onkeydown (e) {
    drawBackground ();
    drawText (200, 200, e.key);
    console.log(e);
}

function drawBackground () {
    toolbox.fillStyle = "#000000";
    toolbox.fillRect(0, 0, 400, 400);
}

function drawText (x, y, text) {
    toolbox.font = "50px Arial";
    toolbox.textBaseline = "middle";
    toolbox.textAlign = "center";
    toolbox.fillStyle = "FF0000";
    toolbox.fillText(text, x, y);
}