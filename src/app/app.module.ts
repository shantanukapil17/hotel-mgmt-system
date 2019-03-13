import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortsActivitiesComponent } from './lifestyle/resorts-activities/resorts-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent } from './weddings/westerns-weddings/westerns-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCustomerComponent } from "src/app/add-customer/add-customer.component";
import { EditCustomerComponent } from "src/app/edit-customer/edit-customer.component";
import { CustomerListComponent } from "src/app/customer-list/customer-list.component";
//import { ForgotPasswordComponent } from "src/app/forgot-password/forgot-password.component";
//import { VerifyEmailComponent } from "src/app/verify-email/verify-email.component";
import { User } from "src/app/shared/user";
import { AuthService } from "src/app/shared/auth.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFirestore } from "@angular/fire/firestore";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    AccomodationComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortsActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternsWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerListComponent,
   // ForgotPasswordComponent,
    //VerifyEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    AngularFireAuthModule, 
  ],
  providers: [AuthService,AngularFireAuthModule,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
