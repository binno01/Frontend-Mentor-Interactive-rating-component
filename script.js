function showText() {
    let elementText = document.getElementById("text");
    elementText.style.display = "flex";
    let elementContainer = document.getElementById("container");
    elementContainer.style.display = "none";
  }

function changeColor(btn) {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("orange");
    }
    btn.classList.add("orange");
   // console.log(btn.innerText)
   let elementRes = document.getElementById("result");
  elementRes.innerText = `You selected ${btn.innerText} out of 5`

  }

