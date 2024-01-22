import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-view', component: ProjectPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
