export interface taskProps {
    title: string;
    status: "in-progress" | "completed";
    id: number;
}

export class Task {
    private _id: number;
    private props: taskProps;

    constructor(props: taskProps, id: number) {
        this.props = props;
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this.props.title;
    }

    get status(): "in-progress" | "completed" {
        return this.props.status;
    }
}