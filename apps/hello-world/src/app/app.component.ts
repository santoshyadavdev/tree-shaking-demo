import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { GodModuleLibModule } from '@tree-shaking-demo/god-module-lib';

@Component({
  imports: [NxWelcomeComponent, RouterModule, GodModuleLibModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hello-world';
}
