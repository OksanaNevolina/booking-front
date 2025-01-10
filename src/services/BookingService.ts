import {IRes} from "../types";
import {ApiService} from "./ApiService";
import {urls} from "../constants/urls";
import {IBookingReq, IBookingResponse, IPaginationResponse} from "../interfaces/InterfaceBookings";

const BookingService = {
    getAll:(page:string):IRes<IPaginationResponse<IBookingResponse>> => ApiService.get(urls.getAllBookings, {params:{page}}),
    createBooking:(booking:IBookingReq):IRes<IBookingResponse> => ApiService.post(urls.createBooking, booking),
}
export {
    BookingService
}