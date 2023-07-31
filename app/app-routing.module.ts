import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactuComponent } from './contactu/contactu.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "home", component:MainComponent},
  { path: "aboutus", component:AboutusComponent},
  { path: "contactus", component:ContactuComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
