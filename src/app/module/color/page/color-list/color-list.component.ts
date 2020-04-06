import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  color: any = d3.scaleOrdinal(d3.schemeCategory10);
  /*
  #1f77b4
  #ff7f0e
  #2ca02c
  #d62728
  #9467bd
  #8c564b
  #e377c2
  #7f7f7f
  #bcbd22
  #17becf
  */
  list: string[] = [];

  constructor() {
    let i: number = 0;
    while(i < 10) {
      this.list.push(this.color(i));
      i++;
    }
  }

  ngOnInit() {
  }

}