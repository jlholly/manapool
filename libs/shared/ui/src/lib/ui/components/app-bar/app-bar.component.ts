import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-app-bar',
  imports: [CommonModule],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppBarComponent {}
