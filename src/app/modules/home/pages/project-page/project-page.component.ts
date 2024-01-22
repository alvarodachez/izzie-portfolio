import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { Project } from '../../models/home.interface';
import { PROJECTS } from 'src/app/mocks/projects-mock';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  projectData: Project | undefined;

  categoriesString: string = '';
  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    const projectId = this.sharedDataService.getProjectId();

    this.projectData = PROJECTS.find((p) => p.name === projectId);

    this.projectData?.categories.forEach((p) => {
      this.categoriesString = this.categoriesString + ' ' + p + '·';
    });
  }

  goToHome() {
    this.router.navigate([''], { fragment: 'portafolio' });
  }
}
