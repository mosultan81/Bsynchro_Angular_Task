import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
import { AccountApiService } from './account-api.service';
import { CommonModule, NgForOf } from '@angular/common';
@NgModule({
  declarations: [
  ],
  imports: [
    HomeComponent,
    CommonModule,
    NgForOf,
    AppComponent,
    CustomerTransactionsComponent,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountApiService],
  bootstrap: []
})
export class AppModule { }
