let menu = document.getElementsByClassName("menu")
//BOTAO ABRIR MENU
function btnIconeBars(){
    for(let i = 0; i < menu.length; i++ ){
        menu[i].style.display="block"
    }
}
//BOTAO FECHAR MENU
function btnIconeClose(){
    for(let i = 0; i < menu.length; i++){
        menu[i].style.display="none"
    }

}

//SECAO : OQUE NOS OFERECEMOS
let filhosContServicos = document.getElementsByClassName("filhosContServicos")
function btnRadio1(){
      for(let i =0; i < filhosContServicos.length; i++){
        filhosContServicos[0].style.display="block"
        filhosContServicos[1].style.display="none"
        filhosContServicos[2].style.display="none"
      }
}

function btnRadio2(){
    for(let i =0; i < filhosContServicos.length;i++){
        filhosContServicos[1].style.display="block"
        filhosContServicos[0].style.display="none"
        filhosContServicos[2].style.display="none"
    }

}

function btnRadio3(){
    for(let i = 0; i < filhosContServicos.length; i++){
        filhosContServicos[2].style.display="block"
        filhosContServicos[0].style.display="none"
        filhosContServicos[1].style.display="none"
    }

}

//SECAO PORQUE NOS ESCOLHER
let iconeMostrar = document.getElementsByClassName("iconeMostrar")
let iconeOcultar = document.getElementsByClassName("iconeOcultar")
let fCPQNEDTexto = document.getElementsByClassName("fCPQNEDTexto")

function botaoAbrir1(){
    for(let i = 0;i < fCPQNEDTexto.length;i++){
        fCPQNEDTexto[0].style.display="block"
        iconeMostrar[0].style.display="none"
        iconeOcultar[0].style.display="block"

    }
}

function botaoFechar1(){
    for(let i = 0;i < fCPQNEDTexto.length;i++){
        fCPQNEDTexto[0].style.display="none"
        iconeOcultar[0].style.display="none"
        iconeMostrar[0].style.display="block"
        
    }
}
function botaoAbrir2(){
    for(let i = 0;i < fCPQNEDTexto.length;i++){
        fCPQNEDTexto[1].style.display="block"
        iconeMostrar[1].style.display="none"
        iconeOcultar[1].style.display="block"

    }
}

function botaoFechar2(){
    for(let i = 0;i < fCPQNEDTexto.length;i++){
        fCPQNEDTexto[1].style.display="none"
        iconeOcultar[1].style.display="none"
        iconeMostrar[1].style.display="block"    
    }    
}

function botaoAbrir3(){
    for(let i = 0;i < fCPQNEDTexto.length;i++){
        fCPQNEDTexto[2].style.display="block"
        iconeMostrar[2].style.display="none"
        iconeOcultar[2].style.display="block"
    }
}

function botaoFechar3(){
    for(let i = 0;i < fCPQNEDTexto.length;i++){
        fCPQNEDTexto[2].style.display="none"
        iconeOcultar[2].style.display="none"
        iconeMostrar[2].style.display="block"    
    } 
}

//SECAO PROXIMAS ROTAS
let proxRotContFilhos = document.getElementsByClassName("proxRotContFilhos")

function botaoRadio4(){
        for(let i = 0; i < proxRotContFilhos.length;i++){
            proxRotContFilhos[0].style.display="block"
            proxRotContFilhos[1].style.display="none"
            proxRotContFilhos[2].style.display="none"
        }
    }

function botaoRadio5(){
        for(let i = 0; i < proxRotContFilhos.length;i++){
            proxRotContFilhos[1].style.display="block"
            proxRotContFilhos[0].style.display="none"
            proxRotContFilhos[2].style.display="none"
        }
    }

function botaoRadio6(){
    for(let i =0;i < proxRotContFilhos.length;i++){
        proxRotContFilhos[2].style.display="block"
        proxRotContFilhos[0].style.display="none"
        proxRotContFilhos[1].style.display="none"
    }
}
    