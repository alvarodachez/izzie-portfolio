import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private projectId: string = '';

  constructor() {}

  getProjectId() {
    return this.projectId;
  }

  setProjectId(projectId: string) {
    this.projectId = projectId;
  }
}
