import { Component, OnInit } from '@angular/core';
import { tb_parkingspotService } from 'src/app/services/tb_parkingspot.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})

export class ExcluirComponent implements OnInit {
  public clientes$: any = []
  public excluido:boolean = false
  constructor(private tb_parkingspotService: tb_parkingspotService){
    this.getClientes()
  }
  ngOnInit(): void {
    this.getClientes()
  }
  getClientes(){
    this.tb_parkingspotService.getAll().subscribe((clientes) => (this.clientes$ = clientes))
  }
  excluirCliente(){
    let inputID = document.getElementById("IDinput") as HTMLInputElement
    let id = inputID.value
    this.tb_parkingspotService.deletebyid(id).subscribe(
      resultado => {
        this.clientes$ = resultado
      },
      erro => {
        if (erro.status == 404) {
          this.clientes$ = "naoencontrado"
        }
      }
    )
    console.log(this.clientes$)
  }
}
