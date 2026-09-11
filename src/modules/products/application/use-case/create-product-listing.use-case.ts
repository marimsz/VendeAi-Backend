import { CreateProductListingData, ProductListing } from "../../../entities/product-listing.entities.js";

export class CreateProductListingUseCase{

    execute(data: CreateProductListingData):ProductListing{
        return ProductListing.create(data)
    }
}