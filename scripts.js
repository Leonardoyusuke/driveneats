let pratoclicado;
let pratos_clicado; 
let bebida_clicada;
let sobremesas_clicada;
let comidaclicada
let nomeproduto
let comida

let botaofinalizar = document.querySelector(".finalizar4");
botaofinalizar.disabled = true;

function bordaprato(seletor) {
    const comidaselecionada = document.querySelector(".prato-clicado");

    if (comidaselecionada !== null) {
        comidaselecionada.classList.remove("prato-clicado");
        comidaselecionada.classList.remove("ion-icon")
    }
    seletor.classList.add("prato-clicado");
    seletor.classList.add("ion-icon")
    pratoselected = seletor.innerHTML;
    finalizarpedido()
}
function bordabebida(seletor) {
    const comidaselecionada = document.querySelector(".bebida-clicada");

    if (comidaselecionada !== null) {
        comidaselecionada.classList.remove("bebida-clicada");
    }
    seletor.classList.add("bebida-clicada");

    bebidaselected = seletor.innerHTML;
    finalizarpedido()
}
function bordasobremesas(seletor) {
    const comidaselecionada = document.querySelector(".sobremesas-clicada");
    
    if (comidaselecionada !== null) {
        comidaselecionada.classList.remove("sobremesas-clicada");
    }
    seletor.classList.add("sobremesas-clicada");
    
   sobremesaselected = seletor.innerHTML;
   finalizarpedido()

}
function finalizarpedido(){
    const click = document.querySelector('.prato-clicado');
    const click2 = document.querySelector('.bebida-clicada');
    const click3 = document.querySelector('.sobremesas-clicada');
    const removerfinalizar = document.querySelector(".finalizar5");
    console.log(removerfinalizar.innerHTML)
    if (click && click2 && click3){
        console.log('oi')
      removerfinalizar.classList.remove("finalizar5");
      botaofinalizar.disabled = false;
      
    }
  }

  function enviarmsg() {
    const comida = document.querySelector(".prato-clicado>.nomeproduto").innerHTML;
    const bebida2 = (document.querySelector(".bebida-clicada>.nomeproduto").innerHTML);
    const sobremesa2 = (document.querySelector(".sobremesas-clicada>.nomeproduto").innerHTML);
    let precototal = 0;
    let x = (document.querySelector(".prato-clicado>.preco").innerHTML).replace("R$ ", "");
    x = x.replace(",", ".");
    x = Number(x);
    precototal += x;    
    x = (document.querySelector(".bebida-clicada>.preco").innerHTML).replace("R$ ", ""); // preço bebida
    x = x.replace(",", ".");
    x = Number(x);
    precototal += x;    
    x = (document.querySelector(".sobremesas-clicada>.preco").innerHTML).replace("R$ ", ""); // preço sobremesa
    x = x.replace(",", ".");
    x = Number(x);
    precototal += x;    

    precototal = String(precototal.toFixed(2).replace(".", ","));
    
    let uri = `Olá, gostaria de fazer o pedido:\n- Prato: ${comida}\n- Bebida: ${bebida2}\n- Sobremesa: ${sobremesa2}\nTotal: R$ ${precototal}`;
    uri = encodeURIComponent(uri)
    window.open("https://wa.me/351937137645?text=" + uri);
    console.log("oi323")
}