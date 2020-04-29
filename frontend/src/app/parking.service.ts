import {Injectable} from '@angular/core';
import {ParkingItem} from './parkings/parking-item';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {ParkingDetail} from './parking-detail/parking-detail';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ParkingService {


    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    private parkingsUrl: string;

    constructor(private http: HttpClient) {
        this.parkingsUrl = '/api/manager/cabinet';
    }

    getAllParkings(id: string): Observable<ParkingItem[]> {
        console.log("service", this.parkingsUrl);
        return this.http.get<ParkingItem[]>(`${this.parkingsUrl}/all/${id}`);
    }

    getParking(id: string): Observable<ParkingDetail> {
        // let parameters = new HttpParams().set("parkingId", id.toString());
        console.log("service", this.parkingsUrl);
        return this.http.get<ParkingDetail>(`${this.parkingsUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    updateParking(parking: ParkingDetail, id: string): Observable<any> {
        return this.http.put(`${this.parkingsUrl}/${id}`, parking);
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(
            error.error);
    }
}

