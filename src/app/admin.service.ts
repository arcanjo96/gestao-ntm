import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor(private http: HttpClient) {}

  store(admin) {
    return this.http
      .post("http://localhost:8000/api/v1/admin", admin)
      .toPromise();
  }

  auth(admin) {
    return this.http
      .post("http://localhost:8000/api/v1/admin/session", admin, {
        headers: { Accept: "application/json" }
      })
      .toPromise();
  }
}
