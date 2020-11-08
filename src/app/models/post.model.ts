export class Post {

    constructor (
        public title: string,
        public intro: String,
        public contenido: String,
        public categoria: String,
        public comentarios: String,
        public date?: String,
        public img?: string,
        public _id?: string,
        public autor?: string
    ) { }

}