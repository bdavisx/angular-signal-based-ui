import {Component, computed, effect, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatListItem, MatListModule, MatNavList} from '@angular/material/list';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIcon,
    MatIconButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-signal-based-ui';

  private breakpointSignal = toSignal(inject(BreakpointObserver)
    .observe(Breakpoints.Handset));

  isHandset = computed(() => {
    return this.breakpointSignal()?.matches ?? false;
  })

  constructor() {
    effect(() => {
      console.log(`isHandset changed to ${this.isHandset()}`)
    })
  }
}
