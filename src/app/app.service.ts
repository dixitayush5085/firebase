import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Todo {
  id?: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})


export class AppService {
  
  private todoCollection!: CollectionReference<DocumentData>;


  constructor(private readonly firestore: Firestore) {
    this.todoCollection = collection(this.firestore, 'todo');
  }

  createTodo(data: Todo) {
    return addDoc(this.todoCollection,data);
  }

  getAll() {
    return collectionData(this.todoCollection, {
      idField: 'id',
    }) as Observable<Todo[]>;
  }

}
