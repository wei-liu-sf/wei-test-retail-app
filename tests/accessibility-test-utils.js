/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* global expect, axe */

import React from 'react'
import PropTypes from 'prop-types'
import {configureAxe, toHaveNoViolations} from 'jest-axe'
import {render} from '@testing-library/react'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

// Configure axe for accessibility testing
configureAxe({
    rules: {
        // Disable some rules that might be too strict for development
        'color-contrast': {enabled: true},
        'landmark-one-main': {enabled: true},
        'page-has-heading-one': {enabled: true},
        region: {enabled: true}
    }
})

// Extend jest matchers
expect.extend(toHaveNoViolations)

// Create a test query client
const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            },
            mutations: {
                retry: false
            }
        }
    })

// Custom render function with providers
export const renderWithProviders = (ui, options = {}) => {
    const {
        locale = 'en-US',
        messages = {},
        queryClient = createTestQueryClient(),
        ...renderOptions
    } = options

    const AllTheProviders = ({children}) => {
        return (
            <QueryClientProvider client={queryClient}>
                <IntlProvider locale={locale} messages={messages}>
                    <ChakraProvider>
                        <BrowserRouter>{children}</BrowserRouter>
                    </ChakraProvider>
                </IntlProvider>
            </QueryClientProvider>
        )
    }

    AllTheProviders.propTypes = {
        children: PropTypes.node.isRequired
    }

    return render(ui, {wrapper: AllTheProviders, ...renderOptions})
}

// Common accessibility test patterns
export const accessibilityTestPatterns = {
    // Test for proper heading structure
    testHeadingStructure: async (container) => {
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
        expect(headings.length).toBeGreaterThan(0)

        // Check for proper heading hierarchy
        const headingLevels = Array.from(headings).map((h) => parseInt(h.tagName.charAt(1)))
        for (let i = 1; i < headingLevels.length; i++) {
            expect(headingLevels[i] - headingLevels[i - 1]).toBeLessThanOrEqual(1)
        }
    },

    // Test for proper form labels
    testFormLabels: (container) => {
        const inputs = container.querySelectorAll('input, select, textarea')
        inputs.forEach((input) => {
            if (input.type !== 'hidden' && input.type !== 'submit' && input.type !== 'button') {
                const label =
                    input.labels?.[0] || container.querySelector(`label[for="${input.id}"]`)
                expect(label).toBeTruthy()
            }
        })
    },

    // Test for proper button accessibility
    testButtonAccessibility: (container) => {
        const buttons = container.querySelectorAll('button')
        buttons.forEach((button) => {
            // Buttons should have accessible text
            const hasText = button.textContent.trim() || button.getAttribute('aria-label')
            expect(hasText).toBeTruthy()
        })
    },

    // Test for proper link accessibility
    testLinkAccessibility: (container) => {
        const links = container.querySelectorAll('a[href]')
        links.forEach((link) => {
            // Links should have accessible text
            const hasText = link.textContent.trim() || link.getAttribute('aria-label')
            expect(hasText).toBeTruthy()

            // Links should not be empty
            expect(link.textContent.trim()).not.toBe('')
        })
    },

    // Test for proper image accessibility
    testImageAccessibility: (container) => {
        const images = container.querySelectorAll('img')
        images.forEach((img) => {
            // Images should have alt text or be decorative
            const hasAlt = img.alt !== undefined || img.getAttribute('aria-label')
            const isDecorative =
                img.getAttribute('role') === 'presentation' ||
                img.getAttribute('aria-hidden') === 'true'
            expect(hasAlt || isDecorative).toBeTruthy()
        })
    },

    // Test for proper focus management
    testFocusManagement: (container) => {
        const focusableElements = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        focusableElements.forEach((element) => {
            // Focusable elements should not have tabindex="-1" unless they're meant to be skipped
            const tabIndex = element.getAttribute('tabindex')
            if (tabIndex !== null) {
                expect(tabIndex).not.toBe('-1')
            }
        })
    },

    // Test for proper ARIA attributes
    testAriaAttributes: (container) => {
        const elementsWithAria = container.querySelectorAll('[aria-*]')
        elementsWithAria.forEach((element) => {
            // ARIA attributes should have valid values
            const ariaAttributes = Array.from(element.attributes).filter((attr) =>
                attr.name.startsWith('aria-')
            )
            ariaAttributes.forEach((attr) => {
                expect(attr.value).toBeTruthy()
                expect(attr.value).not.toBe('')
            })
        })
    },

    // Test for proper color contrast (basic check)
    testColorContrast: (container) => {
        // This is a basic check - axe-core will do more thorough testing
        const elements = container.querySelectorAll('*')
        elements.forEach((element) => {
            const style = window.getComputedStyle(element)
            const backgroundColor = style.backgroundColor
            const color = style.color

            // If both colors are set, they should be different
            if (backgroundColor && color && backgroundColor !== 'transparent') {
                expect(backgroundColor).not.toBe(color)
            }
        })
    }
}

// Common accessibility assertions
export const accessibilityAssertions = {
    // Test that component has no accessibility violations
    shouldHaveNoAccessibilityViolations: async (container) => {
        const results = await axe(container)
        expect(results).toHaveNoViolations()
    },

    // Test that component is keyboard navigable
    shouldBeKeyboardNavigable: (container) => {
        const focusableElements = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        expect(focusableElements.length).toBeGreaterThan(0)
    },

    // Test that component has proper semantic structure
    shouldHaveSemanticStructure: (container) => {
        const semanticElements = container.querySelectorAll(
            'main, nav, section, article, aside, header, footer'
        )
        expect(semanticElements.length).toBeGreaterThan(0)
    },

    // Test that component has proper landmarks
    shouldHaveLandmarks: (container) => {
        const landmarks = container.querySelectorAll(
            'main, nav, banner, contentinfo, complementary, search'
        )
        expect(landmarks.length).toBeGreaterThan(0)
    }
}

// Export axe for direct use
export {axe} from 'jest-axe'
