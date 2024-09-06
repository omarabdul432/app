import { Component, inject } from '@angular/core';
import { CartService } from '../_service/cart.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  router = inject(Router)
  cart = inject(CartService)

  increment(id: any) {
    this.cart.increseQuantity(id)
  }

  decrement(id: any) {
    this.cart.decreaseQuantity(id)
  }

  onDelete(item: any) {
    this.cart.delete(item)
  }

  onBack() {
    this.router.navigateByUrl('home')
  }
}
