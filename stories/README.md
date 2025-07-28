# ProductTile Storybook Stories

This directory contains comprehensive Storybook stories for the ProductTile component, showcasing all its features and variations.

## Available Stories

### 1. Default
- **Description**: Default ProductTile with all features enabled including favourites, variations, and promotions
- **Features**: Heart icon, color swatches, promotional callouts, product badges
- **Use Case**: Standard product display in product listings

### 2. Favourite
- **Description**: ProductTile with the product marked as favourite (heart icon filled)
- **Features**: Filled heart icon, all other default features
- **Use Case**: Wishlist display, showing favourited products

### 3. NoFavouriteOption
- **Description**: ProductTile without the favourite functionality - no heart icon displayed
- **Features**: All default features except favourite functionality
- **Use Case**: Product listings where wishlist is not available

### 4. VariantProduct
- **Description**: ProductTile for a variant product (suit) with different styling and structure
- **Features**: Variant-specific data, different product structure
- **Use Case**: Displaying complex products with multiple variants

### 5. SimpleProduct
- **Description**: ProductTile for a simple product without variations - no swatches displayed
- **Features**: Basic product display without variation swatches
- **Use Case**: Simple products without color/size options

### 6. Loading
- **Description**: ProductTile in loading state - shows skeleton placeholders for image and content
- **Features**: Skeleton loading animation
- **Use Case**: Initial page load, data fetching states

### 7. RefreshingData
- **Description**: ProductTile showing skeleton loading for pricing and promotions while data is being refreshed
- **Features**: Partial skeleton loading for pricing section
- **Use Case**: Data refresh scenarios, price updates

### 8. CustomImageView
- **Description**: ProductTile using medium image view type instead of the default large
- **Features**: Custom image sizing
- **Use Case**: Different layout requirements, responsive design

### 9. CustomImageProps
- **Description**: ProductTile with custom dynamic image properties for optimized loading
- **Features**: Custom image loading configuration
- **Use Case**: Performance optimization, custom image handling

### 10. CustomBadges
- **Description**: ProductTile with custom badge configuration for displaying product labels
- **Features**: Custom badge styling and configuration
- **Use Case**: Brand-specific product labeling

### 11. CustomSelectableAttribute
- **Description**: ProductTile configured to show size swatches instead of color swatches
- **Features**: Custom variation attribute display
- **Use Case**: Products with different primary variation types

### 12. GridLayout
- **Description**: Multiple ProductTiles displayed in a responsive grid layout
- **Features**: Grid layout showcase with multiple product types
- **Use Case**: Product listing pages, category pages

### 13. Interactive
- **Description**: Interactive ProductTile with working favourite functionality
- **Features**: Working favourite toggle, state management
- **Use Case**: Testing favourite functionality, user interaction

## Component Props

The ProductTile component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `product` | Object | - | Product data object containing all product information |
| `enableFavourite` | Boolean | `false` | Enable the favourite/wishlist icon |
| `isFavourite` | Boolean | `false` | Whether the product is currently marked as favourite |
| `onFavouriteToggle` | Function | - | Callback function when favourite icon is clicked |
| `imageViewType` | String | `'large'` | The view type for the product image (large, medium, small) |
| `selectableAttributeId` | String | `'color'` | The variation attribute ID to display as swatches |
| `dynamicImageProps` | Object | - | Props for the dynamic image component |
| `badgeDetails` | Array | - | Configuration for product badges |
| `isRefreshingData` | Boolean | `false` | Show loading skeleton for pricing and promotions |

## Mock Data

The stories use several mock data files:

- `master-25517823M.js`: Complex product with multiple variants and variations
- `variant-750518699578M.js`: Variant product (suit) with different structure
- `simple-product.js`: Simple product without variations

## Running the Stories

To run the Storybook stories:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006` where you can interact with all the ProductTile stories.

## Development

When adding new stories:

1. Create mock data if needed in `app/mocks/`
2. Add the story to `ProductTile.stories.js`
3. Include proper documentation in the story parameters
4. Test the story in Storybook

## Best Practices

- Each story should demonstrate a specific use case or feature
- Include comprehensive documentation for each story
- Use realistic mock data that represents actual product structures
- Test interactive features like the favourite toggle
- Ensure stories work across different screen sizes 