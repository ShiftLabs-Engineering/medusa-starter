import { Modules } from '@medusajs/framework/utils';
import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { z } from 'zod';

const collectionFieldsMetadataSchema = z.object({
  image: z
    .object({
      id: z.string(),
      url: z.string().url(),
    })
    .optional(),
  description: z.string().optional(),
});

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse,
): Promise<void> {
  const { collectionId } = req.params;
  const productService = req.scope.resolve(Modules.PRODUCT);
  const collection = await productService.retrieveProductCollection(
    collectionId,
  );

  const parsed = collectionFieldsMetadataSchema.safeParse(
    collection.metadata ?? {},
  );

  res.json({
    image: parsed.success && parsed.data.image ? parsed.data.image : null,
    description:
      parsed.success && parsed.data.description ? parsed.data.description : '',
  });
}

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse,
): Promise<void> {
  const { collectionId } = req.params;
  const customFields = collectionFieldsMetadataSchema.parse(
    JSON.parse(req.body),
  );

  const productService = req.scope.resolve(Modules.PRODUCT);
  const collection = await productService.retrieveProductCollection(
    collectionId,
  );

  const updatedCollection = await productService.updateProductCollections(
    collectionId,
    {
      metadata: {
        ...collection.metadata,
        ...customFields,
      },
    },
  );

  res.json(updatedCollection);
}
