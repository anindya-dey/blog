import AuthorModel from "./Author.model";
import ImageAssetModel from "./ImageAsset.model";

export default class PostCardModel {
    slug: string = "";
    title: string = "";
    excerpt: string = "";
    coverImage: ImageAssetModel = new ImageAssetModel();
    date: string = "";
    author: AuthorModel = new AuthorModel();
    tags: string[] = [];
}
