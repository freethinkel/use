import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-btns',
  templateUrl: './social-btns.component.html',
  styleUrls: ['./social-btns.component.styl']
})
export class SocialBtnsComponent implements OnInit {

  @Input() type;
  constructor() { }

  ngOnInit() {
  }

}
