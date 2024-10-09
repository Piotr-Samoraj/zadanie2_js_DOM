function zbierzZainteresowania() {
    let zainteresowania = [];
    
    for (let i = 0; i < 5; i++) {
        let input = prompt("Podaj swoje zainteresowanie " + (i + 1) + ":");
        if (input) {
            zainteresowania.push(input);
        }
    }

    let lista = document.querySelector("#list");
    zainteresowania.forEach(function(zainteresowanie) {
        let li = document.createElement('li');
        li.textContent = zainteresowanie;
        lista.appendChild(li);
    });
}
zbierzZainteresowania()
let input1 = document.querySelector("#input")

 //2. defiiuję funkcję zdarznie
 function myEvent(){
    let myText = input1.value
    let p = document.querySelector("#par")
    p.innerHTML = myText
 }
 document.querySelector("#but").onclick = myEvent
 let headingEl = document.querySelector("#par"); 
 headingEl.style.color = "#00FF00";
 headingEl.style.weight = "bold";
 headingEl.style.fontFamily = "Courier";
 headingEl.style.textShadow = "2px 2px 3px rgba(0, 0, 0, 1)";
 