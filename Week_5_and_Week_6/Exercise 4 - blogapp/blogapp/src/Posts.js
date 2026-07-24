import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred in the component: ' + error.message);
    console.error('Error details:', info);
  }

  render() {
    const { posts } = this.state;
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Blog Posts</h1>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map(post => (
            <div key={post.id} style={{
              marginBottom: '20px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
