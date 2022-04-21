let numAleatorio = Math.floor(Math.random() * 100) + 1

const palpites = document.querySelector('.palpites')
const ultimoResultado = document.querySelector('.ultimoResultado')
const baixoOuAlto = document.querySelector('.baixoOuAlto')

const campoPalpite = document.querySelector('.campoPalpite') 
const envioPalpite = document.querySelector('.envioPalpite')

let contagemPalpites = 1
let botaoReinicio 
campoPalpite.focus();

function conferirPalpite(){
    let palpiteUsuario = Number(campoPalpite.value)
    if(contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: '
    }
    palpites.textContent += palpiteUsuario + ' '

    if(palpiteUsuario === numAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!'
        ultimoResultado.style.backgroundColor = 'green'
        baixoOuAlto.textContent = ' '
        configFimDeJogo();
    } else if( contagemPalpites === 10) {
        ultimoResultado.textContent = ' Fim De Jogo! Tente Novamente'
        baixoOuAlto.textContent = ' '
        configFimDeJogo()
    } else {  
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
    if(palpiteUsuario < numAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
    } else if(palpiteUsuario > numAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
    }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite)

function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.classList.add('btn', 'btnReinicio')
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }

  function reiniciarJogo() {
    contagemPalpites = 1;
  
    let reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
  
    ultimoResultado.style.backgroundColor = 'white';
  
    numAleatorio = Math.floor(Math.random()* 100) + 1;
  }