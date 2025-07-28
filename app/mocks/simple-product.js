/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export default {
    currency: 'USD',
    productId: 'simple-product-123',
    imageGroups: [
        {
            images: [
                {
                    alt: 'Simple Product, large',
                    disBaseLink:
                        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8e308d98/images/large/simple-product.jpg',
                    link: 'https://zzrf-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw8e308d98/images/large/simple-product.jpg',
                    title: 'Simple Product'
                }
            ],
            viewType: 'large'
        },
        {
            images: [
                {
                    alt: 'Simple Product, medium',
                    disBaseLink:
                        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw2ad3abd7/images/medium/simple-product.jpg',
                    link: 'https://zzrf-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw2ad3abd7/images/medium/simple-product.jpg',
                    title: 'Simple Product'
                }
            ],
            viewType: 'medium'
        },
        {
            images: [
                {
                    alt: 'Simple Product, small',
                    disBaseLink:
                        'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw08152bc5/images/small/simple-product.jpg',
                    link: 'https://zzrf-001.dx.commercecloud.salesforce.com/on/demandware.static/-/Sites-apparel-m-catalog/default/dw08152bc5/images/small/simple-product.jpg',
                    title: 'Simple Product'
                }
            ],
            viewType: 'small'
        }
    ],
    inventory: {
        ats: 100,
        backorderable: false,
        id: 'inventory_simple',
        orderable: true,
        preorderable: false,
        stockLevel: 100
    },
    longDescription: 'A simple product without variations for testing purposes.',
    minOrderQuantity: 1,
    name: 'Simple Product',
    pageDescription: 'A simple product without variations for testing purposes.',
    pageTitle: 'Simple Product',
    price: 29.99,
    pricePerUnit: 29.99,
    priceRanges: [
        {
            maxPrice: 29.99,
            minPrice: 29.99,
            pricebook: 'usd-m-sale-prices'
        }
    ],
    primaryCategoryId: 'simple-products',
    shortDescription: 'A simple product without variations.',
    slugUrl: 'https://example.com/simple-product/simple-product-123.html',
    stepQuantity: 1,
    type: {
        item: true
    },
    validFrom: {
        default: '2023-01-01T00:00:00.000Z'
    }
}; 