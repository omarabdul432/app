import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

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
    imageURL: 'https://demo811.leotheme.com/prestashop/leo_bazza_demo/65-home_default/brown-bear-notebook.jpg',
    title: 'Brown bear notebook',
    price: '550'
  }
  ]

  getProducts() {
    return this.productList
  }
}
