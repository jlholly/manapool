import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-command-menu',
  imports: [CommonModule],
  templateUrl: './command-menu.component.html',
  styleUrl: './command-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CommandMenuComponent {}
