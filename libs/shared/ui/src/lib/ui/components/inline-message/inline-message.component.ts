import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-inline-message',
  imports: [CommonModule],
  templateUrl: './inline-message.component.html',
  styleUrl: './inline-message.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InlineMessageComponent {}
