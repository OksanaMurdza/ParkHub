import {BookingInfo} from './bookingInfo';

export interface Payment {
    id: number;
    price: number;
    slotNumber: string;
    booking: BookingInfo;
}
