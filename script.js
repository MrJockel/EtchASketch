
let array = [];
const sketchBox = document.querySelector('#sketchBox');
let fields = document.getElementById("sizeSelector").value;

resetCanvas()


function createHorizontalDivs(fields) {
    for (let i = 0; i < fields; i++) {
        let li = document.createElement('div');
        li.className = "divBoxHorizontal";
        li.id = "horizontal" + i
        // li.style = "border: 1px gray solid; ";
        sketchBox.appendChild(li);
        array.push(li);



    }
}


function createVerticalDivs(item, fields) {
    for (let i = 0; i < fields; i++) {
        const selectedDiv = document.querySelector("#" + item.id)
        let li = document.createElement('div');
        li.className = "divBoxVertical";
        li.id = "vertical" + i;
        // li.style = "border: 1px gray solid;";
        selectedDiv.appendChild(li);


    }
}

function func() {
    item.setAttribute("style", "background-color:blue;")
}

var slider = document.getElementById("sizeSelector");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function () {
    output.innerHTML = this.value;
    fields = this.value;
}

function resetCanvas() {
    const myNode = document.getElementById("sketchBox");
    myNode.innerHTML = '';
    array = [];


    createHorizontalDivs(fields);

    array.forEach(element => {
        createVerticalDivs(element, fields);
    });


    const boxes = document.querySelectorAll(".divBoxVertical");

    boxes.forEach(box => {
        box.addEventListener('pointerenter', function handleClick(event) {


            box.setAttribute('style', 'background-color: blue;');
        });
    });



    var myDiv = document.getElementById("currentSize");
    myDiv.innerHTML = "Current Size: " + fields + " x " + fields;
}