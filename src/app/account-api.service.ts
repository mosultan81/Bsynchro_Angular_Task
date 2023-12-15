import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(private httpClient: HttpClient) { }
  OpenNewAccount(customerId : number)
  {
    return this.httpClient.get("https://accountsapi20231214131540.azurewebsites.net/OpenNewAccount/"+ customerId);
  }

  displayCustomers()
  {
    return this.httpClient.get("https://accountsapi20231214131540.azurewebsites.net/customers");
  }

}
