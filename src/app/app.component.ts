import { Component, signal, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('exo1');
  ngAfterViewInit() {
    // Add any initialization logic here, or leave empty if not needed
  }
  @ViewChild(UsersComponent) usersComponent!: UsersComponent;
}
