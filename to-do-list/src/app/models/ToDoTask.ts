export class ToDoTask{
    id: number;
    title: string;
    shortTitle: string;
    date: Date;
    completed = false;

    constructor(title: string, id: number, date: Date) {
        this.title = title;
        this.shortTitle = this.GenerateShortTitle();
        this.id = id;
        this.date = date;
    }
    GenerateShortTitle(): string {
        return this.title.length > 27 ? this.title.substring(0, 24) + '...' : this.title;
    }
}