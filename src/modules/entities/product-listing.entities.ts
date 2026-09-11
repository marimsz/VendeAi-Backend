export enum ProductListingStatus {
    AVAILABLE = 'AVAILABLE',
    SOLD = 'SOLD',
    INACTIVE = 'INACTIVE'
}

export interface CreateProductListingData {
    title: string,
    description: string,
    priceInCents: number,
    sellerId: string,
    categoryId: string
}

interface ProductListingData extends CreateProductListingData {
    status: ProductListingStatus
}

export class ProductListing {

    private constructor(
        private readonly data: ProductListingData
    ) {}

    static create(data: CreateProductListingData): ProductListing {

        if (!data.title.trim()) {
            throw new Error("O titulo do anuncio é obrigatorio")
        }

        if (data.priceInCents < 0) {
            throw new Error("O preço nao pode ser negativo")
        }

        if (!data.description.trim()) {
            throw new Error("A descrição do anuncio é obrigatoria")
        }

        if (!data.sellerId.trim()) {
            throw new Error("O vendedor é obrigatorio")
        }

        if (!data.categoryId.trim()) {
            throw new Error("A categoria é obrigatoria")
        }

        return new ProductListing({
            ...data,
            status: ProductListingStatus.AVAILABLE
        })
    }

    get status(): ProductListingStatus {
        return this.data.status
    }

    markAsSold():void{
        this.data.status = ProductListingStatus.SOLD
    }
}
