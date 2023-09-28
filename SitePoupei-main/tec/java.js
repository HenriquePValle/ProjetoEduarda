var itens = [
    "bala fini",
    "salgadinho", 
    "doritos"
];



function pesquisar(){
    console.log("tá funcionado")
}

onkeydown = ()=>{
    pesquisar();
};

document.querySelector(".ladinho1").onclick = function(){
    document.querySelector("#anunc").scrollBy(365,0);

};


document.querySelector(".ladinho2").onclick = function(){
    document.querySelector("#anunc").scrollBy(-365,0);

};



