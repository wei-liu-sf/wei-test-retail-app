/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import emptyBasket from './empty-basket.js'
import basketWithSuit from './basket-with-suit.js'

// Guest basket with items
export const guestBasket = {
    _v: '21.3',
    _type: 'basket',
    _resource_state: 'guest_basket_resource_state',
    _flash: [],
    basket_id: 'guest_basket_123',
    currency: 'USD',
    customer_info: {
        _type: 'customer_info',
        customer_id: null,
        email: ''
    },
    order_total: 89.97,
    product_sub_total: 89.97,
    product_total: 89.97,
    product_items: [
        {
            _type: 'product_item',
            adjusted_tax: 4.5,
            base_price: 29.99,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'guest_item_1',
            item_text: 'Blue Cotton T-Shirt',
            price: 29.99,
            price_after_item_discount: 29.99,
            price_after_order_discount: 29.99,
            product_id: 'simple-product-123',
            product_name: 'Blue Cotton T-Shirt',
            quantity: 1,
            shipment_id: 'me',
            tax: 4.5,
            tax_basis: 29.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        },
        {
            _type: 'product_item',
            adjusted_tax: 9.0,
            base_price: 59.98,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'guest_item_2',
            item_text: 'Denim Jeans',
            price: 59.98,
            price_after_item_discount: 59.98,
            price_after_order_discount: 59.98,
            product_id: 'denim-jeans-456',
            product_name: 'Denim Jeans',
            quantity: 1,
            shipment_id: 'me',
            tax: 9.0,
            tax_basis: 59.98,
            tax_class_id: 'standard',
            tax_rate: 0.15
        }
    ],
    shipments: [
        {
            _type: 'shipment',
            adjusted_merchandize_total_tax: 13.5,
            adjusted_shipping_total_tax: 0.0,
            gift: false,
            merchandize_total_tax: 13.5,
            product_sub_total: 89.97,
            product_total: 89.97,
            shipment_id: 'me',
            shipment_total: 103.47,
            shipping_method: {
                _type: 'shipping_method',
                description: 'Standard shipping method.',
                id: 'StandardShippingMethod',
                name: 'Standard Shipping',
                price: 13.5,
                shipping_promotions: []
            }
        }
    ],
    shipping_total: 13.5,
    shipping_total_tax: 0.0,
    taxation: 'net',
    tax_total: 13.5
}

// Registered user basket with multiple items
export const registeredUserBasket = {
    _v: '21.3',
    _type: 'basket',
    _resource_state: 'registered_basket_resource_state',
    _flash: [],
    basket_id: 'registered_basket_456',
    currency: 'USD',
    customer_info: {
        _type: 'customer_info',
        customer_id: 'customer_123456',
        email: 'john.doe@example.com'
    },
    order_total: 299.97,
    product_sub_total: 299.97,
    product_total: 299.97,
    product_items: [
        {
            _type: 'product_item',
            adjusted_tax: 15.0,
            base_price: 99.99,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'registered_item_1',
            item_text: 'Premium Wool Sweater',
            price: 99.99,
            price_after_item_discount: 99.99,
            price_after_order_discount: 99.99,
            product_id: 'wool-sweater-789',
            product_name: 'Premium Wool Sweater',
            quantity: 1,
            shipment_id: 'me',
            tax: 15.0,
            tax_basis: 99.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        },
        {
            _type: 'product_item',
            adjusted_tax: 30.0,
            base_price: 199.98,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'registered_item_2',
            item_text: 'Leather Jacket',
            price: 199.98,
            price_after_item_discount: 199.98,
            price_after_order_discount: 199.98,
            product_id: 'leather-jacket-101',
            product_name: 'Leather Jacket',
            quantity: 1,
            shipment_id: 'me',
            tax: 30.0,
            tax_basis: 199.98,
            tax_class_id: 'standard',
            tax_rate: 0.15
        }
    ],
    shipments: [
        {
            _type: 'shipment',
            adjusted_merchandize_total_tax: 45.0,
            adjusted_shipping_total_tax: 0.0,
            gift: false,
            merchandize_total_tax: 45.0,
            product_sub_total: 299.97,
            product_total: 299.97,
            shipment_id: 'me',
            shipment_total: 344.97,
            shipping_method: {
                _type: 'shipping_method',
                description: 'Free shipping for orders over $200',
                id: 'FreeShippingMethod',
                name: 'Free Shipping',
                price: 0.0,
                shipping_promotions: [
                    {
                        _type: 'shipping_promotion',
                        callout_msg: 'Free Shipping on Orders Over $200',
                        link: 'https://example.com/promotions/free-shipping',
                        promotion_id: 'FreeShippingOver200',
                        promotion_name: 'Free Shipping Over $200'
                    }
                ]
            }
        }
    ],
    shipping_total: 0.0,
    shipping_total_tax: 0.0,
    taxation: 'net',
    tax_total: 45.0
}

// Large basket with many items
export const largeBasket = {
    _v: '21.3',
    _type: 'basket',
    _resource_state: 'large_basket_resource_state',
    _flash: [],
    basket_id: 'large_basket_789',
    currency: 'USD',
    customer_info: {
        _type: 'customer_info',
        customer_id: 'customer_premium_789',
        email: 'premium.user@example.com'
    },
    order_total: 899.95,
    product_sub_total: 899.95,
    product_total: 899.95,
    product_items: [
        {
            _type: 'product_item',
            adjusted_tax: 45.0,
            base_price: 299.99,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'large_item_1',
            item_text: 'Designer Handbag',
            price: 299.99,
            price_after_item_discount: 299.99,
            price_after_order_discount: 299.99,
            product_id: 'designer-handbag-202',
            product_name: 'Designer Handbag',
            quantity: 1,
            shipment_id: 'me',
            tax: 45.0,
            tax_basis: 299.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        },
        {
            _type: 'product_item',
            adjusted_tax: 60.0,
            base_price: 399.96,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'large_item_2',
            item_text: 'Premium Watch',
            price: 399.96,
            price_after_item_discount: 399.96,
            price_after_order_discount: 399.96,
            product_id: 'premium-watch-303',
            product_name: 'Premium Watch',
            quantity: 1,
            shipment_id: 'me',
            tax: 60.0,
            tax_basis: 399.96,
            tax_class_id: 'standard',
            tax_rate: 0.15
        }
    ],
    shipments: [
        {
            _type: 'shipment',
            adjusted_merchandize_total_tax: 105.0,
            adjusted_shipping_total_tax: 0.0,
            gift: false,
            merchandize_total_tax: 105.0,
            product_sub_total: 899.95,
            product_total: 899.95,
            shipment_id: 'me',
            shipment_total: 1004.95,
            shipping_method: {
                _type: 'shipping_method',
                description: 'Express shipping for premium orders',
                id: 'ExpressShippingMethod',
                name: 'Express Shipping',
                price: 0.0,
                shipping_promotions: [
                    {
                        _type: 'shipping_promotion',
                        callout_msg: 'Free Express Shipping for Premium Members',
                        link: 'https://example.com/promotions/premium-shipping',
                        promotion_id: 'PremiumExpressShipping',
                        promotion_name: 'Premium Express Shipping'
                    }
                ]
            }
        }
    ],
    shipping_total: 0.0,
    shipping_total_tax: 0.0,
    taxation: 'net',
    tax_total: 105.0
}

// Basket with promotional items
export const promotionalBasket = {
    _v: '21.3',
    _type: 'basket',
    _resource_state: 'promotional_basket_resource_state',
    _flash: [],
    basket_id: 'promo_basket_101',
    currency: 'USD',
    customer_info: {
        _type: 'customer_info',
        customer_id: 'customer_123456',
        email: 'john.doe@example.com'
    },
    order_total: 149.97,
    product_sub_total: 199.96,
    product_total: 149.97,
    product_items: [
        {
            _type: 'product_item',
            adjusted_tax: 7.5,
            base_price: 49.99,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'promo_item_1',
            item_text: 'Summer Dress',
            price: 49.99,
            price_after_item_discount: 49.99,
            price_after_order_discount: 49.99,
            product_id: 'summer-dress-404',
            product_name: 'Summer Dress',
            quantity: 1,
            shipment_id: 'me',
            tax: 7.5,
            tax_basis: 49.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        },
        {
            _type: 'product_item',
            adjusted_tax: 15.0,
            base_price: 149.97,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'promo_item_2',
            item_text: 'Running Shoes',
            price: 149.97,
            price_after_item_discount: 99.98,
            price_after_order_discount: 99.98,
            product_id: 'running-shoes-505',
            product_name: 'Running Shoes',
            quantity: 1,
            shipment_id: 'me',
            tax: 15.0,
            tax_basis: 99.98,
            tax_class_id: 'standard',
            tax_rate: 0.15
        }
    ],
    shipments: [
        {
            _type: 'shipment',
            adjusted_merchandize_total_tax: 22.5,
            adjusted_shipping_total_tax: 0.0,
            gift: false,
            merchandize_total_tax: 22.5,
            product_sub_total: 149.97,
            product_total: 149.97,
            shipment_id: 'me',
            shipment_total: 172.47,
            shipping_method: {
                _type: 'shipping_method',
                description: 'Standard shipping method.',
                id: 'StandardShippingMethod',
                name: 'Standard Shipping',
                price: 0.0,
                shipping_promotions: [
                    {
                        _type: 'shipping_promotion',
                        callout_msg: 'Free Shipping on Orders Over $100',
                        link: 'https://example.com/promotions/free-shipping-100',
                        promotion_id: 'FreeShippingOver100',
                        promotion_name: 'Free Shipping Over $100'
                    }
                ]
            }
        }
    ],
    shipping_total: 0.0,
    shipping_total_tax: 0.0,
    taxation: 'net',
    tax_total: 22.5
}

// Basket with gift items
export const giftBasket = {
    _v: '21.3',
    _type: 'basket',
    _resource_state: 'gift_basket_resource_state',
    _flash: [],
    basket_id: 'gift_basket_202',
    currency: 'USD',
    customer_info: {
        _type: 'customer_info',
        customer_id: 'customer_123456',
        email: 'john.doe@example.com'
    },
    order_total: 199.98,
    product_sub_total: 199.98,
    product_total: 199.98,
    product_items: [
        {
            _type: 'product_item',
            adjusted_tax: 15.0,
            base_price: 99.99,
            bonus_product_line_item: false,
            gift: true,
            item_id: 'gift_item_1',
            item_text: 'Gift Wrapped Perfume',
            price: 99.99,
            price_after_item_discount: 99.99,
            price_after_order_discount: 99.99,
            product_id: 'perfume-606',
            product_name: 'Luxury Perfume',
            quantity: 1,
            shipment_id: 'me',
            tax: 15.0,
            tax_basis: 99.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        },
        {
            _type: 'product_item',
            adjusted_tax: 15.0,
            base_price: 99.99,
            bonus_product_line_item: false,
            gift: true,
            item_id: 'gift_item_2',
            item_text: 'Gift Wrapped Jewelry',
            price: 99.99,
            price_after_item_discount: 99.99,
            price_after_order_discount: 99.99,
            product_id: 'jewelry-707',
            product_name: 'Diamond Necklace',
            quantity: 1,
            shipment_id: 'me',
            tax: 15.0,
            tax_basis: 99.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        }
    ],
    shipments: [
        {
            _type: 'shipment',
            adjusted_merchandize_total_tax: 30.0,
            adjusted_shipping_total_tax: 0.0,
            gift: true,
            merchandize_total_tax: 30.0,
            product_sub_total: 199.98,
            product_total: 199.98,
            shipment_id: 'me',
            shipment_total: 229.98,
            shipping_method: {
                _type: 'shipping_method',
                description: 'Gift shipping with special handling',
                id: 'GiftShippingMethod',
                name: 'Gift Shipping',
                price: 0.0,
                shipping_promotions: [
                    {
                        _type: 'shipping_promotion',
                        callout_msg: 'Free Gift Shipping',
                        link: 'https://example.com/promotions/gift-shipping',
                        promotion_id: 'FreeGiftShipping',
                        promotion_name: 'Free Gift Shipping'
                    }
                ]
            }
        }
    ],
    shipping_total: 0.0,
    shipping_total_tax: 0.0,
    taxation: 'net',
    tax_total: 30.0
}

// Basket with errors/flash messages
export const basketWithErrors = {
    _v: '21.3',
    _type: 'basket',
    _resource_state: 'error_basket_resource_state',
    _flash: [
        {
            _type: 'flash',
            type: 'PaymentMethodRequired',
            message:
                'No payment method ID was specified. Please provide a valid payment method ID.',
            path: '$.payment_instruments[0].payment_method_id'
        },
        {
            _type: 'flash',
            type: 'BillingAddressRequired',
            message: 'No billing address was specified. Please provide a valid billing address.',
            path: '$.billing_address'
        },
        {
            _type: 'flash',
            type: 'ShippingAddressRequired',
            message: 'No shipping address was specified. Please provide a valid shipping address.',
            path: '$.shipments[0].shipping_address',
            details: {shipmentId: 'me'}
        }
    ],
    basket_id: 'error_basket_303',
    currency: 'USD',
    customer_info: {
        _type: 'customer_info',
        customer_id: 'customer_123456',
        email: 'john.doe@example.com'
    },
    order_total: 89.97,
    product_sub_total: 89.97,
    product_total: 89.97,
    product_items: [
        {
            _type: 'product_item',
            adjusted_tax: 4.5,
            base_price: 29.99,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'error_item_1',
            item_text: 'Basic T-Shirt',
            price: 29.99,
            price_after_item_discount: 29.99,
            price_after_order_discount: 29.99,
            product_id: 'basic-tshirt-808',
            product_name: 'Basic T-Shirt',
            quantity: 1,
            shipment_id: 'me',
            tax: 4.5,
            tax_basis: 29.99,
            tax_class_id: 'standard',
            tax_rate: 0.15
        },
        {
            _type: 'product_item',
            adjusted_tax: 9.0,
            base_price: 59.98,
            bonus_product_line_item: false,
            gift: false,
            item_id: 'error_item_2',
            item_text: 'Casual Pants',
            price: 59.98,
            price_after_item_discount: 59.98,
            price_after_order_discount: 59.98,
            product_id: 'casual-pants-909',
            product_name: 'Casual Pants',
            quantity: 1,
            shipment_id: 'me',
            tax: 9.0,
            tax_basis: 59.98,
            tax_class_id: 'standard',
            tax_rate: 0.15
        }
    ],
    shipments: [
        {
            _type: 'shipment',
            adjusted_merchandize_total_tax: 13.5,
            adjusted_shipping_total_tax: 0.0,
            gift: false,
            merchandize_total_tax: 13.5,
            product_sub_total: 89.97,
            product_total: 89.97,
            shipment_id: 'me',
            shipment_total: 103.47,
            shipping_method: {
                _type: 'shipping_method',
                description: 'Standard shipping method.',
                id: 'StandardShippingMethod',
                name: 'Standard Shipping',
                price: 13.5,
                shipping_promotions: []
            }
        }
    ],
    shipping_total: 13.5,
    shipping_total_tax: 0.0,
    taxation: 'net',
    tax_total: 13.5
}

// Export all basket scenarios
export const basketScenarios = {
    empty: emptyBasket,
    guest: guestBasket,
    registered: registeredUserBasket,
    large: largeBasket,
    promotional: promotionalBasket,
    gift: giftBasket,
    withErrors: basketWithErrors,
    withSuit: basketWithSuit
}

export default basketScenarios
