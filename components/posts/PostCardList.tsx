'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../app/posts/postPage.module.css';
import PostCard from './PostCard';

interface Post {
  id: number,
  title: string,
  body: string,
}

const PostCardList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(respose => {setPosts(respose.data)}).catch(error => console.error('Error fetching data:', error))
  }, [])
  return (
    <div className={styles.cardList}>
      <h2 className={styles.header}>PostList</h2>
      <div className={styles.cardListContainer}>
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  )
}

export default PostCardList