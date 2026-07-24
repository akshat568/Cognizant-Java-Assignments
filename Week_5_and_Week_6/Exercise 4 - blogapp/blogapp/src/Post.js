/**
 * Post model class representing a single blog post.
 * Properties:
 *  - userId: number
 *  - id: number
 *  - title: string
 *  - body: string
 */
class Post {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export default Post;
