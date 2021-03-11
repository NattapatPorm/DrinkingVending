import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    findProductByMachineId = async (machineId:number): Promise<Product[]> => {
        const query = this.createQueryBuilder('products');

        if(machineId) {
            query.andWhere('products.machine_id = :machineId', { machineId });
        }

        const product = await query
            .leftJoinAndSelect("products.mainproduct_id", "mainproducts")
            .getMany();

        return product;
    }

    updateBuyProduct = async (productId: number, productNumber: number): Promise<Boolean> => {

        await this.createQueryBuilder('products')
            .update(Product)
            .set({ product_quantity: () => `product_quantity = ${productNumber}` })
            .where('products.product_id = :productId', { productId });

        return true;
    }
}
