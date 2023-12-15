import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer-transactions',
  standalone: true,
  imports: [RouterModule,CommonModule,AppComponent],
  templateUrl: './customer-transactions.component.html',
  styleUrl: './customer-transactions.component.css'
})
export class CustomerTransactionsComponent implements OnInit{
  constructor(private httpClient : HttpClient){}

  customerTransactions : any = [];
  customerId : number = 1;

  ngOnInit(): void {
    this.displayCustomerTransactions(this.customerId);
  }

  displayCustomerTransactions(customerId : number)
  {
    this.httpClient.get("https://transactionsbsynchroapi.azurewebsites.net/GetByCustomerId/"+ customerId).subscribe((data) => {
      this.customerTransactions = data;
      });
  }


}
