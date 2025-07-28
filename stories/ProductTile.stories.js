import React from 'react';
import ProductTile from '../app/components/product-tile';
import MockProductTile from '../app/mocks/master-25517823M.js';
import MockVariantProduct from '../app/mocks/variant-750518699578M.js';
import MockSimpleProduct from '../app/mocks/simple-product.js';

export default {
    title: 'Components/ProductTile',
    component: ProductTile,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# ProductTile Component

The ProductTile is a simple visual representation of a product object. It displays the product's default image, name, and price. 
It also supports favourite products, controlled by a heart icon, and can display product variations through swatches.

## Features

- **Product Image**: Displays product images with lazy loading
- **Product Name**: Shows localized product name
- **Pricing**: Displays current price with currency formatting
- **Favourites**: Optional heart icon for wishlist functionality
- **Variations**: Color swatches for product variations
- **Promotions**: Shows promotional callouts when available
- **Badges**: Displays product badges (e.g., "New", "Sale")
- **Loading States**: Skeleton loading for better UX

## Usage

\`\`\`jsx
import ProductTile from '@salesforce/retail-react-app/app/components/product-tile';

<ProductTile 
    product={productData}
    enableFavourite={true}
    isFavourite={false}
    onFavouriteToggle={(isFavourite) => console.log('Favourite toggled:', isFavourite)}
/>
\`\`\`
                `
            }
        }
    },
    argTypes: {
        product: {
            description: 'Product data object containing all product information',
            control: { type: 'object' }
        },
        enableFavourite: {
            description: 'Enable the favourite/wishlist icon',
            control: { type: 'boolean' },
            defaultValue: false
        },
        isFavourite: {
            description: 'Whether the product is currently marked as favourite',
            control: { type: 'boolean' },
            defaultValue: false
        },
        onFavouriteToggle: {
            description: 'Callback function when favourite icon is clicked',
            action: 'favourite toggled'
        },
        imageViewType: {
            description: 'The view type for the product image (large, medium, small)',
            control: { type: 'select', options: ['large', 'medium', 'small'] },
            defaultValue: 'large'
        },
        selectableAttributeId: {
            description: 'The variation attribute ID to display as swatches (default: color)',
            control: { type: 'text' },
            defaultValue: 'color'
        },
        dynamicImageProps: {
            description: 'Props for the dynamic image component',
            control: { type: 'object' }
        },
        badgeDetails: {
            description: 'Configuration for product badges',
            control: { type: 'object' }
        },
        isRefreshingData: {
            description: 'Show loading skeleton for pricing and promotions',
            control: { type: 'boolean' },
            defaultValue: false
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
Default.parameters = {
    docs: {
        description: {
            story: 'Default ProductTile with all features enabled including favourites, variations, and promotions.'
        }
    }
};

// Product marked as favourite
export const Favourite = Template.bind({});
Favourite.args = {
    ...Default.args,
    isFavourite: true
};
Favourite.parameters = {
    docs: {
        description: {
            story: 'ProductTile with the product marked as favourite (heart icon filled).'
        }
    }
};

// Product with no favourite option
export const NoFavouriteOption = Template.bind({});
NoFavouriteOption.args = {
    ...Default.args,
    enableFavourite: false
};
NoFavouriteOption.parameters = {
    docs: {
        description: {
            story: 'ProductTile without the favourite functionality - no heart icon displayed.'
        }
    }
};

// Variant product (suit)
export const VariantProduct = Template.bind({});
VariantProduct.args = {
    product: MockVariantProduct,
    enableFavourite: true,
    isFavourite: false,
    onFavouriteToggle: () => console.log('Favourite toggled')
};
VariantProduct.parameters = {
    docs: {
        description: {
            story: 'ProductTile for a variant product (suit) with different styling and structure.'
        }
    }
};

// Simple product without variations
export const SimpleProduct = Template.bind({});
SimpleProduct.args = {
    product: MockSimpleProduct,
    enableFavourite: true,
    isFavourite: false,
    onFavouriteToggle: () => console.log('Favourite toggled')
};
SimpleProduct.parameters = {
    docs: {
        description: {
            story: 'ProductTile for a simple product without variations - no swatches displayed.'
        }
    }
};

// Loading state story
export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    product: null
};
Loading.parameters = {
    docs: {
        description: {
            story: 'ProductTile in loading state - shows skeleton placeholders for image and content.'
        }
    }
};

// Refreshing data state
export const RefreshingData = Template.bind({});
RefreshingData.args = {
    ...Default.args,
    isRefreshingData: true
};
RefreshingData.parameters = {
    docs: {
        description: {
            story: 'ProductTile showing skeleton loading for pricing and promotions while data is being refreshed.'
        }
    }
};

// Product with custom image view type
export const CustomImageView = Template.bind({});
CustomImageView.args = {
    ...Default.args,
    imageViewType: 'medium'
};
CustomImageView.parameters = {
    docs: {
        description: {
            story: 'ProductTile using medium image view type instead of the default large.'
        }
    }
};

// Product with custom dynamic image props
export const CustomImageProps = Template.bind({});
CustomImageProps.args = {
    ...Default.args,
    dynamicImageProps: {
        widths: [200, 400, 600],
        imageProps: {
            loading: 'eager',
            decoding: 'async'
        }
    }
};
CustomImageProps.parameters = {
    docs: {
        description: {
            story: 'ProductTile with custom dynamic image properties for optimized loading.'
        }
    }
};

// Product with custom badge details
export const CustomBadges = Template.bind({});
CustomBadges.args = {
    ...Default.args,
    badgeDetails: [
        {
            propertyName: 'isNew',
            label: { id: 'product.badge.new', defaultMessage: 'New' },
            color: 'green'
        },
        {
            propertyName: 'isOnSale',
            label: { id: 'product.badge.sale', defaultMessage: 'Sale' },
            color: 'red'
        }
    ]
};
CustomBadges.parameters = {
    docs: {
        description: {
            story: 'ProductTile with custom badge configuration for displaying product labels.'
        }
    }
};

// Product with different selectable attribute
export const CustomSelectableAttribute = Template.bind({});
CustomSelectableAttribute.args = {
    ...Default.args,
    selectableAttributeId: 'size'
};
CustomSelectableAttribute.parameters = {
    docs: {
        description: {
            story: 'ProductTile configured to show size swatches instead of color swatches.'
        }
    }
};

// Grid layout showcase
export const GridLayout = () => (
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        padding: '20px',
        backgroundColor: '#f5f5f5'
    }}>
        <ProductTile {...Default.args} />
        <ProductTile {...Favourite.args} />
        <ProductTile {...NoFavouriteOption.args} />
        <ProductTile {...VariantProduct.args} />
        <ProductTile {...SimpleProduct.args} />
    </div>
);
GridLayout.parameters = {
    docs: {
        description: {
            story: 'Multiple ProductTiles displayed in a responsive grid layout to show how they look in a product listing.'
        }
    }
};

// Interactive story with state management
export const Interactive = () => {
    const [isFavourite, setIsFavourite] = React.useState(false);
    
    return (
        <div style={{ padding: '20px' }}>
            <ProductTile 
                {...Default.args}
                isFavourite={isFavourite}
                onFavouriteToggle={(newFavouriteState) => {
                    setIsFavourite(newFavouriteState);
                    console.log('Favourite state changed to:', newFavouriteState);
                }}
            />
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                <p><strong>Current favourite state:</strong> {isFavourite ? '❤️ Favourited' : '🤍 Not favourited'}</p>
                <button onClick={() => setIsFavourite(!isFavourite)}>
                    Toggle Favourite State
                </button>
            </div>
        </div>
    );
};
Interactive.parameters = {
    docs: {
        description: {
            story: 'Interactive ProductTile with working favourite functionality. Click the heart icon or use the button below to toggle the favourite state.'
        }
    }
}; 