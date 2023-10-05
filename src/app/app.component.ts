import { Component } from '@angular/core';

// Root Component - loads all other components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Export Root Component to app.module
export class AppComponent {
  label = 'Andrei Video Streaming';
  city = 'Dallas';
  imgUrl = 'https://picsum.photos/id/231/500/500';

  getCity() {
    return this.city;
  }

  imageChangeHandler(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }
}
