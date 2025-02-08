import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-bottom-sheet',
  imports: [CommonModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BottomSheetComponent {}
