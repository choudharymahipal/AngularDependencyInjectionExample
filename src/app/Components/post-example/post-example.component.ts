import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-post-example',
  standalone: false,
  
  templateUrl: './post-example.component.html',
  styleUrl: './post-example.component.scss'
})
export class PostExampleComponent {
  data:any;

  constructor(private commonSvc:CommonService) {}

  ngOnInit() {
    console.log('Post Example');
  }

  createPost() {
    const post = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.commonSvc.createPost(post).subscribe((data) => {
      this.data = data;
    });
  }
}
