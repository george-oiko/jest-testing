import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicService } from '../logic.service';
import { Item } from '../item';
import { PresentationalComponent } from '../presentational/presentational.component';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, PresentationalComponent],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  loading = true;
  description = '';
  list: { full: string, count: number }[] = [];
  message = '';

  constructor(private logic: LogicService) {
  }

  ngOnInit(): void {
    this.refreshView();
    this.description = 'This component has a lot of business';
    this.loading = false;
  }

  mapList(list: Item[]): { full: string, count: number }[] {
    return list.map(i => {
      return {
        full: i.id + i.name,
        count: i.count
      }
    }).filter(itm => itm.count > 10)
  }

  calculateMessage(length: number): string {
    if (length === 0) {
      return 'No records';
    }
    return `Displaying ${this.list.length} messages`;
  }

  edit(full: string): void {
    this.logic.edit(full);
    this.refreshView();
  }

  refreshView() {
    this.list = this.mapList(this.logic.getList());
    this.message = this.calculateMessage(this.list.length);
  }

}
