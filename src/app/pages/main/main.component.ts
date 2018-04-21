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
    {
      id: 3,
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

  ports = [
    {
      title: 'Дизайн сайта Пицца-мания',
      color: '#fcb',
      image: 'https://images.unsplash.com/photo-1516938434748-d87cee49d7cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6665014680901b1a3fe663aaa9f44947&auto=format&fit=crop&w=1612&q=80'
    },
    {
      title: 'Логотип для КГЭУ',
      color: '#21afef',
      image: 'https://images.unsplash.com/photo-1486490686828-196042a38646?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a98c45d054e5e00bd81bad06f81b42e&auto=format&fit=crop&w=1567&q=80'
    },
    {
      title: 'Амир заебал, сдохни',
      color: '#f2f2f2',
      image: 'https://images.unsplash.com/photo-1480434935263-07efee66f5b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b274c9b9f4ff75ac33119c2fb9c35e65&auto=format&fit=crop&w=1500&q=80'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.btnToggle = !this.btnToggle;
  }

}
