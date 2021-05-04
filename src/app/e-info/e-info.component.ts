import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Employee} from '../model/employee.model';
@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.scss'],
  providers: [DataService]
})
export class EInfoComponent implements OnInit {
  infoReceived: Employee[] = [];

  getInfoFromService(): void {
    this.infoReceived = this.dservice.getInfo();
  }

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

  updateInfo(frm: any): void {
    this.dservice.addLocation(frm.value.location);
  }

}
