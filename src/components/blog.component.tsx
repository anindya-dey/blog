import { PostCard } from "@/types/post-card.type";
import graphqlClient from "@/utils/graphql-client";
interface IBlogProps {
    postCards: PostCard[];
}

export default function Blog({ postCards }: IBlogProps) {
    return (
        <>
         {
            postCards?.map((post, index) => (
                <p key={index}>{post.title}</p>
            ))
         }
        </>
    )
}
