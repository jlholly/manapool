import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-navigation-drawer',
  imports: [CommonModule],
  templateUrl: './navigation-drawer.component.html',
  styleUrl: './navigation-drawer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavigationDrawerComponent {}
