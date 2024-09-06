import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Fashion } from '../_models/fashion';
import { FashionService } from '../_service/fashion.service';
import { CommonModule } from '@angular/common';
import { BestsellersComponent } from "../bestsellers/bestsellers.component";

@Component({
  selector: 'app-fashionwear',
  standalone: true,
  imports: [CardComponent, CommonModule, BestsellersComponent],
  templateUrl: './fashionwear.component.html',
  styleUrl: './fashionwear.component.scss'
})
export class FashionwearComponent {

  productList: Fashion[] = []

  constructor(private fashion: FashionService) {
    this.productList = this.fashion.getFashion()
  }

}
