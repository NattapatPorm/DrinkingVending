import { EntityRepository, Repository } from "typeorm";
import { MainProduct } from "../entities/mainProduct.entity";

@EntityRepository(MainProduct)
export class MainProductRepository extends Repository<MainProduct> {}
