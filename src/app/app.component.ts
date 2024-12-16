import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './components/course/course.component';

@Component({
  selector: 'app-root',
  // imported the course component in the app component
  imports: [CourseComponent],
  template:
  `<p>Hello World Vinayak</p>`,
  styles:
  `p{
      background-color: #0fffff
  }`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
