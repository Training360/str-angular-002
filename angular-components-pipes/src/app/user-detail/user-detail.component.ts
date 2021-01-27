import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = new User();
  @Output() delUser: EventEmitter<User> = new EventEmitter();

  constructor() {
    console.log(this.user);
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  onDeleteUser(): void {
    this.delUser.emit(this.user);
  }

}
