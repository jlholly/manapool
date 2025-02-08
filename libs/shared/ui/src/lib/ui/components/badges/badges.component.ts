import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-badges',
  imports: [CommonModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BadgesComponent {}
