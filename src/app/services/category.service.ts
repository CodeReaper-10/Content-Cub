import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = []
  constructor() {
    this.categories.push({id: '1', name: 'Gaming', image: 'https://cdn-icons-png.flaticon.com/512/3655/3655555.png'})
    this.categories.push({id: '2', name: 'Education', image: 'https://cdn-icons-png.flaticon.com/512/3976/3976625.png'})
    this.categories.push({id: '3', name: 'Cooking', image: 'https://cdn-icons-png.flaticon.com/512/1027/1027128.png'})
    this.categories.push({id: '4', name: 'Entertainment & Performing Arts', image: 'https://cdn-icons-png.flaticon.com/512/3755/3755626.png'})
    this.categories.push({id: '5', name: 'Vlogging & Current Affairs', image: 'https://cdn-icons-png.flaticon.com/512/4144/4144722.png'})
    this.categories.push({id: '0', name: 'More Categories Coming Soon', image: 'https://cdn-icons-png.flaticon.com/512/5229/5229373.png'})
  }
}
