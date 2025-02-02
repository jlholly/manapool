import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '@manapool/ui';

@Component({
  imports: [
    LogoComponent,
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'manapool';
}
