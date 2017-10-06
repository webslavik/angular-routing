import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: {someData: 45}, fragment: 'awesome'});
  }

  onLogin() {
    this.authService.login();
    console.log('Log in');
  }

  onLogout() {
    this.authService.logout();
    console.log('Log out');
  }

}
