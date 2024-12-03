function greet(name) {
    document.getElementById("output").innerText = "Hello, ${name}!";
}
greet(kypros);
function changeMessage() {
    document.getElementById("message").innerText = "Hello, World!";
}

function addNum() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    sum = num1 + num2;
    document.getElementById("result").innerText = "Result: " + sum;
}


function title() {
    newtitle = document.getElementById("inputt").value;
    document.getElementById("title").innerText = newtitle;
}
function concatenatestrings() {
    t1 = document.getElementById("text1").value;
    t2 = document.getElementById("text2").value;
    combined = t1 + " " + t2;
    document.getElementById("combinedtext").innerText = combined;
}


document.getElementById("changebackground").addEventListener("click", function() {
    document.getElementById("colorBox").style.backgroundColor = "blue";
});
