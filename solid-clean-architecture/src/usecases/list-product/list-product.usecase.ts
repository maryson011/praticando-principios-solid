import { Product } from "../../domain/entity/product"
import { ProductGateway } from "../../domain/gateway/product.gateway"
import { Usecase } from "../usecase"

export type ListProductInputDto = void
export type ListProductOutputDto = {
    products: {
        id: string
        name: string
        price: number
        quantity: number
    }[]
}

export class ListProductUsecase implements Usecase<ListProductInputDto, ListProductOutputDto> {
    private constructor(private readonly productGateway: ProductGateway){}

    public static create(productGateway: ProductGateway) {
        return new ListProductUsecase(productGateway)
    }

    public async execute(): Promise<ListProductOutputDto> {
        const aProduct = await this.productGateway.list()

        const output = this.presentOutput(aProduct)

        return output
    }

    private presentOutput(products: Product[]): ListProductOutputDto {
        return {
            products: products.map((p) => {
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    quantity: p.quantity
                }
            })
        }
    }
}