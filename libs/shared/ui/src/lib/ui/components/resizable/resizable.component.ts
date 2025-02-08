import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-resizable',
  imports: [CommonModule],
  templateUrl: './resizable.component.html',
  styleUrl: './resizable.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ResizableComponent {}
