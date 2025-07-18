import React from 'react';
import ProductView from '../app/components/product-view';
import MockProductDetail from '../app/mocks/variant-750518699578M.js';

export default {
    title: 'Components/ProductView',
    component: ProductView,
};

const Template = (args) => <ProductView {...args} />;

export const Default = Template.bind({});
Default.args = {
    // product: 
    // {
    //     name: 'Sample Product',
    //     type: { set: false, bundle: false },
    //     productPromotions: [],
    //     // Add more product properties as needed
    // },
    product: MockProductDetail,
    category: [{ name: 'Category 1' }, { name: 'Category 2' }],
    showFullLink: true,
    imageSize: 'md',
    isWishlistLoading: false,
    addToCart: () => {},
    updateCart: () => {},
    addToWishlist: () => {},
    updateWishlist: () => {},
    isProductLoading: false,
    isProductPartOfSet: false,
    isProductPartOfBundle: false,
    childOfBundleQuantity: 0,
    childProductOrderability: {},
    setChildProductOrderability: () => {},
    isBasketLoading: false,
    onVariantSelected: () => {},
    validateOrderability: () => true,
    showImageGallery: true,
    setSelectedBundleQuantity: () => {},
    selectedBundleParentQuantity: 1,
}; 