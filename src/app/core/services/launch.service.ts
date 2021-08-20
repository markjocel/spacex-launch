import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Launch } from 'src/app/shared/models/launch.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private _loading = new BehaviorSubject<any>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(private _http: HttpClient) { }

  getAllLaunch(limit:number):Observable<[Launch]>{
    try {
      const path = `?limit=${limit}`
      return this._http.get<[Launch]>(environment.API_BASE_URL + path) 
    } catch (error) {
      console.error(error)
      throw(error)
    }
  }

  filterLaunch(name:string,date:string,limit:number):Observable<[Launch]>{
    try {
      const path = `?rocket_name=${name}&launch_year=${date}&limit=${limit}`
      return this._http.get<[Launch]>(environment.API_BASE_URL + path) 
    } catch (error) {
      console.error(error)
      throw(error)
    }
  }

  getOneLaunch(flightNumber:number | undefined):Observable<Launch>{
    try {
      const path = `/${flightNumber}`
      return this._http.get<Launch>(environment.API_BASE_URL + path)
    } catch (error){
      console.error(error)
      throw(error)
    }
  }

  get loading(): any {
    return this.loading.asObservable();
  }

  set loading(value: any) {
    this._loading.next(value);
  }

}
