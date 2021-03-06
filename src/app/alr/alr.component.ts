import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alr',
  templateUrl: './alr.component.html',
  styleUrls: ['./alr.component.css']
})
export class ALRComponent implements OnInit {

  forALR:number;
  dexALR:number;
  perceptionALR:number;
  conALR:number;
  labiaALR:number;
  medALR:number;
  intALR:number;
  agiALR:number;
  defALR:number;

  nomeALR:string = "";
  vidaALR:number;
  manaALR:number;
  sanidadeALR:number;
  lutarALR:number;
  armasPesadasALR:number;
  forBruALR:number;
  esquivaALR:number;
  bloqueioALR:number;
  counterALR:number;
  armasLevesALR:number;
  armasDeFogoALR:number;
  precisaoALR:number;
  findALR:number;
  escutarALR:number;
  intuitionALR:number;
  resFisicaALR:number;
  resMentalALR:number;
  resEspiritualALR:number;
  firstAidALR:number;
  medForenseALR:number;
  medicinaALR:number;
  velocidadeALR:number;
  escaladaALR:number;
  acrobaciaALR:number;
  magiaALR:number;
  intelectoALR:number;
  conhecimentoALR:number;
  persuasaoALR:number;
  diplomaciaALR:number;
  intimidacaoALR:number;

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
    localStorage.setItem("resMentalALR",this.resMentalALR.toString());
    localStorage.setItem("resEspiritualALR",this.resEspiritualALR.toString());
    localStorage.setItem("firstAidALR",this.firstAidALR.toString());
    localStorage.setItem("medForenseALR",this.medForenseALR.toString());
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
    localStorage.setItem("forALR",this.forALR.toString());
    localStorage.setItem("dexALR",this.dexALR.toString());
    localStorage.setItem("perceptionALR",this.perceptionALR.toString());
    localStorage.setItem("conALR", this.conALR.toString());
    localStorage.setItem("labiaALR",this.labiaALR.toString());
    localStorage.setItem("medALR",this.medALR.toString());
    localStorage.setItem("intALR",this.intALR.toString());
    localStorage.setItem("agiALR",this.agiALR.toString());
    localStorage.setItem("defALR",this.defALR.toString());
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

  testeResFisica(){
    this.calcularSucesso(this.resFisicaALR);
  }
  testeResEspiritual(){
    this.calcularSucesso(this.resEspiritualALR);
  }
  testeSanidade(){
    this.calcularSucesso(this.sanidadeALR);
  }
  testeLutar(){
    this.calcularSucesso(this.lutarALR);
  }
  testeArmasPesadas(){
    this.calcularSucesso(this.armasPesadasALR);
  }
  testeForBru(){
    this.calcularSucesso(this.forBruALR);
  }
  testeEsquiva(){
    this.calcularSucesso(this.esquivaALR);
  }
  testeBloqueio(){
    this.calcularSucesso(this.bloqueioALR);
  }
  testeCounter(){
    this.calcularSucesso(this.counterALR);
  }
  testeArmasLeves(){
    this.calcularSucesso(this.armasLevesALR);
  }
  testeArmasDeFogo(){
    this.calcularSucesso(this.armasDeFogoALR);
  }
  testePrecisao(){
    this.calcularSucesso(this.precisaoALR);
  }
  testeFind(){
    this.calcularSucesso(this.findALR);
  }
  testeEscutar(){
    this.calcularSucesso(this.intuitionALR);
  }
  testeIntuition(){
    this.calcularSucesso(this.intuitionALR);
  }
  testefirstAid(){
    this.calcularSucesso(this.firstAidALR);
  }
  testeMedForense(){
    this.calcularSucesso(this.medForenseALR);
  }
  testeMedicina(){
    this.calcularSucesso(this.medicinaALR);
  }
  testeVelocidade(){
    this.calcularSucesso(this.velocidadeALR);
  }
  testeEscalada(){
    this.calcularSucesso(this.escaladaALR);
  }
  testeAcrobacia(){
    this.calcularSucesso(this.acrobaciaALR);
  }
  testeMagia(){
    this.calcularSucesso(this.magiaALR);
  }
  testeIntelecto(){
    this.calcularSucesso(this.intelectoALR);
  }
  testeConhecimento(){
    this.calcularSucesso(this.conhecimentoALR);
  }
  testePersuasao(){
    this.calcularSucesso(this.persuasaoALR);
  }
  testeDiplomacia(){
    this.calcularSucesso(this.diplomaciaALR);
  }
  testeIntimidacao(){
    this.calcularSucesso(this.intimidacaoALR);
  }

  constructor() { }

  ngOnInit(): void {
      this.nomeALR = localStorage.getItem("nomeALR")
      this.vidaALR = parseInt(localStorage.getItem("vidaALR"));
      this.manaALR = parseInt(localStorage.getItem("manaALR"));
      this.sanidadeALR = parseInt(localStorage.getItem("sanidadeALR"));
      this.lutarALR = parseInt(localStorage.getItem("lutarALR"));
      this.armasPesadasALR = parseInt(localStorage.getItem("armasPesadasALR"));
      this.forBruALR = parseInt(localStorage.getItem("forBruALR"));
      this.esquivaALR = parseInt(localStorage.getItem("esquivaALR"));
      this.bloqueioALR = parseInt(localStorage.getItem("bloqueioALR"));
      this.counterALR = parseInt(localStorage.getItem("counterALR"));
      this.armasLevesALR = parseInt(localStorage.getItem("armasLevesALR"));
      this.armasDeFogoALR = parseInt(localStorage.getItem("armasDeFogoALR"));
      this.precisaoALR = parseInt(localStorage.getItem("precisaoALR"));
      this.findALR = parseInt(localStorage.getItem("findALR"));
      this.escutarALR = parseInt(localStorage.getItem("escutarALR"));
      this.intuitionALR = parseInt(localStorage.getItem("intuitionALR"));
      this.resFisicaALR = parseInt(localStorage.getItem("resFisicaALR"));
      this.resMentalALR = parseInt(localStorage.getItem("resMentalALR"));
      this.resEspiritualALR = parseInt(localStorage.getItem("resEspiritualALR"));
      this.firstAidALR = parseInt(localStorage.getItem("firstAidALR"));
      this.medForenseALR = parseInt(localStorage.getItem("medForenseALR"));
      this.medicinaALR = parseInt(localStorage.getItem("medicinaALR"));
      this.velocidadeALR = parseInt(localStorage.getItem("velocidadeALR"));
      this.escaladaALR = parseInt(localStorage.getItem("escaladaALR"));
      this.acrobaciaALR = parseInt(localStorage.getItem("acrobaciaALR"));
      this.magiaALR = parseInt(localStorage.getItem("magiaALR"));
      this.intelectoALR = parseInt(localStorage.getItem("intelectoALR"));
      this.conhecimentoALR = parseInt(localStorage.getItem("conhecimentoALR"));
      this.persuasaoALR = parseInt(localStorage.getItem("persuasaoALR"));
      this.diplomaciaALR = parseInt(localStorage.getItem("diplomaciaALR"));
      this.intimidacaoALR = parseInt(localStorage.getItem("intimidacaoALR"));
      this.forALR = parseInt(localStorage.getItem("forALR"));
      this.dexALR = parseInt(localStorage.getItem("dexALR"));
      this.perceptionALR = parseInt(localStorage.getItem("perceptionALR"));
      this.conALR = parseInt(localStorage.getItem("conALR"));
      this.labiaALR = parseInt(localStorage.getItem("labiaALR"));
      this.medALR = parseInt(localStorage.getItem("medALR"));
      this.intALR = parseInt(localStorage.getItem("intALR"));
      this.agiALR = parseInt(localStorage.getItem("agiALR"));
      this.defALR = parseInt(localStorage.getItem("defALR"));
  }
}
