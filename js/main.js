var page = 1;

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+"];

var yourSymbol = null;

function start() {
    updatePage()
    console.log(page)
};

function restartPage() {
    if (page == 1) {
        page++;
        console.log(page);
    } else {
        page = 1;
        console.log(page);
    };
    updatePage();
};

function nextPage() {
    page++;
    console.log(1);
    updatePage();
};

function randomizeSymbol() {
    var icon = symbols[Math.floor(Math.random()*symbols.length)];
    var string = "";
    for(var i = 1; i <= 99; i++) {
        if (i % 9 === 0) {
            var yourSymbol = symbols[Math.floor(Math.random() *symbols.length)];
            string = string + i + "-" + yourSymbol + "<br>"
        }
        else {
            string = string + i + "-" + icon + "<br>"
        };
    };
    return string;
};

function updatePage() {
    headerDiv = document.getElementById("header");
    helperTextDiv = document.getElementById("helperText");
    button1Div = document.getElementById("button1");
    button2Div = document.getElementById("button2");

    if (page == 1) {
        headerDiv.innerText = "I can read your mind";
        helperTextDiv.innerText = "";
        button1Div.style.display = "none";
        button2Div.innerText = "Go";
    }
    else if (page == 2) {
        headerDiv.innerText = "Pick a number from 01-99";
        helperTextDiv.innerText = "when you have your number click next";
        button1Div.style.display = "block";
        button1Div.innerText = "NEXT";
        button2Div.innerText = "@";
    }
    else if (page == 3) {
        headerDiv.innerText = "add both digits together to get a new number";
        helperTextDiv.innerText = "Ex: 14 is 1+4=5 click next to proceed";
        button1Div.innerText = "NEXT";
        button2Div.innerText = "@";
    }
    else if (page == 4) {
        headerDiv.innerText = "subtract your new number from the original number";
        helperTextDiv.innerText = "Ex: 14-5=9 click next to proceed";
        button1Div.innerText = "NEXT";
        button2Div.innerText = "@";
    }
    else if (page == 5) {
        headerDiv.innerText = randomizeSymbol();
        helperTextDiv.innerText = "Find your new number. note the symbol beside the number";
        button1Div.innerText = "REVEAL";
        button2Div.innerText = "@";
    }
    else if (page == 6) {
        headerDiv.innerText = yourSymbol;
        helperTextDiv.innerText = "your symbol is:" + "<br>" + yourSymbol;
        button1Div.style.display = "none";
        button2Div.innerText = "@";
    }
}