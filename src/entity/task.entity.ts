export class Task {
    constructor(
        public id: number,
        public title: string,
        public status: 'in-progress' | 'completed'

    ) {}
}