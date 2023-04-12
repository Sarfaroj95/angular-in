import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  datas:any = [
    {name: "Data 1", id: 1},
    {name: "Data 2", id: 2},
    {name: "Data 3", id: 3},
    {name: "Data 4", id: 4}
  ]

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  panelOpenState = false;
  angularSet: any;

  constructor(private service: ServiceService) { 
    this.angularSet = service.getQuestionAnswer();
  }

  ngOnInit(): void {

  this.datas =  this.datas.map((item:any, index:any) => ({ ...item, hashid: '#'+'collapse'+index, onlyid: 'collapse'+index }));
  console.log(this.datas);


  }

  getData(){
    this.service.getQuestionAnswer();
  }

}
