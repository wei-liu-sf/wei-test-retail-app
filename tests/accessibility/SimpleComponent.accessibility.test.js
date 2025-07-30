/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {renderWithProviders, accessibilityAssertions} from '../accessibility-test-utils'

// Simple test component
const SimpleComponent = () => (
    <div role="main">
        <h1>Test Heading</h1>
        <p>Test content</p>
        <button aria-label="Test button">Click me</button>
    </div>
)

describe('SimpleComponent Accessibility', () => {
    describe('Basic Accessibility', () => {
        it('should have no accessibility violations', async () => {
            const {container} = renderWithProviders(<SimpleComponent />)
            await accessibilityAssertions.shouldHaveNoAccessibilityViolations(container)
        })

        it('should be keyboard navigable', () => {
            const {container} = renderWithProviders(<SimpleComponent />)
            accessibilityAssertions.shouldBeKeyboardNavigable(container)
        })

        it('should have proper semantic structure', () => {
            const {container} = renderWithProviders(<SimpleComponent />)
            accessibilityAssertions.shouldHaveSemanticStructure(container)
        })
    })
})
