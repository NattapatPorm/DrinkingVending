import {IBuyProduct} from "../interface/buyProduct.interface";
import {IsInt, IsNotEmpty, Max, Min} from "class-validator";

export class BuyProductDto implements IBuyProduct {

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    productId: number;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Max(10)
    productNumber: number;
}
