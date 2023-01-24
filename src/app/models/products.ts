export interface IProducts {
    id: number,
    title: string,
    imported: boolean,
    taxed: boolean,
    description: string,
    price: number,
    image: string,
    quantity?: number
}