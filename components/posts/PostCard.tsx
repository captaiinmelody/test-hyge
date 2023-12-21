import styles from '../../app/posts/postPage.module.css';

type PostCardProps = {
  id?: number;
  title: string;
  body: string;
}

const PostCard = ({id, title, body}: PostCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{body}</p>
    </div>
  )
}

export default PostCard