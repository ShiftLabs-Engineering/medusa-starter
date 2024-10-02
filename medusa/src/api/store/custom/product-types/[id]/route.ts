import { refetchProductType } from '../helpers';
import { AdminGetProductTypeParamsType } from '../validators';
import { HttpTypes } from '@medusajs/framework/types';
import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/medusa';

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetProductTypeParamsType>,
  res: MedusaResponse<HttpTypes.AdminProductTypeResponse>,
) => {
  const productType = await refetchProductType(
    req.params.id,
    req.scope,
    req.remoteQueryConfig.fields,
  );

  res.status(200).json({ product_type: productType });
};
