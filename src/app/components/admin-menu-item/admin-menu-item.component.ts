import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'admin-menu-item',
  templateUrl: './admin-menu-item.component.html',
  styleUrls: ['./admin-menu-item.component.scss']
})
export class AdminMenuItemComponent implements OnInit {

    @Input() label: string;
    @Input() count: number;
    @Input() path: string;

    constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToPath() {
      this.router.navigateByUrl(this.path);
  }
}
