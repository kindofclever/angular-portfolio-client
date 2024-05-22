import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'portfolio-welcome-container',
  templateUrl: './welcome-container.component.html',
  styleUrl: './welcome-container.component.scss',
  imports: [
    NgOptimizedImage,
    RouterLink,
  ]
})
export default class WelcomeContainerComponent {

}
