import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lowerupper-pipe',
  templateUrl: './lower-upper-pipe.component.html',
  styleUrls: ['./lower-upper-pipe.component.css']
})
export class LowerUpperPipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value !: string;
  change(value: string) { this.value = value; }

}
