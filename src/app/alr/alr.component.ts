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
  resFisicaALR:number = parseInt("0");
  resMentalALR:number = parseInt("0");
  resEspiritualALR:number = parseInt("0");
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
    if(localStorage.getItem("resFisicaALR")==null||localStorage.getItem("resMentalALR")==null||localStorage.getItem("resEspiritual")==null){
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
      this.precisaoALR = 0;
      this.findALR = 0;
      this.escutarALR = 0;
      this.intuitionALR = 0;
      this.resFisicaALR = 0;
      this.resMentalALR = 0;
      this.resEspiritualALR = 0;
      this.firstAidALR = 0;
      this.medForenseALR = 0;
      this.medicinaALR = 0;
      this.velocidadeALR = 0;
      this.escaladaALR = 0;
      this.acrobaciaALR = 0;
      this.magiaALR = 0;
      this.intelectoALR = 0;
      this.conhecimentoALR = 0;
      this.persuasaoALR = 0;
      this.diplomaciaALR = 0;
      this.intimidacaoALR = 0;
    }else{
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
      this.armasDeFogoALR = parseInt(localStorage.getItem("armasDeFogo"));
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
    }
  }
}
