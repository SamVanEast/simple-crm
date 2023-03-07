import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  loading = false;
  user: User;
  userId;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  saveUser() {
    this.loading = true;
    this.firestore.collection('users').doc(this.userId).update(this.user.toJSON()).then((user) => {
      this.loading = false;
      this.dialogRef.close();
    })
  }
}
