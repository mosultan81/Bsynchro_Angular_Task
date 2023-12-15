import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountApiService } from './account-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[AccountApiService],
  imports: [CommonModule, RouterOutlet,HomeComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private httpClient : HttpClient){}
  title = 'Bsynchro_Angular';
}
