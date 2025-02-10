import Link from 'next/link';
import { getAllPosts } from "../services/api";

export default function Page({posts}) {
    return(
      <>
      <h1>Página Inicial</h1>
      <p>Blog com objetivo de trazer insights e ideias da minha jornada em TI</p>
      <p>Listagem de posts:</p>
      {
        posts.map(post =>
          <p>
            <Link href={`/${post.slug}`}>
            {post.title } 
            </Link>
          </p>
        )
      }
      </>
    )
  }

  export function getStaticProps(){
    const posts = getAllPosts(['title', 'date', 'slug']);
    return {
      props: {posts}
    }
  }