import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignmnet';
  boxes = [
    {
      thumbnail: 'path-to-thumbnail-image1.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      thumbnail: 'path-to-thumbnail-image2.jpg',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    }
    // Add more box objects as needed
  ];
}
