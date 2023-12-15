import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'CustomerInfos',component: CustomerTransactionsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

  export class AppRoutingModule {}