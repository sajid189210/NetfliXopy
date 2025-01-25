import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Netflix-Clone';
}
