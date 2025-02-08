import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mnpl-code-snippet',
  imports: [CommonModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CodeSnippetComponent {}
