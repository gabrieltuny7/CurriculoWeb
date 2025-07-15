import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AboutComponent } from '../pages/about/about.component';
import { ResumeComponent } from '../pages/resume/resume.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { ContactComponent } from '../pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true, // Não esqueça!
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'CurriculoWeb';
  activePage: string = 'sobre';
}
