import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path: 'navigation', component: NavigationComponent},
  {path: 'frontpage', component: FrontpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
