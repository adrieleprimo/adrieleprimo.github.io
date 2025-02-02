import {remark} from 'remark';
import html from 'remark-html';
import {getAllPosts, getPost} from '../services/api.js';


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

    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();
    return{
        props: {
            post:{
                ...post,
                content: contentHtml,
            }
        }
    }
}