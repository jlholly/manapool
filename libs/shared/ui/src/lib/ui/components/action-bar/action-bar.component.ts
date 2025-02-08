import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-action-bar',
  imports: [CommonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ActionBarComponent {}
