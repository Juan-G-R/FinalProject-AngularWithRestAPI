import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

constructor(
    public dialogo: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  { message: string , option1: string , option2: string}){}

    closeDialog(): void {
      this.dialogo.close(false);
    }
    confirmed(): void {
      this.dialogo.close(true);
    }

  isButtonVisible = true;

  ngOnInit() {

    if(this.data.option2 == ""){
      this.isButtonVisible= false;
    }

  }

}