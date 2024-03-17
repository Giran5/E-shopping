import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit{

   productLists: any;
 
  constructor() { }

  
  ngOnInit() {
    
    this.productLists = [
      {
        tittle: 'Iphone Trends',
        description: '$200 14%off',
        image: '/assets/image/list/iphone1.png',
      },
      {
        tittle: 'imported sofa',
        description: '$1100 9%off',
        image: '/assets/image/list/sofa1.webp',
      },
      {
        tittle: 'Cross-Fountain Pen',
        description: '$800  10%off',
        image: '/assets/image/list/pen.webp'
      },
      {
        tittle: 'HeadPhone',
        description: '$1100 9%off',
        image: '/assets/image/list/headset.jpg',
      },
      {
        tittle: 'HP Lap-top',
        description: '$1100 9%off',
        image: '/assets/image/list/laptop.png',
      },
      {
        tittle: 'CopperBottle',
        description: '$1100 9%off',
        image: '/assets/image/list/copperbottle.png'
      },
      {
        tittle: 'Kids Fashions',
        description: '$1100 9%off',
        image: '/assets/image/list/kids2.avif',
      },
      {
        tittle: 'imported sofa',
        description: '$1100 9%off',
        image: '/assets/image/shoe.jpg'
      },
      {
        tittle: 'Mens Collection',
        description: '$1100 9%off',
        image: '/assets/image/list/mensoutfit.webp'
      },
      {
        tittle: 'Samsung S24',
        description: '$200 14%off',
        image: '/assets/image/list/samsung s24.png',
      },
      {
        tittle: 'Pemium Stove',
        description: '$800  10%off',
        image: '/assets/image/list/gastov.webp'
      },
      {
        tittle: 'Engagement Ring',
        description: '$800  10%off',
        image: '/assets/image/list/ring1.jpg'
      },
      {
        tittle: 'Hoodies',
        description: '$800  10%off',
        image: '/assets/image/list/hoodies.webp'
      },
      {
        tittle: 'Hoodies',
        description: '$800  10%off',
        image: '/assets/image/footwearlable.jpg'
      },
      {
        tittle: 'HandBags',
        description: '$1100 9%off',
        image: '/assets/image/list/yonex.jpg'
      },
      {
        tittle: 'Travel Bag',
        description: '$1100 9%off',
        image: '/assets/image/list/travelbag.png'
      },
      {
        tittle: 'Projector',
        description: '$1100 9%off',
        image: '/assets/image/list/projector.webp'
      },
      {
        tittle: 'RainCoat',
        description: '$1100 9%off',
        image: '/assets/image/list/raincoat.png'
      },
      {
        tittle: 'HandBags',
        description: '$1100 9%off',
        image: '/assets/image/list/womensbag.png'
      },
     
      {
        tittle: '5STAR AC',
        description: '$1100 9%off',
        image: '/assets/image/list/ac.png'
      },
      {
        tittle: 'Canon',
        description: '$1100 9%off',
        image: '/assets/image/list/printer.png'
      },
      {
        tittle: 'TV Table',
        description: '$1100 9%off',
        image: '/assets/image/list/tvtable.avif'
      },
      {
        tittle: 'Imported Tank',
        description: '$1100 9%off',
        image: '/assets/image/list/fishtank.avif'
      },
  
      {
        tittle: 'Gamingcomputer',
        description: '$1100 9%off',
        image: '/assets/image/list/gamingcomputer.png'
      },
      {
        tittle: 'Gamingcomputer',
        description: '$1100 9%off',
        image: '/assets/image/list/watch.png'
      },
      {
        tittle: 'HomeTheater',
        description: '$1100 9%off',
        image: '/assets/image/list/hometheater.png'
      },
      {
        tittle: 'LED TV',
        description: '$1100 9%off',
        image: '/assets/image/list/ledtv.png'
      },
      {
        image: '/assets/image/list/update-soon.png'
      },
      {
        image: '/assets/image/list/update-soon.png'
      },
      {
        image: '/assets/image/list/update-soon.png'
      },

    ]
    
  }

 

}
