import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResetPasswordService} from '../../../../../Downloads/parkhub-master/parkhub-master/frontend/src/app/service/reset-password.service';
import {Email} from '../../../../../Downloads/parkhub-master/parkhub-master/frontend/src/app/model/email';
import {ActivatedRoute, Router} from '@angular/router';
import {AddParkingDialogComponent} from '../../../../../Downloads/parkhub-master/parkhub-master/frontend/src/app/add-parking-dialog/add-parking-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material'

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    sendTokenToEmailForm: FormGroup;
    email: Email;
    tokenType = 'PASSWORD';
    message: string;
    isSent: boolean;
    loading: boolean;

    constructor(private resetPasswordService: ResetPasswordService,
                private fb: FormBuilder, private dialog: MatDialog, private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.sendTokenToEmailForm = this.fb.group({
            email: ['']
        });
        this.isSent = false;
        this.loading = false;
    }

    sendEmail() {
        this.loading = true;
        this.email = new Email(this.sendTokenToEmailForm.get('email').value, this.tokenType);
        this.resetPasswordService.sendTokenToEmail(this.email).subscribe(response => {
            this.isSent = true;
            this.loading = false;
        }, err => {
            this.loading = false;
            this.message = err.error;
            this.openDialog(this.message);
        });
    }

    openDialog(message: string): MatDialogRef<AddParkingDialogComponent> {
        return this.dialog.open(AddParkingDialogComponent, {
            width: '350px',
            data: {message}
        });
    }
}
