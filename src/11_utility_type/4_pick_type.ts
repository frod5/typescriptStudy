/**
 * pick type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

const createPost = (post: Pick<Post, 'title' | 'content'>): Post => {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: 'title',
    content: 'content',
})