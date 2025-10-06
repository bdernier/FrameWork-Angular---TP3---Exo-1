import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [CommonModule],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.api.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les utilisateurs.';
        this.loading = false;
      },
    });
  }

  fullAddress(u: User): string {
    const a = u.address;
    return `${a.street}, ${a.suite}, ${a.city} ${a.zipcode}`;
  }
}
