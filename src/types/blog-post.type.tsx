type Content = {
    markdown: string;
    html: string;
}

type Author = {
    name: string;
}

export type BlogPost = {
    title: string;
    tags: string[];
    date: string;
    content: Content;
    author: Author;
};
