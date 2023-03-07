import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  birthDate: Date;
  loading = false;
  user: User;
  userId;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) {

  }

  saveUser() {
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then((user) => {
      this.loading = false;
      this.dialogRef.close();
    })
  }

}
