import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, PortfolioComponent, ProjectPageComponent],
})
export class HomeModule {}
