import React from 'react';
import ProductView from '../app/components/product-view';
import MockProductDetail from '../app/mocks/master-25517823M.js';

export default {
    title: 'Components/ProductView',
    component: ProductView,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'ProductView component displays detailed product information including images, pricing, variants, and action buttons.'
            }
        }
    },
    argTypes: {
        product: {
            description: 'Product data object',
            control: { type: 'object' }
        },
        category: {
            description: 'Category breadcrumb data',
            control: { type: 'object' }
        },
        showFullLink: {
            description: 'Show full product link',
            control: { type: 'boolean' }
        },
        imageSize: {
            description: 'Size of product images',
            control: { type: 'select' },
            options: ['sm', 'md', 'lg']
        },
        isWishlistLoading: {
            description: 'Loading state for wishlist',
            control: { type: 'boolean' }
        },
        isProductLoading: {
            description: 'Loading state for product',
            control: { type: 'boolean' }
        },
        isBasketLoading: {
            description: 'Loading state for basket',
            control: { type: 'boolean' }
        },
        showImageGallery: {
            description: 'Show image gallery',
            control: { type: 'boolean' }
        }
    }
};

const Template = (args) => <ProductView {...args} />;

// Ensure the mock product has the required structure
const ensureProductStructure = (product) => {
    if (!product) return null;
    
    return {
        ...product,
        // Ensure variants array exists
        variants: product.variants || [],
        // Ensure variationAttributes array exists
        variationAttributes: product.variationAttributes || [],
        // Ensure variationValues object exists
        variationValues: product.variationValues || {},
        // Ensure inventory object exists
        inventory: product.inventory || {
            stockLevel: 0,
            orderable: false
        },
        // Ensure type object exists
        type: product.type || {
            set: false,
            bundle: false,
            variant: false,
            master: false
        }
    };
};

// Default story with full product data
export const Default = Template.bind({});
Default.args = {
    product: ensureProductStructure(MockProductDetail),
    category: [
        { name: 'Clothing', url: '/clothing' },
        { name: 'Men', url: '/clothing/men' },
        { name: 'Suits', url: '/clothing/men/suits' }
    ],
    showFullLink: true,
    imageSize: 'md',
    isWishlistLoading: false,
    addToCart: () => console.log('Add to cart clicked'),
    updateCart: () => console.log('Update cart clicked'),
    addToWishlist: () => console.log('Add to wishlist clicked'),
    updateWishlist: () => console.log('Update wishlist clicked'),
    isProductLoading: false,
    isProductPartOfSet: false,
    isProductPartOfBundle: false,
    childOfBundleQuantity: 0,
    childProductOrderability: {},
    setChildProductOrderability: () => {},
    isBasketLoading: false,
    onVariantSelected: () => console.log('Variant selected'),
    validateOrderability: () => true,
    showImageGallery: true,
    setSelectedBundleQuantity: () => {},
    selectedBundleParentQuantity: 1,
};

// Loading state story
export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    product: null,
    isProductLoading: true,
    isWishlistLoading: true,
    isBasketLoading: true,
    category: null
};

// Product with promotions
export const WithPromotions = Template.bind({});
WithPromotions.args = {
    ...Default.args,
    product: ensureProductStructure({
        ...MockProductDetail,
        productPromotions: [
            {
                id: 'promo1',
                calloutMsg: '20% OFF',
                promotionId: 'SUMMER_SALE'
            }
        ]
    })
};

// Product part of a set
export const ProductInSet = Template.bind({});
ProductInSet.args = {
    ...Default.args,
    isProductPartOfSet: true,
    product: ensureProductStructure({
        ...MockProductDetail,
        type: { set: true, bundle: false, variant: false, master: false }
    })
};

// Product part of a bundle
export const ProductInBundle = Template.bind({});
ProductInBundle.args = {
    ...Default.args,
    isProductPartOfBundle: true,
    product: ensureProductStructure({
        ...MockProductDetail,
        type: { set: false, bundle: true, variant: false, master: false }
    }),
    childOfBundleQuantity: 2,
    selectedBundleParentQuantity: 1
};

// Product without image gallery
export const WithoutImageGallery = Template.bind({});
WithoutImageGallery.args = {
    ...Default.args,
    showImageGallery: false
};

// Product with minimal category data
export const MinimalCategory = Template.bind({});
MinimalCategory.args = {
    ...Default.args,
    category: [{ name: 'Clothing' }]
};

// Product with no category
export const NoCategory = Template.bind({});
NoCategory.args = {
    ...Default.args,
    category: null
};

// Product with custom image size
export const LargeImages = Template.bind({});
LargeImages.args = {
    ...Default.args,
    imageSize: 'lg'
};

// Product with small images
export const SmallImages = Template.bind({});
SmallImages.args = {
    ...Default.args,
    imageSize: 'sm'
};

// Product with no variants
export const NoVariants = Template.bind({});
NoVariants.args = {
    ...Default.args,
    product: ensureProductStructure({
        ...MockProductDetail,
        variants: [],
        variationAttributes: []
    })
};

// Product with out of stock
export const OutOfStock = Template.bind({});
OutOfStock.args = {
    ...Default.args,
    product: ensureProductStructure({
        ...MockProductDetail,
        inventory: {
            stockLevel: 0,
            orderable: false,
            ats: 0,
            backorderable: false,
            preorderable: false
        }
    })
}; 