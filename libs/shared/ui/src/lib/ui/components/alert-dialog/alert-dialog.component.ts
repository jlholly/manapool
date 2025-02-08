import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-alert-dialog',
  imports: [CommonModule],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AlertDialogComponent {}
