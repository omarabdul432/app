import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  constructor() { }

  productList: Product[] = [{
    id: '1',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/24-home_default/hummingbird-printed-t-shirt.jpg',
    title: 'Hummingbird printed t-shirt',
    price: '550'
  },
  {
    id: '2',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/28-home_default/brown-bear-printed-sweater.jpg',
    title: 'Hummingbird printed sweater',
    price: '550'
  },
  {
    id: '3',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/31-home_default/the-best-is-yet-to-come-framed-poster.jpg',
    title: 'The best is yet come',
    price: '550'
  },
  {
    id: '4',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/34-home_default/today-is-a-good-day-framed-poster.jpg',
    title: 'The best is yet come',
    price: '550'
  },
  {
    id: '5',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/39-home_default/mug-the-adventure-begins.jpg',
    title: 'Mug the adventure begins',
    price: '550'
  },
  {
    id: '6',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/32-home_default/the-adventure-begins-framed-poster.jpg',
    title: 'The best is yet come',
    price: '550'
  },
  {
    id: '7',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/36-home_default/mug-the-best-is-yet-to-come.jpg',
    title: 'The best is yet come',
    price: '550'
  },
  {
    id: '8',
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/43-home_default/mug-today-is-a-good-day.jpg',
    title: 'The best is yet come',
    price: '550'
  },
  ]

  getBestsellers() {
    return this.productList
  }
}
