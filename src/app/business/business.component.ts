import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  loading = true;
  description = '';
  list: { full: string, count: number }[] = [];
  message = '';

  constructor(private logic: LogicService) {
    this.list = this.logic.getList().map(i => {
      return {
        full: i.id + i.name,
        count: i.count
      }
    }).filter(itm => itm.count > 10);
    this.init();
    this.loading = false;
  }

  init() {
    this.description = 'This component has a lot of business';
    if (this.list.length === 0) {
      this.message = 'No records';
    } else {
      this.message = `Displaying ${this.list.length} messages`;
    }
  }

  edit(id: number) {
    this.logic.edit(id);
    this.list = this.logic.getList().map(i => {
      return {
        full: i.id + i.name,
        count: i.count
      }
    }).filter(itm => itm.count > 10);
    this.init();
  }

}
