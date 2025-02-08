import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-alert-banner',
  imports: [CommonModule],
  templateUrl: './alert-banner.component.html',
  styleUrl: './alert-banner.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AlertBannerComponent {}
