let level = 0;
const artirma =document.querySelector(#arti);
const azaltma =document.querySelector(#eksi);

const artirmaButtonu = document.querySelector("#arti");
const azaltmaButonu = document.querySelector("#eksi");
const level1 = document.querySelector("#ust");
const level2 = document.querySelector("#orta");
const level3 = document.querySelector("#alt")

artirmaButtonu.addEventListener("click",function(){
    pilSeviyesi++
    piliDoldur(level);
});

function piliArtir() {
    level++
    piliDoldur()
}

function piliAzalt() {
    level--
    piliDoldur()
}


azaltmaButtonu.addEventListener("click",function(){
    pilSeviyesi--
    piliDoldur(level);
});


function piliDoldur(pLevel) {
    
    if (pLevel == 0) {
        level1.style.backgroundColor = "white";
        level2.style.backgroundColor = "white";
        level3.style.backgroundColor = "white";
    }
    else if (pLevel == 1) {
        level1.style.backgroundColor = "red";
        level2.style.backgroundColor = "white";
        level3.style.backgroundColor = "white";
    }
    else if (pLevel == 2) {
        level1.style.backgroundColor = "orange";
        level2.style.backgroundColor = "orange";
        level3.style.backgroundColor = "white";
    }
    else if (pLevel == 3) {
        level1.style.backgroundColor = "green";
        level2.style.backgroundColor = "green";
        level3.style.backgroundColor = "green";
    }
    return
}


artirmaButtonu.addEventListener("click",piliArtir)
azaltmaButtonu.addEventListener("click",piliAzalt)


