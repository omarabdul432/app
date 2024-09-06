import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = JSON.parse(localStorage.getItem('cart') || '[]')
  constructor() { }


  addtoCart(product: any) {
    this.items.push({ ...product, quantity: 1 })
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id)
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  getItems() {
    return this.items
  }

  increseQuantity(id: any) {
    let item = this.items.find((i) => i.id == id)
    if (item) {
      item.quantity++
    }
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  decreaseQuantity(id: any) {
    let item = this.items.find((i) => i.id == id)
    if (item) {
      item.quantity--
    }
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }


}
