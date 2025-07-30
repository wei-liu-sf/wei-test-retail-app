# Accessibility Testing Documentation

## Overview

This directory contains comprehensive accessibility tests for all components in the PWA Kit application. The tests ensure that all components meet WCAG 2.1 AA standards and provide an excellent user experience for users with disabilities.

## 🎯 Testing Goals

- **WCAG 2.1 AA Compliance**: Ensure all components meet accessibility standards
- **Screen Reader Support**: Verify proper ARIA attributes and semantic structure
- **Keyboard Navigation**: Test full keyboard accessibility
- **Color Contrast**: Validate sufficient color contrast ratios
- **Form Accessibility**: Ensure proper labels and validation
- **Mobile Accessibility**: Test responsive design accessibility

## 📁 File Structure

```
tests/accessibility/
├── accessibility-test-utils.js          # Common testing utilities
├── run-accessibility-tests.js          # Test runner script
├── README.md                           # This documentation
├── reports/                            # Generated test reports
└── [Component].accessibility.test.js   # Component-specific tests
```

## 🧪 Available Tests

### Component Tests
- **ProductTile.accessibility.test.js**: Product display accessibility
- **AddressDisplay.accessibility.test.js**: Address formatting accessibility
- **DisplayPrice.accessibility.test.js**: Price display accessibility
- **LoadingSpinner.accessibility.test.js**: Loading state accessibility
- **Breadcrumb.accessibility.test.js**: Navigation accessibility
- **Header.accessibility.test.js**: Header navigation accessibility
- **AuthModal.accessibility.test.js**: Authentication modal accessibility
- **PromoCode.accessibility.test.js**: Promotional code accessibility

### Test Categories

Each component test includes:

#### 1. Basic Accessibility
- No accessibility violations (axe-core)
- Keyboard navigability
- Semantic structure
- Proper landmarks

#### 2. Form Accessibility
- Proper form labels
- Fieldset and legend structure
- Input types and autocomplete
- Validation messages

#### 3. Button Accessibility
- Accessible button labels
- Proper ARIA attributes
- Focus indicators
- Toggle button states

#### 4. Image Accessibility
- Alt text for images
- Decorative image handling
- Descriptive alt text

#### 5. Link Accessibility
- Accessible link text
- Proper href attributes
- Descriptive link content

#### 6. ARIA Attributes
- Proper ARIA usage
- Valid attribute values
- State management
- Live regions

#### 7. Screen Reader Support
- Screen reader announcements
- ARIA describedby attributes
- Hidden content handling

#### 8. Color and Contrast
- Color contrast validation
- Text readability
- Sufficient contrast ratios

#### 9. Keyboard Navigation
- Logical tab order
- Focus management
- Escape key handling

#### 10. Loading and Error States
- Loading indicators
- Error announcements
- Status updates

## 🚀 Running Tests

### Run All Accessibility Tests
```bash
npm run test:accessibility
```

### Run Component-Specific Tests
```bash
npm run test:accessibility:component
```

### Run Axe-Core Tests Only
```bash
npm run test:accessibility:axe
```

### Generate and View Report
```bash
npm run test:accessibility:report
```

## 📊 Test Reports

Reports are generated in `tests/accessibility/reports/` and include:

- **Summary Statistics**: Total tests, pass/fail rates
- **Component Status**: Individual component test results
- **Recommendations**: Actionable improvement suggestions
- **Detailed Output**: Full test output for debugging

## 🛠️ Test Utilities

### `accessibility-test-utils.js`

Provides common testing utilities:

#### `renderWithProviders(ui, options)`
Renders components with all necessary providers (Chakra UI, React Router, etc.)

#### `accessibilityTestPatterns`
Common test patterns for:
- Heading structure validation
- Form label checking
- Button accessibility
- Link accessibility
- Image accessibility
- Focus management
- ARIA attribute validation
- Color contrast checking

#### `accessibilityAssertions`
Common assertions for:
- No accessibility violations
- Keyboard navigability
- Semantic structure
- Landmark presence

## 📋 Test Coverage

### WCAG 2.1 AA Criteria Covered

#### Perceivable
- ✅ **1.1.1 Non-text Content**: Alt text for images
- ✅ **1.3.1 Info and Relationships**: Semantic structure
- ✅ **1.3.2 Meaningful Sequence**: Logical content order
- ✅ **1.4.1 Use of Color**: Color not the only indicator
- ✅ **1.4.3 Contrast (Minimum)**: Sufficient color contrast

#### Operable
- ✅ **2.1.1 Keyboard**: Full keyboard accessibility
- ✅ **2.1.2 No Keyboard Trap**: Focus management
- ✅ **2.4.1 Bypass Blocks**: Skip navigation
- ✅ **2.4.2 Page Titled**: Descriptive page titles
- ✅ **2.4.3 Focus Order**: Logical tab order
- ✅ **2.4.4 Link Purpose**: Clear link purpose

#### Understandable
- ✅ **3.1.1 Language of Page**: Language declaration
- ✅ **3.2.1 On Focus**: Predictable focus behavior
- ✅ **3.2.2 On Input**: Predictable input behavior
- ✅ **3.3.1 Error Identification**: Clear error messages
- ✅ **3.3.2 Labels or Instructions**: Form labels

#### Robust
- ✅ **4.1.1 Parsing**: Valid HTML
- ✅ **4.1.2 Name, Role, Value**: ARIA attributes

## 🔧 Configuration

### Axe-Core Configuration
```javascript
configureAxe({
    rules: {
        'color-contrast': {enabled: true},
        'landmark-one-main': {enabled: true},
        'page-has-heading-one': {enabled: true},
        'region': {enabled: true}
    }
})
```

### Test Environment
- **Jest**: Test framework
- **React Testing Library**: Component testing
- **jest-axe**: Accessibility testing
- **@axe-core/react**: Automated accessibility checks

## 📝 Adding New Tests

### 1. Create Test File
```javascript
// tests/accessibility/NewComponent.accessibility.test.js
import React from 'react'
import {render, screen} from '@testing-library/react'
import {renderWithProviders, accessibilityTestPatterns, accessibilityAssertions} from '../accessibility-test-utils'
import NewComponent from '@salesforce/retail-react-app/app/components/new-component'

describe('NewComponent Accessibility', () => {
    const defaultProps = {
        // Component props
    }

    describe('Basic Accessibility', () => {
        it('should have no accessibility violations', async () => {
            const {container} = renderWithProviders(<NewComponent {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })
})
```

### 2. Update Test Runner
Add the component to the `COMPONENTS` array in `run-accessibility-tests.js`:

```javascript
const COMPONENTS = [
    // ... existing components
    'NewComponent'
]
```

### 3. Run Tests
```bash
npm run test:accessibility:component
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Test Failures
- Check component implementation for missing ARIA attributes
- Verify proper semantic HTML structure
- Ensure keyboard navigation works
- Validate color contrast ratios

#### 2. False Positives
- Review axe-core configuration
- Check for dynamic content that loads after initial render
- Verify test environment setup

#### 3. Performance Issues
- Run tests in parallel when possible
- Use focused test patterns for specific components
- Optimize test data and mock objects

### Debug Commands

```bash
# Run specific component test
npm test -- ProductTile.accessibility.test.js

# Run with verbose output
npm test -- --verbose

# Run with coverage
npm test -- --coverage
```

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Axe-Core Documentation](https://github.com/dequelabs/axe-core)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest-Axe Documentation](https://github.com/nickcolley/jest-axe)

## 🤝 Contributing

When adding new components or modifying existing ones:

1. **Write accessibility tests first** (TDD approach)
2. **Ensure all tests pass** before merging
3. **Update documentation** for new test patterns
4. **Review accessibility reports** regularly

## 📈 Continuous Improvement

- **Regular Audits**: Monthly accessibility reviews
- **User Testing**: Include users with disabilities
- **Automated Monitoring**: CI/CD integration
- **Performance Tracking**: Monitor accessibility metrics

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintainer**: Development Team 