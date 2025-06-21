import { Component, OnInit } from '@angular/core';
import { SocialSocketService } from '../services/social-socket.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.css']
})
export class SocialFeedComponent implements OnInit {
  newPost = {
    user: '',
    disaster_id: '',
    content: '',
  };

  posts: any[] = [];

  constructor(private socialSocket: SocialSocketService) {}

  ngOnInit(): void {
    this.socialSocket.onNewPost().subscribe((post: any) => {
      this.posts.unshift(post); // new posts at top
    });
  }

   submitPost(): void {
  const { user, disaster_id, content } = this.newPost;
  if (user && disaster_id && content) {
    this.socialSocket.sendPost(this.newPost).subscribe((response: any) => {
      this.posts.unshift(response);
      this.newPost.content = '';
    });
  }
}
}
