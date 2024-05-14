import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    RouterLink,
    NgOptimizedImage
  ]
})
export class HeaderComponent {

}
