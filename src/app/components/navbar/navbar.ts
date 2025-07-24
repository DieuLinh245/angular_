import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MenubarModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'List', icon: 'pi pi-list', routerLink: '/list' },
    { label: 'Add', icon: 'pi pi-plus', routerLink: '/add' },

    /*{
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'List',
      icon: 'pi pi-list',
      routerLink: '/todos'
    },
    {
      label: 'Add',
      icon: 'pi pi-plus',
      routerLink: '/add'
    }*/
  ];
}
