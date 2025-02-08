import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-help-text',
  imports: [CommonModule],
  templateUrl: './help-text.component.html',
  styleUrl: './help-text.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HelpTextComponent {}
