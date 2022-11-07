import { Component, OnInit } from '@angular/core';
import { tb_parkingspotService } from 'src/app/services/tb_parkingspot.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  
  constructor(private tb_parkingspotService: tb_parkingspotService){
    
  }
  ngOnInit(): void {
    
    
  }
  cadastrar(){
    let itens = document.getElementsByTagName('input')
    let carro
    let stringcarro = '{'
    for (let i=0; i<itens.length; i++){
      stringcarro += `"${itens[i].getAttribute("alt")}":"${itens[i].value}",`
    }
    stringcarro = stringcarro.replace(/.$/, '}');
    carro = JSON.parse(stringcarro)
    this.tb_parkingspotService.save(carro).subscribe(
      response => {
        window.alert("Carro cadastrado.")
        for (let i=0; i<itens.length; i++){
          itens[i].value = ""
        }
      },
      error => {
        if(error.status == 409){
          window.alert("Vaga/Placa já cadastrada. Verifique as informações.")
        }
      }
  );
    }
  }
