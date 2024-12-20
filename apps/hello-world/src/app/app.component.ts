import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@tree-shaking-demo/god-module-lib';
import {GridComponent, AccordionComponent} from '@ngx-santosh/ng-publishable';

@Component({
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, GridComponent, AccordionComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hello-world';
}
