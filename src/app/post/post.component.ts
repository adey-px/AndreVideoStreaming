import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

// Export Post Component to app.module
export class PostComponent {
  @Input('img') postImg = '';
}

/*
- @Input is interface that indicates `postImg` prop expects a value
- ('img') is optional called Aliase to ref the prop where it is used
*/