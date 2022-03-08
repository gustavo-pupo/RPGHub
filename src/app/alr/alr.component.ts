import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alr',
  templateUrl: './alr.component.html',
  styleUrls: ['./alr.component.css']
})
export class ALRComponent implements OnInit {

  nomeALR:string = "";
  vidaALR:number = parseInt("");
  manaALR:number = parseInt("");
  sanidadeALR:number = parseInt("");
  lutarALR:number = parseInt("");
  armasPesadasALR:number = parseInt("");
  forBruALR:number = parseInt("");
  esquivaALR:number = parseInt("");
  bloqueioALR:number = parseInt("");
  counterALR:number = parseInt("");
  armasLevesALR:number = parseInt("");
  armasDeFogoALR:number = parseInt("");
  precisaoALR:number = parseInt("");
  findALR:number = parseInt("");
  escutarALR:number = parseInt("");
  intuitionALR:number = parseInt("");
  resFisicaALR:number = parseInt("");
  resMentalALR:number = parseInt("");
  resEspiritualALR:number = parseInt("");
  firstAidALR:number = parseInt("");
  medForenseALR:number = parseInt("");
  medicinaALR:number = parseInt("");
  velocidadeALR:number = parseInt("");
  escaladaALR:number = parseInt("");
  acrobaciaALR:number = parseInt("");
  magiaALR:number = parseInt("");
  intelectoALR:number = parseInt("");
  conhecimentoALR:number = parseInt("");
  persuasaoALR:number = parseInt("");
  diplomaciaALR:number = parseInt("");
  intimidacaoALR:number = parseInt("");

  sucesso:boolean;
  tierSucesso:string;
  pericia:number;
  dado;

  d100(){
    let min = Math.ceil(1);
    let max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  salvar(){
    localStorage.setItem("nomeALR",this.nomeALR);
    localStorage.setItem("vidaALR",this.vidaALR.toString());
    localStorage.setItem("manaALR",this.manaALR.toString());
    localStorage.setItem("sanidadeALR",this.sanidadeALR.toString());
    localStorage.setItem("lutarALR",this.lutarALR.toString());
    localStorage.setItem("armasPesadasALR",this.armasPesadasALR.toString());
    localStorage.setItem("forBruALR",this.forBruALR.toString());
    localStorage.setItem("esquivaALR",this.esquivaALR.toString());
    localStorage.setItem("bloqueioALR",this.bloqueioALR.toString());
    localStorage.setItem("counterALR",this.counterALR.toString());
    localStorage.setItem("armasLevesALR",this.armasLevesALR.toString());
    localStorage.setItem("armasDeFogoALR",this.armasDeFogoALR.toString());
    localStorage.setItem("precisaoALR",this.precisaoALR.toString());
    localStorage.setItem("findALR",this.findALR.toString());
    localStorage.setItem("escutarALR",this.escutarALR.toString());
    localStorage.setItem("intuitionALR",this.intuitionALR.toString());
    localStorage.setItem("resFisicaALR",this.resFisicaALR.toString());
    localStorage.setItem("resMental",this.resMentalALR.toString());
    localStorage.setItem("resEspititualALR",this.resEspiritualALR.toString());
    localStorage.setItem("firstAidALR",this.firstAidALR.toString());
    localStorage.setItem("medForense",this.medForenseALR.toString());
    localStorage.setItem("medicinaALR",this.medicinaALR.toString());
    localStorage.setItem("velocidadeALR",this.velocidadeALR.toString());
    localStorage.setItem("escaladaALR",this.escaladaALR.toString());
    localStorage.setItem("acrobaciaALR",this.acrobaciaALR.toString());
    localStorage.setItem("magiaALR",this.magiaALR.toString());
    localStorage.setItem("intelectoALR",this.intelectoALR.toString());
    localStorage.setItem("conhecimentoALR",this.conhecimentoALR.toString());
    localStorage.setItem("persuasaoALR",this.persuasaoALR.toString());
    localStorage.setItem("diplomaciaALR",this.diplomaciaALR.toString());
    localStorage.setItem("intimidacaoALR",this.intimidacaoALR.toString());
  }

    contador:number = 1;
    incomoda:string = 'incomodam ';

    elefanteFdp(){
        while(this.contador > 0){
            if(this.contador == 1){
                alert(`${this.contador} elefante incomoda muita gente.`);
                this.contador++;
            }else{
            alert(this.contador + ' elefantes ' + this.incomoda.repeat(this.contador) +'muito mais.');
            this.contador++;
            alert(`${this.contador} elefantes incomodam muita gente.`);
            this.contador++;
            }
        }
    }

  calcularSucesso(pericia){
    var dado = this.d100();
    if(pericia >= 81){
      this.elefanteFdp();
    }
    if(dado <= pericia){
      this.sucesso = true;
    }else{
      this.sucesso = false;
    }
    this.calcularTipoSucesso(this.sucesso, pericia, dado)
  }

  calcularTipoSucesso(sucesso, pericia, dado){
    if(sucesso == true){
      if(dado > (50/100)*pericia){
        this.tierSucesso = "Normal";
      }
      if(dado > (20/100)*pericia && dado <= (50/100)*pericia){
        this.tierSucesso = "Bom";
      }
      if(dado <= (20/100)*pericia){
        this.tierSucesso = "Extremo";
      }
      if(dado == 1){
        this.tierSucesso = "Extremo";
      }
    }
    if(sucesso == false){
      if(dado == 100){
        this.tierSucesso = "Desastre";
      }else{
        this.tierSucesso = "Fracasso";
      }
    }
    console.log(dado);
    this.dado = dado;
  }

  testeLutar(){
    this.calcularSucesso(this.lutarALR);
  }
  testeArmasPesadas(){
    this.calcularSucesso(this.armasPesadasALR);
  }

  constructor() { }

  ngOnInit(): void {
    if(localStorage.length > 0){
      
  }
  }
}
