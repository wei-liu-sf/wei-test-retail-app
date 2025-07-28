# Components Storybook Documentation

This directory contains comprehensive Storybook stories for all the components in the PWA Kit application. Each component has multiple stories showcasing different use cases, configurations, and interactive examples.

## Available Component Stories

### 1. ProductTile
**File**: `ProductTile.stories.js`
**Component**: `app/components/product-tile`

**Stories**:
- **Default**: Standard product tile with all features
- **Favourite**: Product marked as favourite
- **NoFavouriteOption**: Product tile without wishlist functionality
- **VariantProduct**: Complex product with multiple variants
- **SimpleProduct**: Basic product without variations
- **Loading**: Skeleton loading state
- **RefreshingData**: Partial loading for pricing updates
- **CustomImageView**: Different image view types
- **CustomImageProps**: Optimized image loading
- **CustomBadges**: Custom product badges
- **CustomSelectableAttribute**: Different variation attributes
- **GridLayout**: Responsive grid showcase
- **Interactive**: Working favourite toggle with state management

**Features**:
- Product image display with lazy loading
- Favourite/wishlist functionality
- Product variations with swatches
- Promotional callouts
- Product badges
- Loading states
- Responsive design

### 2. AddressDisplay
**File**: `AddressDisplay.stories.js`
**Component**: `app/components/address-display`

**Stories**:
- **Default**: Standard US address format
- **InternationalAddress**: UK address format
- **CanadianAddress**: Canadian address with province code
- **AustralianAddress**: Australian address format
- **GermanAddress**: German address with street number
- **JapaneseAddress**: Japanese address with district info
- **LongNameAddress**: Long names and addresses for testing
- **MinimalAddress**: Address with missing optional fields
- **BusinessAddress**: Company address with suite number
- **ApartmentAddress**: Apartment address with unit number
- **PoBoxAddress**: PO Box format
- **RuralAddress**: Rural route format
- **MilitaryAddress**: APO military address
- **FrenchAddress**: French address format
- **ItalianAddress**: Italian address format
- **SpanishAddress**: Spanish address with "Calle" prefix
- **DutchAddress**: Dutch address with "van der" name
- **SwedishAddress**: Swedish address format
- **MultipleAddresses**: Grid layout showcase
- **InteractiveAddress**: Working form with real-time updates

**Features**:
- International address support
- Multiple address formats
- Business and special address types
- Interactive editing
- Responsive layout

### 3. DisplayPrice
**File**: `DisplayPrice.stories.js`
**Component**: `app/components/display-price`

**Stories**:
- **StandardPrice**: Standard product price display
- **SalePrice**: Product on sale with list price
- **SetPrice**: Product set with "From" pricing
- **MasterPrice**: Master product with range pricing
- **PriceWithQuantity**: Price with quantity calculation
- **DifferentCurrencies**: Price display in different currencies
- **PriceScenarios**: Various pricing configurations
- **InteractivePrice**: Interactive price editor

**Features**:
- Current and list price display
- Set and master product pricing
- Sale pricing with crossed-out prices
- Quantity support
- Multiple currency formats
- Interactive price editing

### 4. LoadingSpinner
**File**: `LoadingSpinner.stories.js`
**Component**: `app/components/loading-spinner`

**Stories**:
- **Default**: Default loading spinner
- **CustomColor**: Custom colored spinner
- **CustomOverlay**: Custom overlay background
- **SmallSpinner**: Small spinner size
- **LargeSpinner**: Large spinner size
- **CustomThickness**: Custom spinner thickness
- **CustomSpeed**: Custom animation speed
- **MultipleSpinners**: Multiple spinner configurations
- **InteractiveSpinner**: Interactive spinner customizer

**Features**:
- Overlay display with semi-transparent background
- Centered spinner positioning
- Customizable styling
- Multiple size options
- Custom animation speeds
- Interactive customization

### 5. Breadcrumb
**File**: `Breadcrumb.stories.js`
**Component**: `app/components/breadcrumb`

**Stories**:
- **Simple**: Simple breadcrumb with few categories
- **Deep**: Deep breadcrumb with many categories
- **Ecommerce**: E-commerce category breadcrumb
- **SingleCategory**: Single category breadcrumb
- **ProductCategory**: Product category breadcrumb
- **LongNames**: Long category names
- **MultipleBreadcrumbs**: Multiple breadcrumb examples
- **InteractiveBreadcrumb**: Interactive breadcrumb builder

**Features**:
- Category navigation trail
- Clickable links
- Custom separator icons
- Responsive design
- URL generation
- Interactive category editing

### 6. ProductView
**File**: `ProductView.stories.js`
**Component**: `app/components/product-view`

**Stories**:
- **Default**: Standard product view
- **WithVariants**: Product with multiple variants
- **OnSale**: Product on sale
- **OutOfStock**: Out of stock product
- **Loading**: Loading state
- **Error**: Error state

**Features**:
- Product information display
- Variant selection
- Pricing information
- Stock status
- Loading and error states

## Mock Data Files

### Product Data
- `master-25517823M.js`: Complex product with multiple variants
- `variant-750518699578M.js`: Variant product (suit)
- `simple-product.js`: Simple product without variations

### Address Data
- `addresses.js`: Comprehensive address examples including:
  - US addresses (standard, business, apartment, long names)
  - International addresses (UK, Canada, Australia, Germany, Japan, France, Italy, Spain, Netherlands, Sweden)
  - Special cases (PO Box, rural, military)

## Running the Stories

To run all Storybook stories:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006` where you can:
- Browse all component stories
- Interact with interactive examples
- Test different configurations
- View responsive layouts
- Explore edge cases

## Component Categories

### E-commerce Components
- **ProductTile**: Product display in listings
- **ProductView**: Detailed product pages
- **DisplayPrice**: Price formatting and display
- **Breadcrumb**: Navigation hierarchy

### Form Components
- **AddressDisplay**: Address formatting and display

### UI Components
- **LoadingSpinner**: Loading states and indicators

### Navigation Components
- **Breadcrumb**: Site navigation hierarchy

## Development Guidelines

### Adding New Stories
1. **Examine the Component**: Understand the component's props and functionality
2. **Create Mock Data**: Add mock data files if needed
3. **Write Stories**: Create stories for different use cases
4. **Add Documentation**: Include comprehensive component and story descriptions
5. **Test Interactions**: Add interactive stories where appropriate
6. **Update README**: Document new stories in this README

### Story Best Practices
- **Comprehensive Coverage**: Cover all major use cases and edge cases
- **Realistic Data**: Use realistic mock data that represents actual usage
- **Interactive Examples**: Include interactive stories for complex components
- **Documentation**: Provide clear descriptions for each story
- **Accessibility**: Consider accessibility in story examples
- **Responsive Design**: Test stories across different screen sizes

### Component Documentation Standards
- **Component Description**: Clear explanation of purpose and features
- **Usage Examples**: Code examples showing how to use the component
- **Props Documentation**: Detailed prop descriptions with types and defaults
- **Feature Lists**: Bullet points of key features
- **Story Descriptions**: Clear explanations of what each story demonstrates

## Testing Scenarios

### Standard Use Cases
- Default configurations
- Common user interactions
- Typical data structures

### Edge Cases
- Empty or missing data
- Long text content
- Special characters
- Extreme values

### Interactive Testing
- Form inputs and validation
- State changes
- User interactions
- Real-time updates

### Responsive Testing
- Different screen sizes
- Mobile vs desktop layouts
- Touch interactions
- Keyboard navigation

## Accessibility Considerations

All components should be tested for:
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: Sufficient contrast ratios
- **Focus Management**: Proper focus indicators and management
- **Alternative Text**: Descriptive alt text for images

## Performance Considerations

- **Lazy Loading**: Components should support lazy loading where appropriate
- **Image Optimization**: Proper image sizing and loading strategies
- **Bundle Size**: Components should be optimized for bundle size
- **Rendering Performance**: Efficient rendering and updates

## Future Enhancements

### Planned Components
- **Form Components**: Input fields, buttons, validation
- **Modal Components**: Dialogs, overlays, confirmations
- **Layout Components**: Grids, containers, spacing
- **Data Display**: Tables, lists, cards
- **Feedback Components**: Alerts, notifications, progress indicators

### Story Enhancements
- **Visual Regression Testing**: Automated visual testing
- **Accessibility Testing**: Automated accessibility checks
- **Performance Testing**: Performance benchmarks
- **Cross-browser Testing**: Browser compatibility testing 