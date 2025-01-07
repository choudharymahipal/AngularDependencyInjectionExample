import { Component } from "@angular/core";
import { CommonService } from "../../Services/common.service";

@Component({
  selector: "app-get-example",
  standalone: false,
  templateUrl: "./get-example.component.html",
  styleUrl: "./get-example.component.scss",
})
export class GetExampleComponent {
  data:any;

  constructor(private commonSvc: CommonService) {}

  ngOnInit() {
    console.log('Get Example');
  }

  get() {
    this.commonSvc.getPosts().subscribe((data) => {
      this.data = data;
    });
  }
}
