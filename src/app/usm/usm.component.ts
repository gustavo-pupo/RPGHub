import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usm',
  templateUrl: './usm.component.html',
  styleUrls: ['./usm.component.css']
})
export class USMComponent implements OnInit {
  
  nomeUSM = "";
  intUSM:number = parseInt("0");
  qtdManaUSM = "0";
  forUSM:number = parseInt("0");
  conUSM:number = parseInt("0");
  qtdVidaUSM = "0";
  dexUSM:number = parseInt("0");
  tiroUSM:number = parseInt("0");
  sentirUSM:number = parseInt("0");
  curaUSM:number = parseInt("0");
  tacarUSM:number = parseInt("0");
  labiaUSM:number = parseInt("0");
  toolsUSM:number = parseInt("0");

  salvarInfos(){
    localStorage.setItem("nomeUSM", this.nomeUSM);
    localStorage.setItem("intUSM",  this.intUSM.toString());
    localStorage.setItem("qtdManaUSM", this.qtdManaUSM);
    localStorage.setItem("forUSM", this.forUSM.toString());
    localStorage.setItem("conUSM", this.conUSM.toString());
    localStorage.setItem("qtdVidaUSM",this.qtdVidaUSM);
    localStorage.setItem("dexUSM", this.dexUSM.toString());
    localStorage.setItem("tiroUSM", this.tiroUSM.toString());
    localStorage.setItem("sentirUSM", this.sentirUSM.toString());
    localStorage.setItem("curaUSM", this.curaUSM.toString());
    localStorage.setItem("tacarUSM", this.tacarUSM.toString());
    localStorage.setItem("labiaUSM", this.labiaUSM.toString());
    localStorage.setItem("toolsUSM", this.toolsUSM.toString());
  }

  sucesso:string;
  dado;
  teste:string;

  d20(){
    let min = Math.ceil(1);
    let max = Math.floor(21);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  testeAtributos(dado, atributo){
    if(atributo == 0){
        if(dado == 1){
        this.sucesso = "Desastre";
        } else{
        this.sucesso = "Fracasso";
        }
    }
    if(atributo >= 1 && atributo <= 4){
        if(dado == 20){
            this.sucesso = "Normal";
        } else if(dado == 1){
            this.sucesso = "Desastre";
        } else{
            this.sucesso = "Fracasso"
        }
    }
    if(atributo >= 5 && atributo <= 9){
        if(dado == 1){
            this.sucesso = "Desastre";
        } else if(dado >= 2 && dado <= 16){
            this.sucesso = "Fracasso";
        } else if(dado >= 17 && dado <= 18 ){
            this.sucesso = "Normal";
        } else if(dado == 19){
            this.sucesso = "Bom";
        } else if(dado == 20){
            this.sucesso = "Extremo";
        }
    }
    if(atributo >= 10 && atributo <= 14){
        if(dado == 1){
            this.sucesso = "Desastre";
        } else if(dado >= 2 && dado <= 12){
            this.sucesso = "Fracasso";
        } else if(dado >= 13 && dado <= 16 ){
            this.sucesso = "Normal";
        } else if(dado >= 17 && dado <= 18){
            this.sucesso = "Bom";
        } else if(dado >= 19 && dado <= 20){
            this.sucesso = "Extremo";
        }
    }
    if(atributo >= 15 && atributo <= 19){
        if(dado == 1){
            this.sucesso = "Desastre";
        } else if(dado >= 2 && dado <= 8){
            this.sucesso = "Fracasso";
        } else if(dado >= 9 && dado <= 14 ){
            this.sucesso = "Normal";
        } else if(dado >= 15 && dado <= 17){
            this.sucesso = "Bom";
        } else if(dado >= 18 && dado <= 20){
            this.sucesso = "Extremo";
        }
    }
    if(atributo == 20){
        if(dado == 1){
            this.sucesso = "Desastre";
        } else if(dado >= 2 && dado <= 4){
            this.sucesso = "Fracasso";
        } else if(dado >= 5 && dado <= 12 ){
            this.sucesso = "Normal";
        } else if(dado >= 13 && dado <= 16){
            this.sucesso = "Bom";
        } else if(dado >= 17 && dado <= 20){
            this.sucesso = "Extremo";
        }
    }
    console.log(this.sucesso)
  }

testeForca(){
  this.dado = this.d20();
  this.teste = "Força";
  return this.testeAtributos(this.dado, this.forUSM);
}
testeCon(){
  this.dado = this.d20();
  this.teste = "Constituição";
  return this.testeAtributos(this.dado, this.conUSM);
}
testeDex(){
  this.dado = this.d20();
  this.teste = "Destreza";
  return this.testeAtributos(this.dado, this.dexUSM);
}
testeAtirar(){
  this.dado = this.d20();
  this.teste = "Atirar";
  return this.testeAtributos(this.dado, this.tiroUSM);
}
testePercep(){
  this.dado = this.d20();
  this.teste = "Percepção";
  return this.testeAtributos(this.dado, this.sentirUSM);
}
testeCura(){
  this.dado = this.d20();
  this.teste = "Primeiros-Socorros";
  return this.testeAtributos(this.dado, this.curaUSM);
}
testeTacar(){
  this.dado = this.d20();
  this.teste = "Arremessar";
  return this.testeAtributos(this.dado, this.tacarUSM);
}
testeIntel(){
  this.dado = this.d20();
  this.teste = "Inteligência";
  return this.testeAtributos(this.dado, this.intUSM);
}
testeLabia(){
  this.dado = this.d20();
  this.teste = "Lábia";
  return this.testeAtributos(this.dado, this.labiaUSM);
}
testeTools(){
  this.dado = this.d20();
  this.teste = "Ferramentas";
  return this.testeAtributos(this.dado, this.toolsUSM);
}

  constructor() {
  }    

  ngOnInit():void {

    if(localStorage.getItem("intUSM") == null||localStorage.getItem("conUSM") == null){
      this.nomeUSM = "";
      this.intUSM = parseInt("0");
      this.qtdManaUSM = "0";
      this.forUSM = parseInt("0");
      this.conUSM = parseInt("0");
      this.qtdVidaUSM = "0";
      this.dexUSM = parseInt("0");
      this.tiroUSM = parseInt("0");
      this.sentirUSM = parseInt("0");
      this.curaUSM = parseInt("0");
      this.tacarUSM = parseInt("0");
      this.labiaUSM = parseInt("0");
      this.toolsUSM = parseInt("0");
    }else{
    this.nomeUSM = localStorage.getItem('nomeUSM');
    this.intUSM = parseInt(localStorage.getItem('intUSM'));
    this.qtdManaUSM = localStorage.getItem('qtdManaUSM');
    this.forUSM = parseInt(localStorage.getItem('forUSM'));
    this.conUSM = parseInt(localStorage.getItem('conUSM'));
    this.qtdVidaUSM = localStorage.getItem('qtdVidaUSM');
    this.dexUSM = parseInt(localStorage.getItem('dexUSM'));
    this.tiroUSM = parseInt(localStorage.getItem('tiroUSM'));
    this.sentirUSM = parseInt(localStorage.getItem('sentirUSM'));
    this.curaUSM = parseInt(localStorage.getItem('curaUSM'));
    this.tacarUSM = parseInt(localStorage.getItem('tacarUSM'));
    this.labiaUSM = parseInt(localStorage.getItem('labiaUSM'));
    this.toolsUSM = parseInt(localStorage.getItem('toolsUSM'));
    }
  }
}