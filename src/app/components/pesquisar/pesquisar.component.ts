import { Component, OnInit } from '@angular/core';
import { ResponseCliente } from 'src/app/model/responsecliente';
import { tb_parkingspotService } from 'src/app/services/tb_parkingspot.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  public clientes$: ResponseCliente[] = []
  
  constructor(private tb_parkingspotService: tb_parkingspotService){
    this.getClientes()
  }
  ngOnInit(): void {
    this.getClientes()
  }

  getClientes(){
    // console.log("Opa!!!" + "clientes")
    this.tb_parkingspotService.getAll().subscribe((clientes) => {
      this.clientes$ = clientes.content
    })
    // console.log(this.tb_parkingspotService.getAll().subscribe((clientes) => (this.clientes$ = clientes.content)))
  }
  procurarCliente(){
    let inputID = document.getElementById("IDinput") as HTMLInputElement
    let id = inputID.value
    this.tb_parkingspotService.getbyid(id).subscribe(
      resultado => {
        this.clientes$ = []
        this.clientes$[0] = resultado as ResponseCliente
        // console.log(this.clientes$)
      },
      erro => {
        if (erro.status == 404) {
          window.alert("Carro não encontrado")
          this.getClientes()  
        }
      }  
    )
  }

}