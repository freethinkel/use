import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.styl']
})
export class PostCardComponent implements OnInit {

  @Input() post;
  
  constructor() { }

  ngOnInit() {
  }

}
