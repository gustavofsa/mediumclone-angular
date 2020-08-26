import { Component } from '@angular/core';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './yourFeed.component.html',
})
export class YourFeedComponent {
  apiUrl = '/articles/feed';
}
