import { Injectable } from '@angular/core';
import { Fashion } from '../_models/fashion';

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  constructor() { }

  productList: Fashion[] = [{
    imageURL: 'https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_bazza_home2_image_1.jpg?v=1705562760',
    title: 'Fall / Winter 2024 Collection',
    description: 'If you are looking for great ways to decorate your home or offi'
  },
  {
    imageURL: 'https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_bazza_home2_image_2.jpg?v=1705562760',
    title: 'Footwear',
    description: "The leading online destination for men's contemporary fashion a"
  }]

  getFashion() {
    return this.productList
  }
}
