import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: Category[] = []
  constructor(private categoryServ: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.categoryServ.categories;
  }

  suggest(id: string) {
    console.log(id)
    if(id == '1') {
      this.router.navigate(['/gaming']);
    }
    if(id == '2') {
      this.router.navigate(['/education']);
    }
    if(id == '3') {
      this.router.navigate(['/cooking']);
    }
    if(id == '4') {
      this.router.navigate(['/entertainment']);
    }
    if(id == '5') {
      this.router.navigate(['/vlogging']);
    }
  }
}
