import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CarreraTecnicaService {

  constructor(private http: HttpClient) { }

  getCarrerasTecnicas(){
    console.log(base_url);
    return this.http.get(`${base_url}/carreras-tecnicas`);
  }

  saveCarreraTecnica(body: any){
    console.log(body);
    return this.http.post(`${base_url}/carreras-tecnicas`,body);
  }

  deleteCarreraTecnica(id:any){
    const endPoint = `${base_url}/carreras-tecnicas/${id}`;
    return this.http.delete(endPoint);
  }

  udpateCarreraTecnica(body: any, id: any){
    const endPoint = `${base_url}/carreras-tecnicas/${id}`;
    return this.http.put(endPoint,body);
  }

}
