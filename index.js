//Atividade 1
 
let botao1 = document.getElementById(`aa`)
let botao2 = document.getElementById(`ab`)
let botao3 = document.getElementById(`bb`)
 
botao1.addEventListener(`click`, function() {
    botao1.style.backgroundColor = `green`;
})
 
botao2.addEventListener(`click`, function() {
    botao2.style.backgroundColor = `red`;
})
 
botao3.addEventListener(`click`, function() {
    botao3.style.backgroundColor = `orange`;
})
 
//Atividade 2
 
let botao4 = document.getElementById(`bc`)
let contador = document.getElementById(`contador`)
let botaoResetar = document.getElementById(`reset`)
let contando = 0
 
botao4.addEventListener(`click`, function() {
    contando = contando + 1
    contador.textContent = contando
})
 
botaoResetar.addEventListener(`click`, function() {
    contando = 0
    contador.textContent = contando
})
 
//Atividade 3
 
let texto1 = document.getElementById(`txtShow`)
let botaoShow = document.getElementById(`show`)
let checar = false
 
botaoShow.addEventListener(`click`, function() {
    if(checar == false) {
        texto1.innerText = `Show da bola`
        checar = true
    } else {
        texto1.innerText = ``
        checar = false
    }
})
 
//Atividade 4
 
let texto2 = document.getElementById(`txtEpic`)
let botaoMudarTexto = document.getElementById(`changeTxt`)
 
botaoMudarTexto.addEventListener(`click`, function() {
    texto2.innerText = prompt(`Digite um novo texto:`)
})
 
//Atividade 5
 
let mostrarTecla = document.getElementById(`showKey`)
 
document.addEventListener(`keydown`, function(event) {
    mostrarTecla.innerText = `Você pressionou: ${event.key}`
})
 
//Atividade 6
 
let botaoVotar = document.getElementById(`toVote`)
let candidatoNome = document.getElementById(`candidatoNome`)
let candidatoFoto = document.getElementById(`candidatoFoto`)
let candidatoNum
let tinda = 0
let jorgeDoBanco = 0
let romilsonDaRadio = 0
let domingoMartins = 0
let nulo = 0
 
botaoVotar.addEventListener(`click`, function() {
    candidatoNum = prompt(`Insira o número do candidato`)
   
    if (candidatoNum == 55) {
        candidatoNome.innerText = `Tinda`
        candidatoFoto.innerHTML = `<img src="https://s2-g1.glbimg.com/IM7bzD09MWV8KX-s6cHkOnVYUA8=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130002230716_div.jpg" width="100" alt="Candidato Tinda">`
        a = prompt(`Confirmar?`)
        tinda = tinda + 1
    } else if (candidatoNum == 10) {
        candidatoNome.innerText = `Jorge do Banco`
        candidatoFoto.innerHTML = `<img src="https://s2-g1.glbimg.com/zlgwSqikCsgGEV514aM5hUFWpXA=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130001994472_div.jpg" width="100" alt="Candidato Jorge do Banco">`
        a = prompt(`Confirmar?`)
        jorgeDoBanco = jorgeDoBanco + 1
    } else if (candidatoNum == 33) {
        candidatoNome.innerText = `Romilson da Rádio`
        candidatoFoto.innerHTML = `<img src="https://s2-g1.glbimg.com/I62tJe3j9sHSQ7rpDwX4GR8buQQ=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130002230569_div.jpg" width="100" alt="Candidato Romilson da Rádio">`
        a = prompt(`Confirmar?`)
        romilsonDaRadio = romilsonDaRadio + 1
    } else if (candidatoNum == 44) {
        candidatoNome.innerText = `Domingo Martins`
        candidatoFoto.innerHTML = `<img src="https://s2-g1.glbimg.com/QZxnUOzNJPw2O_-DwP5oDOOg7IQ=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130002108450_div.jpg" width="100" alt="Candidato Domingo Martins">`
        a = prompt(`Confirmar?`)
        domingoMartins = domingoMartins + 1
    } else {
        alert(`Voto nulo`)
        a = prompt(`Confirmar?`)
        nulo = nulo + 1
    }
 
    console.log(`Tinda: ${tinda} votos\nJorge do Banco: ${jorgeDoBanco} votos\nRomilson da Rádio: ${romilsonDaRadio} votos\nDomingo Martins: ${domingoMartins} votos`)
})