import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-action-button',
  imports: [CommonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ActionButtonComponent {}
