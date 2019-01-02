export interface IBlogPost {
    postId: string;
    title: string;
    body: string;
    category: string;
    tags: string[];
    views: number;
    datePosted: string;
    author: string;
    authorId: string;
    dateModified: string; 
    backgroundImageUrl: string;
}
