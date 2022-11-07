import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { tb_parkingspotService } from './services/tb_parkingspot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParkingControlApi';
  public funcoes: string = 'cadastrar'
}
