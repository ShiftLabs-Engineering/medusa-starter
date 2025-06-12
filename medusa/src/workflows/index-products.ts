import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk'
import { Modules } from '@medusajs/framework/utils'
import { ISearchService, ProductDTO } from '@medusajs/framework/types'
import { logger } from '@medusajs/framework/logger'

const retrieveProductsStep = createStep(
  {
    name: 'retrieveProductsStep',
  },
  async (input: undefined, context) => {
    const productModuleService = context.container.resolve(Modules.PRODUCT);

    const products = await productModuleService.listProducts(undefined, {
      relations: [
        'variants',
        'options',
        'tags',
        'collection',
        'type',
        'images',
      ],
    });

    return new StepResponse(products);
  },
);

const indexProductsStep = createStep(
  {
    name: 'indexProductsStep',
  },
  async (input: ProductDTO[], context) => {
    const meilisearchService = context.container.resolve(
      'meilisearchService',
    ) as ISearchService
    if (!meilisearchService) {
      logger.info('MeiliSearch is not configured')
      return new StepResponse(null)
    }
    const result = await meilisearchService.addDocuments(
      'products',
      input,
      'products',
    )
    return new StepResponse(result)
  },
)

export const indexProductsWorkflow = createWorkflow(
  {
    name: 'indexProducts',
    idempotent: true,
    retentionTime: 60 * 60 * 24 * 3, // 3 days
    store: true,
  },
  () => {
    const products = retrieveProductsStep()
    const result = indexProductsStep(products)

    return new WorkflowResponse(result)
  },
)
