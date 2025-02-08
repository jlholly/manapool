import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-tree-view',
  imports: [CommonModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TreeViewComponent {}
