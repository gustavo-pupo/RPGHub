import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alr',
  templateUrl: './alr.component.html',
  styleUrls: ['./alr.component.css']
})
export class ALRComponent implements OnInit {

  sucesso:boolean;
  tierSucesso:string;
  pericia:number;
  dado;

  d100(){
    let min = Math.ceil(1);
    let max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  calcularSucesso(pericia){
    var dado = this.d100();
    console.log(dado);
    if(dado <= pericia){
      this.sucesso = true;
    }else{
      this.sucesso = false;
    }
    return this.sucesso && dado;
  }

  calcularTipoSucesso(sucesso, pericia, dado){
    this.calcularSucesso(pericia)
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
    }
    if(sucesso == false){
      if(dado == 100){
        this.tierSucesso = "Desastre";
      }else{
        this.tierSucesso = "Fracasso";
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
