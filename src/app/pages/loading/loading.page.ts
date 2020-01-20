import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginPage} from '../login/login.page';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

      setTimeout(() => {
          this.router.navigateByUrl('login', { skipLocationChange: true });
      }, 2000);
  }
}
