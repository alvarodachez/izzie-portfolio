import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/home.interface';
import { Router } from '@angular/router';
import { PROJECTS } from 'src/app/mocks/projects-mock';
import { SharedDataService } from 'src/app/core/services/shared-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.initProjects();
  }

  initProjects = () => {
    this.projects = PROJECTS;
  };

  goToProjectView = (projectId: string) => {
    this.sharedDataService.setProjectId(String(projectId));

    this.router.navigateByUrl('project-view');
  };
}
