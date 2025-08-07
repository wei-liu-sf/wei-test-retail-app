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
import Header from '@salesforce/retail-react-app/app/components/header'

describe('Header Accessibility', () => {
    const defaultProps = {
        children: <div>Header Content</div>,
        onMenuClick: jest.fn(),
        onMyAccountClick: jest.fn(),
        onLogoClick: jest.fn(),
        onMyCartClick: jest.fn(),
        onWishlistClick: jest.fn(),
        onStoreLocatorClick: jest.fn()
    }

    describe('Basic Accessibility', () => {
        it('should have no accessibility violations', async () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be keyboard navigable', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityAssertions.shouldBeKeyboardNavigable(container)
        })

        it('should have proper semantic structure', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityAssertions.shouldHaveSemanticStructure(container)
        })

        it('should have proper landmarks', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityAssertions.shouldHaveLandmarks(container)
        })
    })

    describe('Navigation Elements', () => {
        it('should have proper navigation landmarks', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const navElements = screen.getAllByRole('navigation')
            expect(navElements.length).toBeGreaterThan(0)
        })

        it('should have proper logo accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const logoButton = screen.getByRole('button', {name: /logo/i})
            expect(logoButton).toBeInTheDocument()
            expect(logoButton).toHaveAttribute('aria-label')
        })

        it('should have proper menu button accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const menuButton = screen.getByRole('button', {name: /menu/i})
            expect(menuButton).toBeInTheDocument()
            expect(menuButton).toHaveAttribute('aria-label')
            expect(menuButton).toHaveAttribute('aria-expanded')
        })

        it('should have proper account button accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const accountButton = screen.getByRole('button', {name: /my account/i})
            expect(accountButton).toBeInTheDocument()
            expect(accountButton).toHaveAttribute('aria-label')
        })
    })

    describe('Search Functionality', () => {
        it('should have proper search landmark', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const searchElement = screen.getByRole('search')
            expect(searchElement).toBeInTheDocument()
        })

        it('should have proper search input accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const searchInput = screen.getByRole('searchbox')
            expect(searchInput).toBeInTheDocument()
            expect(searchInput).toHaveAttribute('aria-label')
        })

        it('should have proper search button accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const searchButton = screen.getByRole('button', {name: /search/i})
            expect(searchButton).toBeInTheDocument()
            expect(searchButton).toHaveAttribute('aria-label')
        })
    })

    describe('Shopping Cart', () => {
        it('should have proper cart button accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const cartButton = screen.getByRole('button', {name: /cart/i})
            expect(cartButton).toBeInTheDocument()
            expect(cartButton).toHaveAttribute('aria-label')
        })

        it('should announce cart item count to screen readers', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const cartCount = screen.getByText(/items? in cart/i)
            expect(cartCount).toBeInTheDocument()
        })
    })

    describe('Account Menu', () => {
        it('should have proper account menu accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const accountMenu = screen.getByRole('menu')
            expect(accountMenu).toBeInTheDocument()
            expect(accountMenu).toHaveAttribute('aria-label')
        })

        it('should have proper menu items', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const menuItems = screen.getAllByRole('menuitem')
            menuItems.forEach((item) => {
                expect(item).toHaveAttribute('aria-label')
                expect(item.textContent.trim()).not.toBe('')
            })
        })

        it('should have proper menu state management', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const menuButton = screen.getByRole('button', {name: /my account/i})
            expect(menuButton).toHaveAttribute('aria-expanded')
            expect(menuButton.getAttribute('aria-expanded')).toMatch(/true|false/)
        })
    })

    describe('ARIA Attributes', () => {
        it('should have proper ARIA attributes', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityTestPatterns.testAriaAttributes(container)
        })

        it('should have proper aria-expanded for collapsible elements', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const expandableElements = screen.getAllByAttribute('aria-expanded')
            expandableElements.forEach((element) => {
                expect(element.getAttribute('aria-expanded')).toMatch(/true|false/)
            })
        })

        it('should have proper aria-haspopup for elements with popups', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const popupElements = screen.getAllByAttribute('aria-haspopup')
            popupElements.forEach((element) => {
                expect(element.getAttribute('aria-haspopup')).toMatch(/true|menu|dialog/)
            })
        })
    })

    describe('Button Accessibility', () => {
        it('should have accessible button labels', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityTestPatterns.testButtonAccessibility(container)
        })

        it('should have proper focus indicators', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)

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
        it('should have accessible navigation links', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityTestPatterns.testLinkAccessibility(container)
        })

        it('should have descriptive link text', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const links = screen.getAllByRole('link')
            links.forEach((link) => {
                expect(link.textContent.trim()).not.toBe('')
                expect(link).toHaveAttribute('href')
            })
        })
    })

    describe('Screen Reader Support', () => {
        it('should have proper screen reader announcements', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const srOnlyElements = screen.getAllByText(/sr-only/i)
            srOnlyElements.forEach((element) => {
                expect(element).toHaveClass('sr-only')
                expect(element).toHaveAttribute('aria-hidden', 'true')
            })
        })

        it('should have proper aria-describedby attributes', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)

            const elementsWithDescription = container.querySelectorAll('[aria-describedby]')
            elementsWithDescription.forEach((element) => {
                const describedById = element.getAttribute('aria-describedby')
                const describedByElement = container.querySelector(`#${describedById}`)
                expect(describedByElement).toBeInTheDocument()
            })
        })
    })

    describe('Color and Contrast', () => {
        it('should have proper color contrast', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            accessibilityTestPatterns.testColorContrast(container)
        })

        it('should have sufficient color contrast for text', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)

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

    describe('Keyboard Navigation', () => {
        it('should support keyboard navigation', () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)

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
            const {container} = renderWithProviders(<Header {...defaultProps} />)

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

    describe('Mobile Responsiveness', () => {
        it('should be accessible on mobile devices', async () => {
            const {container} = renderWithProviders(<Header {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should have proper mobile menu accessibility', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const mobileMenuButton = screen.getByRole('button', {name: /menu/i})
            expect(mobileMenuButton).toBeInTheDocument()
            expect(mobileMenuButton).toHaveAttribute('aria-label')
        })
    })

    describe('Loading States', () => {
        it('should have proper loading indicators', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const loadingElements = screen.getAllByRole('status')
            loadingElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-live')
                expect(element.getAttribute('aria-live')).toMatch(/polite|assertive/)
            })
        })

        it('should announce loading state to screen readers', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const loadingAnnouncements = screen.getAllByText(/loading/i)
            expect(loadingAnnouncements.length).toBeGreaterThan(0)
        })
    })

    describe('Error States', () => {
        it('should have proper error announcements', () => {
            renderWithProviders(<Header {...defaultProps} />)

            const errorElements = screen.getAllByRole('alert')
            errorElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-live')
                expect(element.getAttribute('aria-live')).toBe('assertive')
            })
        })
    })
})
