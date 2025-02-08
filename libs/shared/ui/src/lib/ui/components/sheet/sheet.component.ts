import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-sheet',
  imports: [CommonModule],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SheetComponent {}
