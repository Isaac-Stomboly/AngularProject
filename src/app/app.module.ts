import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductList } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent, ProductList, StarComponent,WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(
      [
        {
          path:'products', component: ProductList
        }, {
          path: 'welcome', component: WelcomeComponent
        }]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
