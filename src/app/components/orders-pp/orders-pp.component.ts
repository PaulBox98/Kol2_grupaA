import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/pp-data.service';

@Component({
  selector: 'app-orders-pp',
  templateUrl: './orders-pp.component.html',
  styleUrls: ['./orders-pp.component.css']
})
export class OrdersPPComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getItems().subscribe(response => {
      this.items$ = response;
    });
  }


}
