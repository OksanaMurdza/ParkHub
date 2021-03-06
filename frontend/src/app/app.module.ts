import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import {MaterialModule} from './material.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {PageComponent} from './homePage/homePage.component';
import {ParkingService1} from './service/parking.service';
import {ParkingListComponent} from './parking-list/parking-list.component';
import {ParkingService, UserService} from './service/http-client.service';
import {AddParkingComponent} from './add-parking/add-parking.component';
import {ParkingsComponent} from './parkings/parkings.component';
import {ParkingDetailComponent} from './parking-detail/parking-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {AddressDialog} from './parking-detail/parking-detail-dialog-component';
import {ManagerSignupComponent} from "./manager-signup/manager-signup.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminTicketListComponent} from './admin-ticket-list/admin-ticket-list.component';
import {SlotService} from './serviceSlot/slot.service';
import {DataService} from './DataService/data.service';
import {ParkhubInterceptorComponent} from './parkhub-interceptor/parkhub-interceptor.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {AlertDialogComponent} from './parkoff/alert-dialog/alert-dialog.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {AdminTicketDetailViewerComponent} from './admin-ticket-detail-viewer/admin-ticket-detail-viewer.component';
import {LoginComponent} from './login/login.component';
import {ParkoffComponent} from './parkoff/parkoff.component';
import {SlotsComponent} from './slots/slots.component';
import {ParkingDetailSlotsComponent} from './parkings-ad/parking-detail/parking-detail.component';
import {ParkingsComponentSlots} from './parkings-ad/parkings.component';
import {BookingDetailComponent} from './bookings/booking-detail/booking-detail.component';
import {BookingsComponent} from './bookings/bookings.component';
import {UserComponent} from './user/userPage.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ManagerParkingListComponent} from './manager-parking-list/manager-parking-list.component';
import {AddPhoneNumberComponent} from './add-phone-number/add-phone-number.component';
import {MatChipsModule} from "@angular/material/chips";
import {TranslateArrayService} from "./service/translatearray.service";
import {FlexLayoutModule} from '@angular/flex-layout';
import {CookieService} from 'ngx-cookie-service';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {AddParkingDialogComponent} from './add-parking-dialog/add-parking-dialog.component';
import {MonerisComponent} from './moneris/moneris.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        ParkingListComponent,
        ParkingDetailComponent,
        ParkingsComponent,
        ParkingDetailComponent,
        AppComponent,
        ParkingListComponent,
        ParkingsComponent,
        ParkingDetailComponent,
        AddressDialog,
        PageComponent,
        ParkingListComponent,
        AddParkingComponent,
        ParkingsComponent,
        ParkingDetailComponent,
        ManagerSignupComponent,
        AdminComponent,
        LoginComponent,
        ParkoffComponent,
        AlertDialogComponent,
        SlotsComponent,
        ParkingDetailSlotsComponent,
        ParkingsComponentSlots,
        BookingDetailComponent,
        BookingsComponent,
        AdminTicketListComponent,
        AdminTicketDetailViewerComponent,
        UserComponent,
        BookingsComponent,
        ResetPasswordComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        ManagerParkingListComponent,
        UserSignupComponent,
        AddPhoneNumberComponent,
        AddParkingDialogComponent,
        AddPhoneNumberComponent,
        MonerisComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatToolbarModule,
        MatDividerModule,
        MatListModule,
        MatSidenavModule,
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatToolbarModule,
        MatDividerModule,
        MatListModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatDialogModule,
        BrowserModule,
        FormsModule,
        MaterialModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatSelectModule,
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDialogModule,
        MatChipsModule,
        MatSidenavModule,
        FormsModule,
        MatIconModule,
        MatExpansionModule,
        FlexLayoutModule,
    ],
    providers: [ParkingService, SlotService, ParkingService1, DataService, UserService, TranslateArrayService, CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ParkhubInterceptorComponent,
            multi: true
        }],
    bootstrap: [AppComponent],
    entryComponents: [AlertDialogComponent, AddressDialog, AddParkingDialogComponent, MonerisComponent]
})
export class AppModule {
}
