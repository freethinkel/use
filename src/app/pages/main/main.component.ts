import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {
  btnToggle;


  posts = [
    {
      id: 1,
      title: 'Искусство из мусора',
      date: 'Вт, 3 апреля 2018',
      content: 'Время действия – наши дни. Место действия – Кения. Искусство и экология имеют много общего, как полагают кураторы проекта, суть которого: утилизация пластиковых отходов. Они становятся предметами обихода.',
    },
    {
      id: 2,
      title: 'Искусство из мусора - 2',
      date: 'Вт, 3 апреля 2018',
      content: 'Время действия – наши дни. Место действия – Кения. Искусство и экология имеют много общего, как полагают кураторы проекта, суть которого: утилизация пластиковых отходов. Они становятся предметами обихода.',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.btnToggle = !this.btnToggle;
  }

}
