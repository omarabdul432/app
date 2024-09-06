import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { authGuard } from './_service/auth.guard';


export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent, canActivate: [authGuard] },
    { path: 'signin', component: SigninComponent },
    { path: 'card', component: CardComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'categories', component: CategoriesComponent, canActivate: [authGuard] }
];
