import { Injectable } from '@angular/core';
import { Product, Productcategory } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  productList: Productcategory[] = [
    {
      id: '1',
      title: 'Mug The best is yet to come',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/36-home_default/mug-the-best-is-yet-to-come.jpg',
      category: 'Polyster'
    },
    {
      id: '2',
      title: 'Mug The adventure begins',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/39-home_default/mug-the-adventure-begins.jpg',
      category: 'black'
    },
    {
      id: '3',
      title: 'Mud Today is a good day',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/43-home_default/mug-today-is-a-good-day.jpg',
      category: 'ceramics'
    },
    {
      id: '4',
      title: 'Mountain fox cushion',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/44-home_default/mountain-fox-cushion.jpg',
      category: 'black'
    },
    {
      id: '5',
      title: 'Brown bear cushion',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/63-home_default/brown-bear-cushion.jpg',
      category: 'polyster'
    },
    {
      id: '6',
      title: 'Hummingbird cushion',
      price: '500',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/47-home_default/hummingbird-cushion.jpg',
      category: 'black'
    },
    {
      id: '7',
      title: 'Pack Mug + Framed poster',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/56-home_default/pack-mug-framed-poster.jpg',
      category: 'black'
    },
    {
      id: '8',
      title: 'Customizable mug',
      price: '200',
      imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/67-home_default/customizable-mug.jpg',
      category: 'white'
    }
  ]

  getProducts() {
    return this.productList
  }
}
