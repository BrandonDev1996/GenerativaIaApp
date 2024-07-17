import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Encuesta';
  cards = [
    { id: 1, title: 'Card Title 1', description: 'This is a description of the first card. Tailwind CSS makes it easy to style components.', selected: false, disabled: false },
    { id: 2, title: 'Card Title 2', description: 'This is a description of the second card. Tailwind CSS provides utility classes to customize the look.', selected: false, disabled: false },
    { id: 3, title: 'Card Title 3', description: 'This is a description of the third card. You can use Tailwind to easily create responsive layouts.', selected: false, disabled: false }
  ];

  selectedCardId: number | null = null;

  selectCard(id: number): void {
    // Si una tarjeta ya ha sido seleccionada, no permitas seleccionar otra
    if (!this.selectedCardId) {
      this.cards.forEach(card => {
        card.selected = card.id === id;
        card.disabled = card.id !== id && card.selected; // Solo desactiva otras tarjetas si se selecciona una nueva
      });
      this.selectedCardId = id;
    }
  }

  sendCard(): void {
    if (this.selectedCardId !== null) {
      console.log('Sending card ID:', this.selectedCardId);
      this.cards.forEach(card => card.disabled = true);
      this.selectedCardId = null;
    }
  }

}
