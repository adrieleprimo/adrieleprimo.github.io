import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

function getMarkdownsFile(){
    return fs.readdirSync(postsDirectory);
}

export function getPost(slugOrFilename, fields = []){
    const slug = slugOrFilename.replace(/\.md$/, '');
    const directory = join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(directory, 'utf8');
    const {data, content} = matter(fileContents);
    const post = {};
    fields.forEach(field => {
        if (field === 'content') post[field] = content;
        if (field === 'slug') post[field] = slug;
        if ( data[field]) post[field] = data[field];
    })
    return post;
}

export function getAllPosts(fields){
    const slugs = getMarkdownsFile();
    const posts = slugs.map(slug => getPost(slug, fields)).sort((a, b) => new Date(b.date) -  new Date(a.date));
    return posts
}