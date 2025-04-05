export class ToDoTask{
    id: number;
    title: string;
    date: Date;
    completed = false;

    constructor(title: string, id: number, date: Date){
        this.title = title;
        this.id = id;
        this.date = date;
    }
}