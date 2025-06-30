import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  isSidebarOpen = false;

  onToggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
