function showText() {
    let elementText = document.getElementById("text");
    elementText.style.display = "flex";
    let elementContainer = document.getElementById("container");
    elementContainer.style.display = "none";
}


function changeColor(btnID) {
    const element = document.getElementById(btnID);
    element.style.backgroundColor = "hsl(25, 97%, 53%)";
    if(document.getElementById("btn1").style.backgroundColor == "hsl(25, 97%, 53%)"){
        document.getElementById("btn1").style.backgroundColor = "hsl(213, 19%, 24%)" 
        console.log ()
    }
}

