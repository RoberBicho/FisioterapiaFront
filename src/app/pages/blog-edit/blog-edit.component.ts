import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {


  post: Post = new Post('','','','','','');

  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  submit() {
    this.postService.postPost(this.post).subscribe( (data:any) => {
      console.log(data);
    })
  }
  

}
