export class Account {
    id: number;
    balance: number;
    customerId: number;
    createdDate: Date;
    
    constructor(id: number, balance: number, customerId: number,createdDate: Date) {
      this.id = id;
      this.balance = balance;
      this.customerId = customerId;
      this.createdDate = createdDate;
    }
  }