import {Slot} from './slot';

export interface Parking {
    id: number;
    name: string;
    address: string;
    tariff: number;
    slots: Slot[];
}
