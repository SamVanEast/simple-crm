import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  birthDate: Date;
  user = new User;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    this.firestore.collection('users').add(this.user.toJSON()).then((user) => {
      console.log(user);
      this.loading = false;
      this.dialogRef.close();
    })

  }
}
