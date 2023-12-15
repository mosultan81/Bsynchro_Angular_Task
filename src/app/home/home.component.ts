import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountApiService } from '../account-api.service';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule,AppComponent],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  customers: any = [];
  accounts: any = [];

  constructor(private httpClient : HttpClient){}

  ngOnInit(): void {
     this.displayCustomers();
  }

  displayCustomers(){
    this.httpClient.get("https://accountsapi20231214131540.azurewebsites.net/customers").subscribe((data) => {
     this.customers = data;
   });
  }

   getname(){
    alert("great it workedddddddddd");
   }

   openNewAccount(customerId : number){
    customerId = 2;
    this.httpClient.get("https://accountsapi20231214131540.azurewebsites.net/OpenNewAccount/"+ customerId).subscribe((data) => {
    this.accounts = data;
    });
  }
}
