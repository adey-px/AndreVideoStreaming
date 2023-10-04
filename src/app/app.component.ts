import { Component } from '@angular/core';

// Root Component - loads all other components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export Root Component to app.module
export class AppComponent {
  title = 'andreivideostreamin';
}
