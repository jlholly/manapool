import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-content-area',
  imports: [CommonModule],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContentAreaComponent {}
