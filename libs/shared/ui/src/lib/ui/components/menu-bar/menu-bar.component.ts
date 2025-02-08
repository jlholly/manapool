import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-menu-bar',
  imports: [CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenuBarComponent {}
