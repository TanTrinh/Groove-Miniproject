export class StringObject {
  content: string;
}

export class RequestStatus {
  public readonly Inactive = 'Inactive';
  public readonly Waiting = 'Waiting';
  public readonly Accepted = 'Accepted';
  public readonly Rejected = 'Rejected';
}

export class ShipmentStatus {
  public readonly INACTIVE = "Inactive";
  public readonly WAITING = "Waiting";
  public readonly ACCEPTED = "Accepted";
  public readonly REJECTED = "Rejected";
  public readonly PICKING = "Picking";
  public readonly LOADING = "Loading";
  public readonly SHIPPING = "Shipping";
  public readonly COMPLETED = "Completed";
}
