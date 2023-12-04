import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  list = [
    {
      id: 0,
      name: 'first',
      count: 42
    },
    {
      id: 1,
      name: 'second',
      count: 33
    },
  ]

  constructor() { }

  getList(): Item[] {
    return this.list;
  }

  edit(id: number) {
    this.list = this.list.map(i => {
      if (i.id === id) {
        return { ...i, edited: true }
      }
      return i;
    })
  }
}
