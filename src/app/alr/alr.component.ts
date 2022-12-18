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
  prestidigitacaoALR:number;
  findALR:number;
  escutarALR:number;
  investigarALR:number;
  resFisicaALR:number;
  resMentalALR:number;
  resEspiritualALR:number;
  firstAidALR:number;
  medForenseALR:number;
  medicinaALR:number;
  atletismoALR:number;
  furtividadeALR:number;
  velocidadeALR:number;
  magiaALR:number;
  intelectoALR:number;
  conhecimentoALR:number;
  persuasaoALR:number;
  psicoALR:number;
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
    localStorage.setItem("prestidigitacaoALR",this.prestidigitacaoALR.toString());
    localStorage.setItem("findALR",this.findALR.toString());
    localStorage.setItem("escutarALR",this.escutarALR.toString());
    localStorage.setItem("investigarALR",this.investigarALR.toString());
    localStorage.setItem("resFisicaALR",this.resFisicaALR.toString());
    localStorage.setItem("resMentalALR",this.resMentalALR.toString());
    localStorage.setItem("resEspiritualALR",this.resEspiritualALR.toString());
    localStorage.setItem("firstAidALR",this.firstAidALR.toString());
    localStorage.setItem("medForenseALR",this.medForenseALR.toString());
    localStorage.setItem("medicinaALR",this.medicinaALR.toString());
    localStorage.setItem("atletismoALR",this.atletismoALR.toString());
    localStorage.setItem("furtividadeALR",this.furtividadeALR.toString());
    localStorage.setItem("velocidadeALR",this.velocidadeALR.toString());
    localStorage.setItem("magiaALR",this.magiaALR.toString());
    localStorage.setItem("intelectoALR",this.intelectoALR.toString());
    localStorage.setItem("conhecimentoALR",this.conhecimentoALR.toString());
    localStorage.setItem("persuasaoALR",this.persuasaoALR.toString());
    localStorage.setItem("psicoALR",this.psicoALR.toString());
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

  calcularSucesso(pericia){
    var dado = this.d100();
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

  constructor() { }

  ngOnInit(): void {
      if(localStorage.getItem("nomeALR") != null || localStorage.getItem("vidaALR") != null || localStorage.getItem("manaALR") != null){
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
        this.prestidigitacaoALR = parseInt(localStorage.getItem("prestidigitacaoALR"));
        this.findALR = parseInt(localStorage.getItem("findALR"));
        this.escutarALR = parseInt(localStorage.getItem("escutarALR"));
        this.investigarALR = parseInt(localStorage.getItem("investigarALR"));
        this.resFisicaALR = parseInt(localStorage.getItem("resFisicaALR"));
        this.resMentalALR = parseInt(localStorage.getItem("resMentalALR"));
        this.resEspiritualALR = parseInt(localStorage.getItem("resEspiritualALR"));
        this.firstAidALR = parseInt(localStorage.getItem("firstAidALR"));
        this.medForenseALR = parseInt(localStorage.getItem("medForenseALR"));
        this.medicinaALR = parseInt(localStorage.getItem("medicinaALR"));
        this.atletismoALR = parseInt(localStorage.getItem("atletismoALR"));
        this.furtividadeALR = parseInt(localStorage.getItem("furtividadeALR"));
        this.velocidadeALR = parseInt(localStorage.getItem("velocidadeALR"));
        this.magiaALR = parseInt(localStorage.getItem("magiaALR"));
        this.intelectoALR = parseInt(localStorage.getItem("intelectoALR"));
        this.conhecimentoALR = parseInt(localStorage.getItem("conhecimentoALR"));
        this.persuasaoALR = parseInt(localStorage.getItem("persuasaoALR"));
        this.psicoALR = parseInt(localStorage.getItem("psicoALR"));
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
      } else {
        this.nomeALR = "";
        this.vidaALR = 0;
        this.manaALR = 0;
        this.sanidadeALR = 0;
        this.lutarALR = 0;
        this.armasPesadasALR = 0;
        this.forBruALR = 0;
        this.esquivaALR = 0;
        this.bloqueioALR = 0;
        this.counterALR = 0;
        this.armasLevesALR = 0;
        this.armasDeFogoALR = 0;
        this.prestidigitacaoALR = 0;
        this.findALR = 0;
        this.escutarALR = 0;
        this.investigarALR = 0;
        this.resFisicaALR = 0;
        this.resMentalALR = 0;
        this.resEspiritualALR = 0;
        this.firstAidALR = 0;
        this.medForenseALR = 0;
        this.medicinaALR = 0;
        this.atletismoALR = 0;
        this.furtividadeALR = 0;
        this.velocidadeALR = 0;
        this.magiaALR = 0;
        this.intelectoALR = 0;
        this.conhecimentoALR = 0;
        this.persuasaoALR = 0;
        this.psicoALR = 0;
        this.intimidacaoALR = 0;
        this.forALR = 0;
        this.dexALR = 0;
        this.perceptionALR = 0;
        this.conALR = 0;
        this.labiaALR = 0;
        this.medALR = 0;
        this.intALR = 0;
        this.agiALR = 0;
        this.defALR = 0;
      }
    }
  }
