export class ToDoTask{
    id: number;
    title: string;
    completed: boolean = false;

    constructor(title: string, id: number){
        this.title = title;
        this.id = id;
    }
}