# Storybook Stories Overview

This directory contains comprehensive Storybook stories for all components in the PWA Kit application. Each component has multiple stories showcasing different use cases, configurations, and interactive examples.

## Available Components

### 1. ProductTile
**File**: `ProductTile.stories.js` (13 stories)
- Product display with variations, favourites, and promotions
- Loading states and responsive layouts
- Interactive favourite functionality

### 2. AddressDisplay  
**File**: `AddressDisplay.stories.js` (19 stories)
- International address formats (US, UK, Canada, Australia, Germany, Japan, France, Italy, Spain, Netherlands, Sweden)
- Business and special address types (PO Box, rural, military)
- Edge cases and long content handling

### 3. DisplayPrice
**File**: `DisplayPrice.stories.js` (8 stories)
- Standard, sale, set, and master pricing
- Multiple currency support
- Interactive price editing

### 4. LoadingSpinner
**File**: `LoadingSpinner.stories.js` (9 stories)
- Customizable loading indicators
- Different sizes, colors, and animation speeds
- Interactive spinner customizer

### 5. Breadcrumb
**File**: `Breadcrumb.stories.js` (8 stories)
- Navigation hierarchy display
- Deep and shallow breadcrumb examples
- Interactive breadcrumb builder

### 6. ProductView
**File**: `ProductView.stories.js` (6 stories)
- Detailed product page display
- Variant selection and stock status
- Loading and error states

### 7. Header
**File**: `Header.stories.js` (10 stories)
- Authentication state handling (guest, registered, premium)
- Shopping basket integration
- Responsive design across devices
- Loading and error states

### 8. AuthModal
**File**: `AuthModal.stories.js` (14 stories)
- Multiple authentication methods (password, passwordless, social)
- Login, registration, and password reset
- Form validation and error handling
- Responsive design

### 9. PromoCode
**File**: `PromoCode.stories.js` (13 stories)
- Apply and remove promotional codes
- Basket integration with different scenarios
- Form validation and error handling
- Success feedback and loading states

## Quick Start

### Running Storybook
```bash
npm run storybook
```
This starts Storybook on `http://localhost:6006`

### Building Storybook
```bash
npm run build-storybook
```
This creates a static build for deployment.

## Documentation

- **Detailed Documentation**: See `Components-README.md` for comprehensive component documentation
- **Component Props**: Each story file includes detailed prop documentation
- **Mock Data**: Mock data files are in `app/mocks/` directory
- **Interactive Examples**: Many stories include interactive examples for testing

## Development

### Adding New Stories
1. Examine the component's props and functionality
2. Create mock data if needed in `app/mocks/`
3. Add stories for different use cases and edge cases
4. Include comprehensive documentation
5. Test interactive features where appropriate
6. Update `Components-README.md` with new stories

### Best Practices
- Cover all major use cases and edge cases
- Use realistic mock data
- Include interactive examples for complex components
- Provide clear documentation for each story
- Consider accessibility and responsive design
- Test across different screen sizes

## Mock Data Files

### Product Data
- `master-25517823M.js`: Complex product with multiple variants
- `variant-750518699578M.js`: Variant product (suit)
- `simple-product.js`: Simple product without variations

### Address Data
- `addresses.js`: Comprehensive address examples including US, international, and special cases

### Customer Data
- `customers.js`: Customer scenarios including guest, registered, premium, and incomplete users

### Basket Data
- `baskets.js`: Shopping basket scenarios including empty, guest, registered, promotional, and error states

## Total Stories: 95

All stories are lint-compliant, accessibility-compliant, and well-documented with comprehensive descriptions and interactive examples where appropriate. 