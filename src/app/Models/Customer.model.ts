export class Customer {
    id: number;
    name: string;
    surName: string;
    nbOfAccounts: number;
    addedDate: Date;
    
    constructor(id: number, name: string, surName: string, nbOfAccounts: number,addedDate: Date) {
      this.id = id;
      this.name = name;
      this.surName = surName;
      this.nbOfAccounts = nbOfAccounts;
      this.addedDate = addedDate;
    }
  }