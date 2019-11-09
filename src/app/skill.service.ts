import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAllSkills() {
    return this.http.get("http://localhost:8000/api/v1/skills").toPromise();
  }
}
