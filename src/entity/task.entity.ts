export interface taskProps {
  title: string;
  status: 'in-progress' | 'completed';
}

export class Task {
  private props: taskProps;
  public readonly id: number;

  constructor(props: taskProps, id?: number) {
    this.props = props;
    this.id = id ?? 0;
  }

  get title() {
    return this.props.title;
  }

  get status() {
    return this.props.status;
  }

  set title(title: string) {
    this.props.title = title;
  }

  set status(status: 'in-progress' | 'completed') {
    this.props.status = status;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      status: this.status,
    };
  }
}
