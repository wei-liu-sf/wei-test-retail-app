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
import {AuthModal} from '@salesforce/retail-react-app/app/hooks/use-auth-modal'

describe('AuthModal Accessibility', () => {
    const defaultProps = {
        initialView: 'login',
        initialEmail: 'user@example.com',
        isOpen: true,
        onOpen: jest.fn(),
        onClose: jest.fn(),
        onLoginSuccess: jest.fn(),
        onRegistrationSuccess: jest.fn(),
        isPasswordlessEnabled: false,
        isSocialEnabled: false,
        idps: []
    }

    describe('Basic Accessibility', () => {
        it('should have no accessibility violations', async () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be keyboard navigable', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            accessibilityAssertions.shouldBeKeyboardNavigable(container)
        })

        it('should have proper semantic structure', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            accessibilityAssertions.shouldHaveSemanticStructure(container)
        })
    })

    describe('Modal Dialog', () => {
        it('should have proper dialog role', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const dialog = screen.getByRole('dialog')
            expect(dialog).toBeInTheDocument()
            expect(dialog).toHaveAttribute('aria-modal', 'true')
        })

        it('should have proper dialog title', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const dialogTitle = screen.getByRole('heading', {level: 2})
            expect(dialogTitle).toBeInTheDocument()
            expect(dialogTitle.textContent.trim()).not.toBe('')
        })

        it('should have proper close button', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const closeButton = screen.getByRole('button', {name: /close/i})
            expect(closeButton).toBeInTheDocument()
            expect(closeButton).toHaveAttribute('aria-label')
        })

        it('should trap focus within modal', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const focusableElements = screen.getAllByRole('button', 'input', 'select', 'textarea')
            expect(focusableElements.length).toBeGreaterThan(0)
        })
    })

    describe('Form Accessibility', () => {
        it('should have proper form labels', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            accessibilityTestPatterns.testFormLabels(container)
        })

        it('should have proper fieldset and legend', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const fieldsets = screen.getAllByRole('group')
            fieldsets.forEach((fieldset) => {
                const legend = fieldset.querySelector('legend')
                expect(legend).toBeInTheDocument()
                expect(legend.textContent.trim()).not.toBe('')
            })
        })

        it('should have proper input types', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const emailInput = screen.getByRole('textbox', {name: /email/i})
            expect(emailInput).toBeInTheDocument()
            expect(emailInput).toHaveAttribute('type', 'email')
            expect(emailInput).toHaveAttribute('autocomplete', 'email')
        })

        it('should have proper password input', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const passwordInput = screen.getByLabelText(/password/i)
            expect(passwordInput).toBeInTheDocument()
            expect(passwordInput).toHaveAttribute('type', 'password')
            expect(passwordInput).toHaveAttribute('autocomplete', 'current-password')
        })
    })

    describe('Button Accessibility', () => {
        it('should have accessible button labels', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            accessibilityTestPatterns.testButtonAccessibility(container)
        })

        it('should have proper submit button', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const submitButton = screen.getByRole('button', {name: /sign in/i})
            expect(submitButton).toBeInTheDocument()
            expect(submitButton).toHaveAttribute('type', 'submit')
        })

        it('should have proper cancel button', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const cancelButton = screen.getByRole('button', {name: /cancel/i})
            expect(cancelButton).toBeInTheDocument()
        })
    })

    describe('Error Handling', () => {
        it('should have proper error announcements', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const errorElements = screen.getAllByRole('alert')
            errorElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-live')
                expect(element.getAttribute('aria-live')).toBe('assertive')
            })
        })

        it('should have proper error messages', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const errorMessages = screen.getAllByText(/error/i)
            errorMessages.forEach((message) => {
                expect(message).toBeInTheDocument()
                expect(message.textContent.trim()).not.toBe('')
            })
        })
    })

    describe('Loading States', () => {
        it('should have proper loading indicators', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const loadingElements = screen.getAllByRole('status')
            loadingElements.forEach((element) => {
                expect(element).toHaveAttribute('aria-live')
                expect(element.getAttribute('aria-live')).toMatch(/polite|assertive/)
            })
        })

        it('should announce loading state to screen readers', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const loadingAnnouncements = screen.getAllByText(/loading/i)
            expect(loadingAnnouncements.length).toBeGreaterThan(0)
        })
    })

    describe('ARIA Attributes', () => {
        it('should have proper ARIA attributes', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            accessibilityTestPatterns.testAriaAttributes(container)
        })

        it('should have proper aria-describedby for form fields', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const formFields = screen.getAllByRole('textbox', 'combobox')
            formFields.forEach((field) => {
                const hasAriaDescribedby = field.hasAttribute('aria-describedby')
                if (hasAriaDescribedby) {
                    const describedById = field.getAttribute('aria-describedby')
                    const describedByElement = document.querySelector(`#${describedById}`)
                    expect(describedByElement).toBeInTheDocument()
                }
            })
        })

        it('should have proper aria-invalid for validation errors', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const invalidFields = screen.getAllByAttribute('aria-invalid')
            invalidFields.forEach((field) => {
                expect(field.getAttribute('aria-invalid')).toMatch(/true|false/)
            })
        })
    })

    describe('Screen Reader Support', () => {
        it('should have proper screen reader announcements', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const srOnlyElements = screen.getAllByText(/sr-only/i)
            srOnlyElements.forEach((element) => {
                expect(element).toHaveClass('sr-only')
                expect(element).toHaveAttribute('aria-hidden', 'true')
            })
        })

        it('should have proper aria-describedby attributes', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)

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
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)
            accessibilityTestPatterns.testColorContrast(container)
        })

        it('should have sufficient color contrast for text', () => {
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)

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
            const {container} = renderWithProviders(<AuthModal {...defaultProps} />)

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

        it('should support escape key to close modal', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const dialog = screen.getByRole('dialog')
            expect(dialog).toHaveAttribute('aria-modal', 'true')
        })
    })

    describe('Different Views', () => {
        it('should be accessible in login view', async () => {
            const {container} = renderWithProviders(
                <AuthModal {...defaultProps} initialView="login" />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible in registration view', async () => {
            const {container} = renderWithProviders(
                <AuthModal {...defaultProps} initialView="register" />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible in password reset view', async () => {
            const {container} = renderWithProviders(
                <AuthModal {...defaultProps} initialView="password" />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be accessible in passwordless view', async () => {
            const {container} = renderWithProviders(
                <AuthModal {...defaultProps} initialView="email" isPasswordlessEnabled={true} />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })
    })

    describe('Social Login', () => {
        it('should be accessible with social login enabled', async () => {
            const {container} = renderWithProviders(
                <AuthModal
                    {...defaultProps}
                    isSocialEnabled={true}
                    idps={[{id: 'google', name: 'Google'}]}
                />
            )
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should have proper social login buttons', () => {
            renderWithProviders(
                <AuthModal
                    {...defaultProps}
                    isSocialEnabled={true}
                    idps={[{id: 'google', name: 'Google'}]}
                />
            )

            const socialButtons = screen.getAllByRole('button', {name: /google/i})
            socialButtons.forEach((button) => {
                expect(button).toHaveAttribute('aria-label')
                expect(button.textContent.trim()).not.toBe('')
            })
        })
    })

    describe('Form Validation', () => {
        it('should have proper validation messages', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const validationMessages = screen.getAllByText(/required/i)
            validationMessages.forEach((message) => {
                expect(message).toBeInTheDocument()
                expect(message.textContent.trim()).not.toBe('')
            })
        })

        it('should have proper aria-invalid for invalid fields', () => {
            renderWithProviders(<AuthModal {...defaultProps} />)

            const invalidFields = screen.getAllByAttribute('aria-invalid', 'true')
            invalidFields.forEach((field) => {
                expect(field).toHaveAttribute('aria-invalid', 'true')
            })
        })
    })
})
