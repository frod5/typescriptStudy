/**
 * omit type
 * 제외한 모두
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

const createPost = (post: Omit<Post, 'createdAt'>): Post => {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: 'title',
    content: 'content',
})