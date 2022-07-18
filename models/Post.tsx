import Author from "./Author";
import Category from "./Category";

export default class Post {
    slug: string = "";
    title: string = "";
    excerpt: string = "";
    author: Author = new Author();
    publishedAt: string = "";
    categories: Category[] = [];
}
