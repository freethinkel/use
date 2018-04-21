import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.styl']
})
export class SinglePostComponent implements OnInit {

  constructor() { }

 

  post = {
    image: 'https://images.pexels.com/photos/955470/pexels-photo-955470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    id: 1,
    title: "Логотип для твоей мамки",
    сontent: "Время действия – наши дни. Место действия – Кения. Искусство и экология имеют много общего, как полагают кураторы проекта, суть которого: утилизация пластиковых отходов. Они становятся предметами обихода.Время действия – наши дни. Место действия – Кения. Искусство и экология имеют много общего, как полагают кураторы проекта, суть которого: утилизация пластиковых отходов. Они становятся предметами обихода.Время действия – наши дни. Место действия – Кения. Искусство и экология имеют много общего, как полагают кураторы проекта, суть которого: утилизация пластиковых отходов. Они становятся предметами обихода."
  }

  ngOnInit() {
  }

}
