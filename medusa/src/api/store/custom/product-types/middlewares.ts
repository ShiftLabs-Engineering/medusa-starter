import * as QueryConfig from './query-config';
import { MiddlewareRoute } from '@medusajs/framework/http';
import {
  AdminGetProductTypeParams,
  AdminGetProductTypesParams,
} from './validators';
import { validateAndTransformQuery } from '@medusajs/medusa/api/utils/validate-query';

export const adminProductTypeRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ['GET'],
    matcher: '/store/custom/product-types',
    middlewares: [
      validateAndTransformQuery(
        AdminGetProductTypesParams,
        QueryConfig.listProductTypesTransformQueryConfig,
      ),
    ],
  },
  {
    method: ['GET'],
    matcher: '/store/custom/product-types/:id',
    middlewares: [
      validateAndTransformQuery(
        AdminGetProductTypeParams,
        QueryConfig.retrieveProductTypeTransformQueryConfig,
      ),
    ],
  },
];
