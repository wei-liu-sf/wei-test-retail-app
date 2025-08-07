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
import AddressDisplay from '@salesforce/retail-react-app/app/components/address-display'
import {
    usAddresses,
    internationalAddresses,
    specialAddresses
} from '@salesforce/retail-react-app/app/mocks/addresses'

describe('AddressDisplay Accessibility', () => {
    const defaultProps = {
        address: usAddresses.standard,
        showName: true,
        showPhone: true,
        showEmail: false
    }

    describe('Basic Accessibility', () => {
        it('should have no accessibility violations', async () => {
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be keyboard navigable', () => {
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)
            accessibilityAssertions.shouldBeKeyboardNavigable(container)
        })

        it('should have proper semantic structure', () => {
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)
            accessibilityAssertions.shouldHaveSemanticStructure(container)
        })
    })

    describe('Address Information', () => {
        it('should have proper address structure', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} />)

            const addressElement = screen.getByRole('group', {name: /address/i})
            expect(addressElement).toBeInTheDocument()
        })

        it('should have proper name display', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} showName={true} />)

            const nameElement = screen.getByText(/John Doe/i)
            expect(nameElement).toBeInTheDocument()
        })

        it('should have proper phone display', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} showPhone={true} />)

            const phoneElement = screen.getByText(/\+1-555-123-4567/i)
            expect(phoneElement).toBeInTheDocument()
        })

        it('should have proper address lines', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} />)

            const addressLine = screen.getByText(/123 Main Street/i)
            expect(addressLine).toBeInTheDocument()
        })
    })

    describe('International Addresses', () => {
        it('should be accessible with UK addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={internationalAddresses.uk} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with Canadian addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={internationalAddresses.canada} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with Australian addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={internationalAddresses.australia} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with German addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={internationalAddresses.germany} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })

    describe('Special Address Types', () => {
        it('should be accessible with PO Box addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={specialAddresses.poBox} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with rural addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={specialAddresses.rural} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with military addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={specialAddresses.military} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })

    describe('ARIA Attributes', () => {
        it('should have proper ARIA attributes', () => {
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)
            accessibilityTestPatterns.testAriaAttributes(container)
        })

        it('should have proper aria-label for address elements', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} />)

            const addressElements = screen.getAllByLabelText(/address/i)
            addressElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-label')
            })
        })

        it('should have proper role attributes', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} />)

            const addressGroup = screen.getByRole('group', {name: /address/i})
            expect(addressGroup).toBeInTheDocument()
        })
    })

    describe('Screen Reader Support', () => {
        it('should have proper screen reader announcements', () => {
            renderWithProviders(<AddressDisplay {...defaultProps} />)

            const srOnlyElements = screen.getAllByText(/sr-only/i)
            srOnlyElements.forEach((element) => {
                expect(element).toHaveClass('sr-only')
                expect(element).toHaveAttribute('aria-hidden', 'true')
            })
        })

        it('should have proper aria-describedby attributes', () => {
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)

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
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)
            accessibilityTestPatterns.testColorContrast(container)
        })

        it('should have sufficient color contrast for text', () => {
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)

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
            const {container} = renderWithProviders(<AddressDisplay {...defaultProps} />)

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
    })

    describe('Different Display Options', () => {
        it('should be accessible with name hidden', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} showName={false} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with phone hidden', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} showPhone={false} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with email shown', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} showEmail={true} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })

    describe('Long Content Handling', () => {
        it('should be accessible with long names', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={usAddresses.longName} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible with long addresses', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={usAddresses.business} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })

    describe('Empty States', () => {
        it('should handle missing address data gracefully', async () => {
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={null} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should handle partial address data', async () => {
            const partialAddress = {
                firstName: 'John',
                lastName: 'Doe'
                // Missing address lines
            }
            const {container} = renderWithProviders(
                <AddressDisplay {...defaultProps} address={partialAddress} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })
})
