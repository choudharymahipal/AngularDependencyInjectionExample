import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  baseUrl = environment.baseUrl;
  myHeaders = {
    "Content-type": "application/json; charset=UTF-8",
  };

  constructor(private http: HttpClient) {}

  //GET Example
  getPosts() {
    return this.http.get(this.baseUrl + "/posts");
  }

  //POST Example
  createPost(post: any) {
    return this.http.post(this.baseUrl + "/posts", post, {
      headers: this.myHeaders,
    });
  }

  //PUT Example
  updatePost(post: any) {
    return this.http.put(this.baseUrl + "/posts/1", post, {
      headers: this.myHeaders,
    });
  }
}
