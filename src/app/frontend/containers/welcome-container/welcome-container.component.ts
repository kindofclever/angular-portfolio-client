import {AfterViewInit, Component, ElementRef, viewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import gsap from "gsap";
import {CSSPlugin} from "gsap/all"
import {PlatformService} from "../../../../shared/services/platform.service";
import {SsrNotDirective} from "../../../../shared/directives/ssr-not.directive";

@Component({
  standalone: true,
  selector: 'portfolio-welcome-container',
  styleUrls: ['./welcome-container.component.scss'],
  templateUrl: './welcome-container.component.html',
  providers: [PlatformService],
  imports: [
    NgOptimizedImage,
    RouterLink,
    SsrNotDirective,
  ]
})
export default class WelcomeContainerComponent implements AfterViewInit {

  title = viewChild<ElementRef>('title')

  ngAfterViewInit() {
    this.animateTitle()
  }

  animateTitle() {
    gsap.registerPlugin(CSSPlugin)
    gsap.from(this.title()?.nativeElement, {opacity: 0, duration: 3});
  }

}

