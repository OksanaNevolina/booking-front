export interface IPaginationResponse<T> {
    page: number;
    limit: number;
    itemsFound: number;
    data: T[];
}
export interface IBookingResponse {
    id: string;
    user: string;
    date: string;
    startTime: string;
    endTime: string;
    createdAt: Date;
    updatedAt: Date;
}