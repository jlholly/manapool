import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-button-group',
  imports: [CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent {}
