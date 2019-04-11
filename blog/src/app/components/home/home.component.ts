import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items$: any;

  public text = 'Test';

  constructor(private service: DataService) {}

  ngOnInit() {
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    })
  }
  
}
