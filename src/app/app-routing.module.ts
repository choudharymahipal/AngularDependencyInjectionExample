import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { PostExampleComponent } from "./Components/post-example/post-example.component";
import { GetExampleComponent } from "./Components/get-example/get-example.component";
import { PutExampleComponent } from "./Components/put-example/put-example.component";
import { DeleteExampleComponent } from "./Components/delete-example/delete-example.component";
import { PatchExampleComponent } from "./Components/patch-example/patch-example.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "example/get", component: GetExampleComponent },
  { path: "example/post", component: PostExampleComponent },
  { path: "example/put", component: PutExampleComponent },
  { path: "example/delete", component: DeleteExampleComponent },
  { path: "example/patch", component: PatchExampleComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
