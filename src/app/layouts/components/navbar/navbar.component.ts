import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSidebarOpen = false;
  /* Emits the sidebar visibility state when the user toggles the sidebar */
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
