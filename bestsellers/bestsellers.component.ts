import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { BestsellersService } from '../_service/bestsellers.service';
import { Product } from '../_models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent {

  productList: Product[] = []

  constructor(private seller: BestsellersService) {
    this.productList = this.seller.getBestsellers()
  }
}
