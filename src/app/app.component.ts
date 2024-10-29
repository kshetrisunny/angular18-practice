import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './Components/tasks/tasks.component';
import { UsersComponent } from './Components/users/users.component';
import { HeaderComponent } from './Components/header/header.component';
import { DUMMY_USERS } from './utils/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksComponent, UsersComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practice';
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
