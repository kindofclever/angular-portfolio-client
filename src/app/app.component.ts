import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WelcomeContainerComponent from "./frontend/containers/welcome-container/welcome-container.component";

@Component({
  selector: 'portfolio-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, WelcomeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
