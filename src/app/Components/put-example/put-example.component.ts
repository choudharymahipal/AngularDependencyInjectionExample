import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-put-example',
  standalone: false,
  
  templateUrl: './put-example.component.html',
  styleUrl: './put-example.component.scss'
})
export class PutExampleComponent {
  data:any;

  constructor(private commonSvc:CommonService) {}

  ngOnInit() {
    console.log('Put Example');
  }

  updatePost() {
    const post = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.commonSvc.updatePost(post).subscribe((data) => {
      this.data = data;
    });
  }

}
