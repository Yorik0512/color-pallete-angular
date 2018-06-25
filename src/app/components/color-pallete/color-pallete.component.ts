import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.scss']
})
export class ColorPalleteComponent implements OnInit {
  colorPalleteItems = [
    {
      name: 'Red',
      color: 'rgb(255,0,0)'
    },
    {
      name: 'Green',
      color: 'rgb(0,128,0)'
    },
    {
      name: 'Blue',
      color: 'rgb(0,0,255)'
    },
    {
      name: 'Black',
      color: 'rgb(0,0,0)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
