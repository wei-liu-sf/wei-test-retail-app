import React from 'react';
import ProductTile from '../app/components/product-tile';
import MockProductTile from '../app/mocks/master-25517823M.js';

export default {
    title: 'Components/ProductTile',
    component: ProductTile,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'ProductTile component displays a simple visual representation of a product including image, name, and price.'
            }
        }
    },
    argTypes: {
        product: {
            description: 'Product data object',
            control: { type: 'object' }
        },
        enableFavourite: {
            description: 'Enable favourite icon',
            control: { type: 'boolean' }
        },
        isFavourite: {
            description: 'Is product marked as favourite',
            control: { type: 'boolean' }
        },
        onFavouriteToggle: {
            description: 'Callback for favourite toggle',
            action: 'favourite toggled'
        }
    }
};

const Template = (args) => <ProductTile {...args} />;

// Default story with full product data
export const Default = Template.bind({});
Default.args = {
    product: MockProductTile,
    enableFavourite: true,
    isFavourite: false,
    onFavouriteToggle: () => console.log('Favourite toggled')
};

// Loading state story
export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    product: null
};

// Product marked as favourite
export const Favourite = Template.bind({});
Favourite.args = {
    ...Default.args,
    isFavourite: true
};

// Product with no favourite option
export const NoFavouriteOption = Template.bind({});
NoFavouriteOption.args = {
    ...Default.args,
    enableFavourite: false
}; 