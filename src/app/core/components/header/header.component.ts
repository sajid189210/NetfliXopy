import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navList: string[] = ['Home', 'TV Shows', 'News & Popular', 'My List', 'Browse by Language'];

}
