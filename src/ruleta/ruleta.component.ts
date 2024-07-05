import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ruleta.component.html',
  styleUrl: './ruleta.component.scss'
})
export class RuletaComponent implements OnInit {
  segments: string[] = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6'];
  segmentAngle: number = 360 / this.segments.length;
  rotation: number = 0;
  segmentColors: string[] = [];

  ngOnInit() {
    this.generateRandomColors();
  }

  generateRandomColors() {
    for (let i = 0; i < this.segments.length; i++) {
      this.segmentColors.push(this.getRandomColor());
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  spinWheel() {
    const randomSpin = Math.floor(Math.random() * 360) + 1800; // Mínimo 5 giros completos
    this.rotation = randomSpin;
  }
}
