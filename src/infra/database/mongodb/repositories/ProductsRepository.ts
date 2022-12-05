import { injectable } from 'inversify';
import { ProductCategories } from '../interfaces/Product';

import { ProductModel } from '../schemas/ProductSchema';

@injectable()
export class ProductsRepository {
  async listProducts(categories: ProductCategories) {
    const query = categories ? this.createCategoriesQuery(categories) : {};
    const products = await ProductModel.find(query);
    return JSON.stringify(products);
  }

  private createCategoriesQuery(categories: ProductCategories) {
    let query = {};
    if (categories.color)
      query = {
        'categories.color': categories.color,
      };
    else if (categories.length)
      query = {
        'categories.length': categories.length,
      };
    else if (categories.brand)
      query = {
        'categories.brand': categories.brand,
      };
    else if (categories.pricingBefore)
      query = {
        'categories.pricingBefore': { $lte: categories.pricingBefore },
      };
    else if (categories.discount)
      query = {
        'categories.discount': { $gte: categories.discount },
      };
    else if (categories.rate)
      query = {
        'categories.rate': categories.rate,
      };

    return query;
  }
}
