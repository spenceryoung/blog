export interface IBlogPost {
    blogId: string;
    title: string;
    body: string;
    category: string;
    tags: string[];
    views: number;
    datePosted: string;
    author: string;
    datemodified: string; 
    modifiedByAuthor: string;
}