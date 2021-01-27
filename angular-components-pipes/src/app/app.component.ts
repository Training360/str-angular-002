import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Binding Example';

  subTitle: string = 'Vadas Gabi csinálta.';

  btnDisabled: boolean = false;

  users: User[] = [];

  constructor() {
    setTimeout(() => {
      this.users = [
        new User(1, 'Jani', 'j@gmail.com'),
        new User(2, 'Juli', 'j@gmail.com'),
        new User(3, 'Józsi', 'j@gmail.com'),
      ];
    }, 10000);
  }

  onSwitchDisabled(): void {
    this.btnDisabled = !this.btnDisabled;
  }

  onShowGreeting(): void {
    alert('Szia, én vagyok a User bizony.');
  }

  onDeleteUser(user: User): void {
    // tslint:disable-next-line: prefer-for-of
    let index = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (user.id === this.users[i].id) {
        index = i;
      }
    }

    this.users.splice(index, 1);
  }
}
