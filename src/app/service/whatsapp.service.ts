import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private apiUrl = 'https://graph.facebook.com/v17.0//messages'; // Use a versão mais recente disponível

  constructor(private http: HttpClient) {
  }

  enviarMensagem(phoneNumber: string): Observable<any> {
    const url = `${this.apiUrl}/PHONE_NUMBER_ID/messages`;
    const accessToken = 'EAAE3k43IfRQBOyKQtL3w1xg9hZADYJmhuQvXI2HaTzJgKT6MnjU4dzqDjxUg0ZC3mz1pMjZAYzi7DOi8C8WahcgqAOe5zVyxinxwk501ZCrUfbdq5DnIWq6FC3rSZAyNAFXZAFiw3GKupkl3WBXnOTpb6FAqjdbFD0WCsrMJWiPncmHqvzXFzFW1BigiZCA3336pI0TtPNaLoQ91RiZCtkoImJMr62AZD';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    });

    const body = {
      recipient: {
        phone_number: phoneNumber,
      },
      message: {
        text: "testanto",
      },
    };

    return this.http.post(url, body, {headers});
  }
}
