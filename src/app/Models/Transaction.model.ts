export class Transaction {
    id: number;
    initialCreditValue: number;
    accountId: number;
    addedDate: Date;
    
    constructor(id: number, initialCreditValue: number, accountId: number,addedDate: Date) {
      this.id = id;
      this.initialCreditValue = initialCreditValue;
      this.accountId = accountId;
      this.addedDate = addedDate;
    }
  }