import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from "./core/components/footer/footer.component";
import { HeroComponent } from "./core/components/hero/hero.component";
import { UserFormComponent } from "./core/components/user-form/user-form.component";
import { UserListComponent } from "./core/components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, UserFormComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'health-care-tracker';
}
