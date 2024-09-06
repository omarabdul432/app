import { Component } from '@angular/core';
import { Product, Productcategory } from '../_models/product';
import { CategoryService } from '../_service/category.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../_service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  filter = ['ceramics', 'polyster', 'white', 'Black']



  product: Productcategory[] = [{
    id: '',
    price: '',
    imageURL: '',
    title: '',
    category: ''
  }]
  constructor(private category: CategoryService, private cart: CartService, private router: Router) {
    this.product = this.category.getProducts()
    console.log(this.product)

  }

  addtocart(item: any) {
    this.cart.addtoCart(item)
    this.router.navigateByUrl('/cart')
  }

  // filteredproducts = this.product.filter(p => p.category === 'polyster' && p.price > '200')

}
