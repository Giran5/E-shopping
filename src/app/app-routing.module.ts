import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BeautyComponent } from './beauty/beauty.component';

const routes: Routes = [
  { path:'', component:MainpageComponent },
  { path:'home', component:MainpageComponent },
  { path:'beauty', component:BeautyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
