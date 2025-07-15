import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarComponent {
  @Input() activePage: string = 'sobre';
  @Output() activePageChange = new EventEmitter<string>();

  setActivePage(page: string) {
    this.activePageChange.emit(page);
  }
}
