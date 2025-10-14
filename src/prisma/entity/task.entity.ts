export interface taskProps {
  title: string;
  status: "in-progress" | "completed";
}

export class Task {
  private _id?: number;
  private props: taskProps;

  constructor(props: taskProps, id?: number) {
    this.props = props;
    this._id = id;
  }

  get id(): number | undefined {
    return this._id;
  }

  get title(): string {
    return this.props.title;
  }

  get status(): "in-progress" | "completed" {
    return this.props.status;
  }

  set title(newTitle: string) {
    this.props.title = newTitle;
  }

  set status(newStatus: "in-progress" | "completed") {
    this.props.status = newStatus;
  }
}
