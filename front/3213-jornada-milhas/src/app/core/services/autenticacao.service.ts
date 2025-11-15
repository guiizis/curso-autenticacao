import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private readonly http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  autenticar(email: string, password: string) {
    return this.http.post()
  }
}
