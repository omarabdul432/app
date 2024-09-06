import { Component, inject, Input } from '@angular/core';
import { Product } from '../_models/product';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../_service/productservice.service';
import { Router } from '@angular/router';
import { CartService } from '../_service/cart.service';
import { FashionwearComponent } from "../fashionwear/fashionwear.component";



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FashionwearComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {


  router = inject(Router)
  product = inject(ProductserviceService)
  cart = inject(CartService)

  productList: Product[] = [{
    id: '',
    imageURL: '',
    price: '',
    title: ''
  }]
  constructor() {
    this.productList = this.product.getProducts()
    console.log('product', this.productList)
  }

  addCart(product: any) {
    this.router.navigateByUrl('cart')
    this.cart.addtoCart(product)
  }

}
