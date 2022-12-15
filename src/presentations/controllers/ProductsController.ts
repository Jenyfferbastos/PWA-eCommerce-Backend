import { inject, injectable } from 'inversify';
import { Response } from 'express';
import {
  Controller,
  Res,
  Get,
  UseBefore,
  QueryParams,
} from 'routing-controllers';
import { json } from 'body-parser';

import { Utils } from '../helpers/Utils';
import { ProductsRepository } from 'src/infra/database/mongodb/repositories/ProductsRepository';
import { ListProductsBody } from './interfaces/ListProductsBody';

@Controller('/products')
@injectable()
export class ProductsController {
  constructor(
    @inject(Utils) private readonly utils: Utils,
    @inject(ProductsRepository)
    private readonly productsRepository: ProductsRepository,
  ) {}

  @Get()
  @UseBefore(json())
  public async listProducts(
    @Res() res: Response,
    @QueryParams()
    params?: ListProductsBody,
  ) {
    try {
      return await this.productsRepository.listProducts(
        params.category,
        params.value,
      );
    } catch (error) {
      return this.utils.handleResponse(error, res);
    }
  }
}
