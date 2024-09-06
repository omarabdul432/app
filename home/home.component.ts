import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { ProductserviceService } from '../_service/productservice.service';
import { Product } from '../_models/product';
import { FashionwearComponent } from "../fashionwear/fashionwear.component";
import { BestsellersComponent } from "../bestsellers/bestsellers.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FashionwearComponent, BestsellersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productList: Product[] = []


}
