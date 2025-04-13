import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navLinks = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'features', label: 'Features' },
    { path: 'contact', label: 'Contact' }
  ];
  isMobileMenuOpen = false;
  isScrolled = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}