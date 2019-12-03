import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Hacker } from '../core/hacker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrls: ['./hacker-list.component.scss']
})
export class HackerListComponent implements OnInit {
  hackers: Array<Hacker>;

  constructor(public api: ApiService, public router: Router) {}

  ngOnInit() {
    this.api.getHackers().subscribe((data: Array<Hacker>) => {
      this.hackers = data;
    });
  }

  goToDetails(id: string) {
    this.router.navigate([`/hackers/${id}`]);
  }

  filterData(term: string) {
    this.api.getHackers(term).subscribe((data: Array<Hacker>) => {
      this.hackers = data;
    });
  }
}
