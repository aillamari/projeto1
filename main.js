const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")

for(let i =0;i<botoes.length;i++){
    botoes[i].onclick = function(){
        for (let j = 0;j<botoes.length; j++){
			botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
}
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
 }
}
 const contador = document.querySelectorAll(".contador");
 const tempoObjetivo1 = new Date ("2024-10-05T00:00:00");
 const tempoObjetivo2 = new Date ("2024-12-05T00:00:00");
 const tempoObjetivo3 = new Date ("2024-02-05T00:00:00");
 const tempoObjetivo4 = new Date ("2024-02-05T00:00:00");
 let tempoAtual = new Date()
   const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]
   
   
 contador[0].textContent = calculaTempo(tempoObjetivo1)
 contador[1].textContent = calculaTempo(tempoObjetivo1)
 contador[2].textContent = calculaTempo(tempoObjetivo1)
 contador[3].textContent = calculaTempo(tempoObjetivo1)

 function calculaTempo(tempoObjetivo){ 

    let tempoAtual = new Date();
    let temmpoFinal = tempoObjetivo-tempoAtual;
    let segundos = Math.floor (temmpoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor (horas/24);
   
  
   segundos %= 60;
   minutos%= 60;
   horas %= 24;
   
    
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos " 

 }
 Function atualizaCromometro(){ 
   
    for (leti=0; i<contadores.length;i++){
        contador[i]. textContent = calculaTempo(tempos[])
    }
   }
