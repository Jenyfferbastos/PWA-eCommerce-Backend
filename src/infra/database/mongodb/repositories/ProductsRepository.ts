import { injectable } from 'inversify';

import { ProductModel } from '../schemas/ProductSchema';

@injectable()
export class ProductsRepository {
  async listProducts(category?: string, value?: string) {
    const query = category ? this.createCategoriesQuery(category, value) : {};
    const products = await ProductModel.find(query);
    return JSON.stringify(products);
  }

  private createCategoriesQuery(category: string, value: string) {
    let query = {};
    if (category === 'Color')
      query = {
        'categories.color': value,
      };
    else if (category === 'Size')
      query = {
        'categories.size': value,
      };
    else if (category === 'Brand')
      query = {
        'categories.brand': value,
      };
    else if (category === 'Price Range')
      query = {
        'categories.pricingBefore': { $lte: value, $gte: value },
      };
    else if (category === 'Discount')
      query = {
        'categories.discount': { $gte: value },
      };

    return query;
  }
}
