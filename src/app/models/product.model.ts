export interface Product{
    // id: number;
    // name: string;
    // description: string;
    // price: number;
    // imageUrl: string;
    // quantity: number;
    id: number,
    title: string,
    price: number,
    description: string,
    category:string,
    image:string,
    rating: Rating
}

export interface Rating{
    rate: number,
    count: number
}