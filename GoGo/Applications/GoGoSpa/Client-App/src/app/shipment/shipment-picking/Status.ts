export class StatusShipment {
  INACTIVE = "INACTIVE";
  PENDING = "PENDING";
  ACCEPTED = "ACCEPTED";
  REJECTED = "REJECTED";
  PICKING = "PICKING";
  LOADING = "LOADING";
  SHIPPING = "SHIPPING";
  COMPLETED = "COMPLETED";
}
export class StatusDelivery {
  PENDING = "PENDING";
  SHIPPING = "SHIPPING";
  UNLOADING = "UNLOADING";
  COMPLETED = "COMPLETED";
}

export class Lock {
  OPEN: boolean = true;
  CLOSE: boolean = false;
};

export class Problem {
  HAVE: boolean = true;
  RESOVLE: boolean = false;
};
