import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from "src/app/accomodation/accomodation.component";
import { CelebrationsComponent } from "src/app/celebrations/celebrations.component";
import { FoodBeverageComponent } from "src/app/food-beverage/food-beverage.component";
import { LifestyleComponent } from "src/app/lifestyle/lifestyle.component";
import { WeddingsComponent } from "src/app/weddings/weddings.component";
import { OffersComponent } from "src/app/offers/offers.component";
import { SigninComponent } from "src/app/auth/signin/signin.component";
import { SignupComponent } from "src/app/auth/signup/signup.component";
import { HomeComponent } from "src/app/home/home.component";
import {DashboardComponent } from "src/app/dashboard/dashboard.component";
import { AddCustomerComponent } from "src/app/add-customer/add-customer.component";
import { CustomerListComponent } from "src/app/customer-list/customer-list.component";
import { EditCustomerComponent } from "src/app/edit-customer/edit-customer.component";
import { User } from "src/app/shared/user";
import { AuthService} from "./shared/auth.service";

import { AuthGuard } from "./shared/auth.guard";
import { SecureInnerPagesGuard } from "./shared/secure-inner-pages.guard";

import { HttpClientModule } from '@angular/common/http'; 



const routes: Routes = [
  {path : '', component: AddCustomerComponent},
  { path: 'home', component: HomeComponent},
  { path:'accomodation', component: AccomodationComponent },
  { path:'celebrations', component: CelebrationsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  {path: 'foodbeverage',
   redirectTo:'food-beverage',
  pathMatch: 'full'},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'weddings', component : WeddingsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'signin', component: SigninComponent,canActivate: [SecureInnerPagesGuard]},
  {path: 'signup', component: SignupComponent,canActivate: [SecureInnerPagesGuard]},
  
  
  {path : 'edit-customer', component: EditCustomerComponent},
  {path : 'customer-list', component: CustomerListComponent},
 
 
  //{path : 'customer-list', component: CustomerListComponent},
 {path: 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
