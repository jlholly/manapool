import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-action-list',
  imports: [CommonModule],
  templateUrl: './action-list.component.html',
  styleUrl: './action-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ActionListComponent {}
