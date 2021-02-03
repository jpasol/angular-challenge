import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('profile') profile : ElementRef;
  constructor(private userService: UserService) { }

  user;
  ngOnInit(): void {
    this.userService.currentUser.subscribe(x => this.user = x)
  }

}
