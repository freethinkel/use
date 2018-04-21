import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-port-card',
  templateUrl: './port-card.component.html',
  styleUrls: ['./port-card.component.styl']
})
export class PortCardComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
