import { Location } from "@angular/common";

export class RequestDetail {
  id: number;
  code: string;
  status: string;
  estimateDate: Date;
  address: string;
  location: any;
  requestOrder: number;
  //isproblem: boolean;
  //message: string;
}
