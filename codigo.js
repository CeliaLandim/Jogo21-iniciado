let temperamentos=["Agressivo","Normal","Calmo"];
let temperamento;
let limite=11;
let somajogador=0;
let somarobot=0;
let b1 =["A spade","2 spade","3 spade","4 spade","5 spade","6 spade","7 spade","8 spade","9 spade","10 spade","J spade","Q spade","K spade"];
let b2 =["A clubs","2 clubs","3 clubs","4 clubs","5 clubs","6 clubs","7 clubs","8 clubs","9 clubs","10 clubs","J clubs","Q clubs","K clubs"];
let b3 =["A heart","2 heart","3 heart","4 heart","5 heart","6 heart","7 heart","8 heart","9 heart","10 heart","J heart","Q heart","K heart"];
let b4 =["A diamond","2 diamond","3 diamond","4 diamond","5 diamond","6 diamond","7 diamond","8 diamond","9 diamond","10 diamond","J diamond","Q diamond","K diamond"];
let b= b1.concat(b2,b3,b4);
let mj=[]; // Mary Jane mao do jogador
let mr=[]; // mão    o do robot c3po
let resposta;
let comprar=true;//

function jogo(){ 
       if  (document.getElementById('on').textContent=="Comprar Carta"){
        mj.push(b.shift());  
        const novacarta = document.createElement("img");
        novacarta.className="carta";
        novacarta.src = "./img/"+mj[mj.length-1]+".png";

        document.getElementById("jogador").appendChild(novacarta);
        
       } else{
        //alert("Mão do jogador: "+mj);
       //alert("Mão do robot: "+mr);
       // colocar a mão do jogador na tela
       // embaralhar 12 vezes
       for (let index = 0; index < 13; index++) {
        b.sort(randOrd);
       };
      mj.push(b.shift());  
       mj.push(b.shift());
       mr.push(b.shift());  
       mr.push(b.shift());
       document.getElementById('cj1').setAttribute('src','./img/'+mj[0]+'.png');
       document.getElementById('cj2').setAttribute('src','./img/'+mj[1]+'.png');
       somajogador = (somarmao(mj));
       somarobot = (somarmao(mr));
        // aqui iremos implementar a inteligencia para o robot
                /* comprar=true // variavel que fará para o laço de compras do robot
            -enquanto compra e comprar = false
        se o temperamento = agressivo e somamão > limite de pontos então comprar mais uma carta
        senão não compra e compra = false.
        se o temperamento = Nomal e somamao < limite de pontos então compro mais uma carta
        senão não compra e compra = false.
        se o tempreramento = Calmo nunca compra carta e comprar = false.
        colocar o icone das cartas na mesa
        realizar rotina de compra do JOGADOR HUMANO
        enquanto quer comprar comprarcarta
        verifica o ganhador e exibe as mãos.
        */
        if (somarobot>=11 && somarobot<=15){
            mr.push(b.shift()); 
        } else {
            if (somarobot<=10){
                mr.push(b.shift()); 
                mr.push(b.shift()); 
            }
        }    
        somarobot = (somarmao(mr));
           alert("Robot ficou satisfeiro com "+ mr.length +" nas mãos....")
// vez do jogador ele será questionado se quer comprar mais cartas
document.getElementById('on').textContent="Comprar Carta"

        }        



    

       }
       
    function finalizar(){
        somajogador = (somarmao(mj));
       somarobot = (somarmao(mr));
       // todo: Coloque aqui a atualização para ver as cartas do robo na página
       alert("VocÊ fez :  " + somajogador+" /////////// o Robot fez: "+somarobot);
       //todo:  coloque aqui a condição de mostrar quem é o vencedor
       // faça isso antes de atualizar a página
       window.location.reload(true);
    }   



function pegueInteiroentre(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function somarmao(b){
    let soma=0;
    // para cada elemento c em b
    b.forEach(c => { // isto se chama arrow ==> function criar uma função dentro dos parenteses
       let pletra= c.charAt(0); 
       if  (pletra=='J'|| pletra=='Q' || pletra=='K' || pletra=='1'){
        soma=soma+10;
       } else {
         if (pletra=='A'){
            soma=soma+1;
         } else {
            soma = soma + parseInt(pletra);
        }}})
        return soma;
    }               
 
function randOrd() {
    return (Math.round(Math.random())-0.5);
}