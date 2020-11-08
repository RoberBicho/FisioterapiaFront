import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {


  post: Post = new Post('','','','','','');
  categorias: [] = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getCategoria().subscribe( (resp:any) => {
      console.log(resp);
      this.categorias = resp
    //   this.categorias.unshift({
    //     id: "none",
    //     descripcion: "",
    //     nombre: "Elige una categoría"
    // })
    })
  }

  submit() {
    this.postService.postPost(this.post).subscribe( (data:any) => {
      console.log(data);
    })
  }
  

}
