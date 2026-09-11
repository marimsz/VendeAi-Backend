import { ProductListing, ProductListingStatus } from "../src/modules/entities/product-listing.entities.js"
import { CreateProductListingUseCase } from "../src/modules/products/application/use-case/create-product-listing.use-case.js"

describe("CreateProductListingUseCase",()=>{

    it("deve criar um anuncio",()=> {
        const useCase = new CreateProductListingUseCase()

        const listing = useCase.execute({
            title: "Bicicleta Caloi",
            description: "Bicicleta em bom estado",
            priceInCents: 50000,
            sellerId:"seller-1",
            categoryId:"category-1"
        })

        expect(listing).toBeInstanceOf(ProductListing)
        expect(listing.status).toBe(ProductListingStatus.AVAILABLE)
    })
})