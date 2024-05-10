let pj=0; // variavel pontos jogador
let pr=0; // variavel pontos c3po
let b1 =["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠"];
let b2 =["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣"];
let b3 =["A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"];
let b4 =["A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦"];
let b= b1.concat(b2,b3,b4);
let mj=[]; // Mary Jane mao do jogador
let mr=[]; // mão    o do robot felizola
let resposta;
function jogo(){ // rotina
        alert("Baralho Original conectado:"+ b);
        b.sort(randOrd);
        alert("Baralho depois de 1 embaralhada"+ b);
        b.sort(randOrd);
        alert("Baralho depois de 2 embaralhada"+ b);
        b.sort(randOrd);
        alert("Baralho depois de bem embaralhado"+ b);
        mj.push(b.shift());  
        mj.push(b.shift());
        mr.push(b.shift());  
        mr.push(b.shift());
       alert("Mão do jogador: "+mj);
       alert("Mão do robot: "+mr);
       

}
function randOrd() {
    return (Math.round(Math.random())-0.5);
}