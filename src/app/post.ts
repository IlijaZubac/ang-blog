export class Post {
        
    id: string;
    title: string;
    text: string;
    created_at: string;

    constructor(id: string, title: string, text: string, created_at:string) {

        this.id = id;
        this.title = title;
        this.text = text;
        this.created_at = created_at;
    }

}
