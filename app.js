function copy(text){
    navigator.clipboard.writeText(text);
    showToast("Copiado");
}

function showToast(msg){
    const t = document.getElementById("toast");
    t.innerText = msg;
    t.style.display = "block";

    setTimeout(()=>{
        t.style.display = "none";
    },1500);
}

function buscar(txt){
    txt = txt.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{
        card.style.display = card.innerText.toLowerCase().includes(txt) ? "block":"none";
    });
}