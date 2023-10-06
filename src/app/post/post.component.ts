import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

// Export Post Component to app.module
export class PostComponent implements OnInit {
  @Input('img') postImg = '';
  @Output() clickImage = new EventEmitter<string>();

  // component lifecycle hooks
  constructor() {
    console.log('I am a hook, I run first once in lifecycle');
  }

  ngOnInit() {
    console.log('I am a hook, I run later once in lifecycle')
  }
}

/*
- @Input directive indicates `postImg` prop expects data or value from Parent (app) component
- Use of ('img') is optional, it is called Aliase to ref prop where it is used, // @Input() postImg = '';
- @Output directive is used to send event data or value thru EventEmitter to Parent (app) component

- Component lifecycle hooks https://angular.io/guide/lifecycle-hooks
*/
