export interface article{
    author:string,
    content:string,
    description:string,
    publishedAt:string,
    title:string,
    url:string,
    urlToImage:string,
    source:sourinter,
    category:string
}
interface sourinter{
    id:string;
    name:string
}
export interface articles{
    articles:article[]
}