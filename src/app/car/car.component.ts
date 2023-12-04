import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() name!: string;
  @Input() year!: number;
  @Output() edited = new EventEmitter<string>();

  clicked(name: string) {
    this.edited.emit(name);
  }

}
