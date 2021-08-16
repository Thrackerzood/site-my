import { Component, OnInit } from "@angular/core";

export interface IImage{
   path: string
   alt: string
   name: string
   rout: string
}


@Component({
   selector: 'app-nav',
   templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit{
   constructor(
      
   ){

   }
   style:boolean = false
   img:IImage[] = [
      {path: '../assets/nav/home.webp',alt: 'home', name: 'Домашняя', rout: '/'},
      {path: '../assets/nav/list.webp',alt: 'list', name: 'Примеры работ', rout: '/work'},
      {path: '../assets/nav/contacts.webp',alt: 'contacts', name: 'Контакты', rout: '/contacts'},
      {path: '../assets/nav/github.webp',alt: 'github', name: 'Github', rout: 'https://github.com/Thrackerzood'},
   ]
   ngOnInit(){

   }
}