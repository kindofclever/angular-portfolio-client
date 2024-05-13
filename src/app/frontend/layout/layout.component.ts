import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  standalone: true,
  selector: 'portfolio-wer',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutComponent {

}
