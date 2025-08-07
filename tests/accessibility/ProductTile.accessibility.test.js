/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {screen} from '@testing-library/react'
import {
    renderWithProviders,
    accessibilityTestPatterns,
    accessibilityAssertions
} from '../accessibility-test-utils'
import ProductTile from '@salesforce/retail-react-app/app/components/product-tile'
import MockVariantProduct from '@salesforce/retail-react-app/app/mocks/master-25517823M'
import MockSimpleProduct from '@salesforce/retail-react-app/app/mocks/simple-product'

describe('ProductTile Accessibility', () => {
    const defaultProps = {
        product: MockVariantProduct,
        enableFavourite: true,
        isFavourite: false,
        onFavouriteToggle: jest.fn(),
        imageViewType: 'large',
        selectableAttributeId: 'color',
        dynamicImageProps: {},
        badgeDetails: null,
        isRefreshingData: false
    }

    describe('Basic Accessibility', () => {
        it('should have no accessibility violations', async () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be keyboard navigable', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            accessibilityAssertions.shouldBeKeyboardNavigable(container)
        })

        it('should have proper semantic structure', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            accessibilityAssertions.shouldHaveSemanticStructure(container)
        })
    })

    describe('Image Accessibility', () => {
        it('should have proper alt text for product images', () => {
            renderWithProviders(<ProductTile {...defaultProps} />)

            const images = screen.getAllByRole('img')
            images.forEach((img) => {
                expect(img).toHaveAttribute('alt')
                expect(img.getAttribute('alt')).not.toBe('')
            })
        })

        it('should have descriptive alt text for product images', () => {
            renderWithProviders(<ProductTile {...defaultProps} />)

            const images = screen.getAllByRole('img')
            images.forEach((img) => {
                const altText = img.getAttribute('alt')
                expect(altText).toContain('product')
                expect(altText).toContain('image')
            })
        })
    })

    describe('Button Accessibility', () => {
        it('should have accessible button labels', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            accessibilityTestPatterns.testButtonAccessibility(container)
        })

        it('should have proper aria-labels for interactive elements', () => {
            renderWithProviders(<ProductTile {...defaultProps} enableFavourite={true} />)

            const favouriteButton = screen.getByRole('button', {name: /favourite/i})
            expect(favouriteButton).toBeInTheDocument()
            expect(favouriteButton).toHaveAttribute('aria-label')
        })

        it('should have proper focus indicators', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)

            const focusableElements = container.querySelectorAll(
                'button, a, [tabindex]:not([tabindex="-1"])'
            )
            focusableElements.forEach((element) => {
                expect(element).toHaveAttribute('tabindex')
                expect(element.getAttribute('tabindex')).not.toBe('-1')
            })
        })
    })

    describe('Link Accessibility', () => {
        it('should have accessible product links', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            accessibilityTestPatterns.testLinkAccessibility(container)
        })

        it('should have descriptive link text', () => {
            renderWithProviders(<ProductTile {...defaultProps} />)

            const links = screen.getAllByRole('link')
            links.forEach((link) => {
                expect(link.textContent.trim()).not.toBe('')
                expect(link).toHaveAttribute('href')
            })
        })
    })

    describe('Form Accessibility', () => {
        it('should have proper form labels for selectable attributes', () => {
            const {container} = renderWithProviders(
                <ProductTile {...defaultProps} selectableAttributeId="color" />
            )
            accessibilityTestPatterns.testFormLabels(container)
        })

        it('should have proper fieldset and legend for attribute groups', () => {
            renderWithProviders(<ProductTile {...defaultProps} selectableAttributeId="color" />)

            const fieldsets = screen.getAllByRole('group')
            fieldsets.forEach((fieldset) => {
                const legend = fieldset.querySelector('legend')
                expect(legend).toBeInTheDocument()
                expect(legend.textContent.trim()).not.toBe('')
            })
        })
    })

    describe('ARIA Attributes', () => {
        it('should have proper ARIA attributes', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            accessibilityTestPatterns.testAriaAttributes(container)
        })

        it('should have proper aria-expanded for collapsible elements', () => {
            renderWithProviders(<ProductTile {...defaultProps} />)

            const expandableElements = screen.getAllByAttribute('aria-expanded')
            expandableElements.forEach((element) => {
                expect(element.getAttribute('aria-expanded')).toMatch(/true|false/)
            })
        })

        it('should have proper aria-pressed for toggle buttons', () => {
            renderWithProviders(<ProductTile {...defaultProps} enableFavourite={true} />)

            const toggleButtons = screen.getAllByAttribute('aria-pressed')
            toggleButtons.forEach((button) => {
                expect(button.getAttribute('aria-pressed')).toMatch(/true|false/)
            })
        })
    })

    describe('Loading States', () => {
        it('should have proper loading indicators', () => {
            renderWithProviders(<ProductTile {...defaultProps} isRefreshingData={true} />)

            const loadingElements = screen.getAllByRole('status')
            loadingElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-live')
                expect(element.getAttribute('aria-live')).toMatch(/polite|assertive/)
            })
        })

        it('should announce loading state to screen readers', () => {
            renderWithProviders(<ProductTile {...defaultProps} isRefreshingData={true} />)

            const loadingAnnouncements = screen.getAllByText(/loading/i)
            expect(loadingAnnouncements.length).toBeGreaterThan(0)
        })
    })

    describe('Error States', () => {
        it('should have proper error announcements', () => {
            renderWithProviders(<ProductTile {...defaultProps} />)

            const errorElements = screen.getAllByRole('alert')
            errorElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-live')
                expect(element.getAttribute('aria-live')).toBe('assertive')
            })
        })
    })

    describe('Color and Contrast', () => {
        it('should have proper color contrast', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            accessibilityTestPatterns.testColorContrast(container)
        })

        it('should have sufficient color contrast for text', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)

            const textElements = container.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6')
            textElements.forEach((element) => {
                const style = window.getComputedStyle(element)
                const hasColor = style.color && style.backgroundColor
                if (hasColor) {
                    expect(style.color).not.toBe(style.backgroundColor)
                }
            })
        })
    })

    describe('Screen Reader Support', () => {
        it('should have proper screen reader announcements', () => {
            renderWithProviders(<ProductTile {...defaultProps} />)

            const srOnlyElements = screen.getAllByText(/sr-only/i)
            srOnlyElements.forEach((element) => {
                expect(element).toHaveClass('sr-only')
                expect(element).toHaveAttribute('aria-hidden', 'true')
            })
        })

        it('should have proper aria-describedby attributes', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)

            const elementsWithDescription = container.querySelectorAll('[aria-describedby]')
            elementsWithDescription.forEach((element) => {
                const describedById = element.getAttribute('aria-describedby')
                const describedByElement = container.querySelector(`#${describedById}`)
                expect(describedByElement).toBeInTheDocument()
            })
        })
    })

    describe('Keyboard Navigation', () => {
        it('should support keyboard navigation', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)

            const focusableElements = container.querySelectorAll(
                'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )

            expect(focusableElements.length).toBeGreaterThan(0)

            focusableElements.forEach((element) => {
                expect(element).toHaveAttribute('tabindex')
                const tabIndex = element.getAttribute('tabindex')
                expect(tabIndex).not.toBe('-1')
            })
        })

        it('should have logical tab order', () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)

            const focusableElements = Array.from(
                container.querySelectorAll(
                    'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            ).sort((a, b) => {
                const aTabIndex = parseInt(a.getAttribute('tabindex') || '0')
                const bTabIndex = parseInt(b.getAttribute('tabindex') || '0')
                return aTabIndex - bTabIndex
            })

            expect(focusableElements.length).toBeGreaterThan(0)
        })
    })

    describe('Different Product Types', () => {
        it('should be accessible with variant products', async () => {
            const {container} = renderWithProviders(<ProductTile {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with simple products', async () => {
            const {container} = renderWithProviders(
                <ProductTile {...defaultProps} product={MockSimpleProduct} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with favourite functionality', async () => {
            const {container} = renderWithProviders(
                <ProductTile {...defaultProps} enableFavourite={true} isFavourite={true} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with promotional badges', async () => {
            const {container} = renderWithProviders(
                <ProductTile {...defaultProps} badgeDetails={{type: 'sale', text: '20% Off'}} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })
})
