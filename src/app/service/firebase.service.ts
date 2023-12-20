import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Info, InfoConverter} from "../core/model/info";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private db: Firestore,
  ) {
  }

  info = collection(this.db, 'info').withConverter(InfoConverter);

  getAllInfo(): Observable<Info[]> {
    return collectionData(this.info, {idField: 'id'});
  }

  addInfo(info: Info) {
    return from(addDoc(this.info, {
      ...info,
      createdAt: new Date()
    }));
  }
}
