export class StatusShipment {
  INACTIVE = "Inactive";
  WAITING = "Waiting";
  ACCEPTED = "Accepted";
  REJECTED = "Rejected";
  PICKING = "Picking";
  LOADING = "Loading";
  SHIPPING = "Shipping";
  COMPLETED = "Completed";
}
export class StatusDelivery {
  WAITING = "Waiting";
  SHIPPING = "Shipping";
  UNLOADING = "Unloading";
  COMPLETED = "Completed";
}

export class Lock {
  OPEN: boolean = true;
  CLOSE: boolean = false;
};

export class Problem {
  HAVE: boolean = true;
  RESOVLE: boolean = false;
};
