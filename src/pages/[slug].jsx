import {getAllPosts, getPost} from '../services/api.js';
import markdown from '../services/markdown.js';

export async function getStaticPaths(){
    const posts = getAllPosts(['slug']);
    const paths = posts.map((post)=>({
        params: {slug: post.slug}
    }));
    return{
        paths,
        fallback: false,
    };

}

export default function Page({post}){
    return (
        <>
        <h1>{post.title }</h1>
        <p>{post.author}· {post.date }</p>
        <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </>
    );
}

export async function getStaticProps({params}){
    const post = getPost(params.slug, [
        'title',
        'date',
        'author',
        'slug',
        'content'
    ]);

     post.content = await markdown.toHTML(post.content);
     return {
        props: {post}
     }
}