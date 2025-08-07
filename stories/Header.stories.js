/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {Box, Text, VStack} from '@salesforce/retail-react-app/app/components/shared/ui'
import Header from '@salesforce/retail-react-app/app/components/header'

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        docs: {
            description: {
                component: `
# Header Component

The Header component is the main navigation component that appears at the top of every page. It includes:

## Features
- **Logo**: Clickable logo that navigates to home page
- **Search Bar**: Global search functionality
- **Account Menu**: User account management (login/logout, profile, orders)
- **Cart Icon**: Shopping cart with item count
- **Mobile Menu**: Hamburger menu for mobile devices
- **Responsive Design**: Adapts to different screen sizes

## Authentication States
- **Guest User**: Shows login/signup options
- **Registered User**: Shows account menu with profile, orders, addresses
- **Premium User**: Enhanced features and loyalty benefits

## Basket Integration
- **Empty Basket**: Shows cart icon with 0 items
- **Items in Basket**: Shows cart icon with item count
- **Large Basket**: Handles multiple items and promotions

## Props
- \`children\`: Content to display in the header body
- \`onMenuClick\`: Callback for mobile menu button
- \`onMyAccountClick\`: Callback for account button
- \`onLogoClick\`: Callback for logo click
- \`onMyCartClick\`: Callback for cart button
- \`onWishlistClick\`: Callback for wishlist button
- \`onStoreLocatorClick\`: Callback for store locator button

## Usage
The Header component automatically integrates with:
- Authentication system (useCurrentCustomer, useAuthModal)
- Shopping basket (useCurrentBasket)
- Navigation system
- Search functionality
                `
            }
        }
    },
    argTypes: {
        children: {
            description: 'Content to display in the header body',
            control: 'text'
        },
        onMenuClick: {
            description: 'Callback for mobile menu button',
            action: 'menu clicked'
        },
        onMyAccountClick: {
            description: 'Callback for account button',
            action: 'account clicked'
        },
        onLogoClick: {
            description: 'Callback for logo click',
            action: 'logo clicked'
        },
        onMyCartClick: {
            description: 'Callback for cart button',
            action: 'cart clicked'
        },
        onWishlistClick: {
            description: 'Callback for wishlist button',
            action: 'wishlist clicked'
        },
        onStoreLocatorClick: {
            description: 'Callback for store locator button',
            action: 'store locator clicked'
        }
    },
    decorators: [
        (Story) => (
            <Box layerStyle="page">
                <Story />
            </Box>
        )
    ]
}

const Template = (args) => <Header {...args} />

export const GuestUser = Template.bind({})
GuestUser.args = {
    children: <Text>Guest User Header</Text>
}
GuestUser.parameters = {
    docs: {
        description: {
            story: 'Header displayed for guest users (not authenticated). Shows login/signup options and guest basket.'
        }
    }
}

export const RegisteredUser = Template.bind({})
RegisteredUser.args = {
    children: <Text>Registered User Header</Text>
}
RegisteredUser.parameters = {
    docs: {
        description: {
            story: 'Header displayed for registered users. Shows account menu with profile, orders, addresses, and user basket.'
        }
    }
}

export const PremiumUser = Template.bind({})
PremiumUser.args = {
    children: <Text>Premium User Header</Text>
}
PremiumUser.parameters = {
    docs: {
        description: {
            story: 'Header displayed for premium users with enhanced features. Shows loyalty benefits and premium basket.'
        }
    }
}

export const EmptyBasket = Template.bind({})
EmptyBasket.args = {
    children: <Text>Empty Basket Header</Text>
}
EmptyBasket.parameters = {
    docs: {
        description: {
            story: 'Header with empty shopping basket. Shows cart icon with 0 items and appropriate messaging.'
        }
    }
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
    children: (
        <VStack spacing={4} align="center">
            <Text fontSize="lg" fontWeight="bold">
                Custom Header Content
            </Text>
            <Text>This shows how the header can contain custom content</Text>
        </VStack>
    )
}
WithCustomContent.parameters = {
    docs: {
        description: {
            story: 'Header with custom content in the body area. Demonstrates the flexibility of the header component.'
        }
    }
}

export const MobileView = Template.bind({})
MobileView.args = {
    children: <Text>Mobile Header View</Text>
}
MobileView.parameters = {
    docs: {
        description: {
            story: 'Header optimized for mobile devices. Shows hamburger menu and mobile-optimized layout.'
        }
    },
    viewport: {
        defaultViewport: 'mobile1'
    }
}

export const TabletView = Template.bind({})
TabletView.args = {
    children: <Text>Tablet Header View</Text>
}
TabletView.parameters = {
    docs: {
        description: {
            story: 'Header optimized for tablet devices. Shows intermediate layout between mobile and desktop.'
        }
    },
    viewport: {
        defaultViewport: 'tablet'
    }
}

export const DesktopView = Template.bind({})
DesktopView.args = {
    children: <Text>Desktop Header View</Text>
}
DesktopView.parameters = {
    docs: {
        description: {
            story: 'Header optimized for desktop devices. Shows full-width layout with enhanced visual design.'
        }
    },
    viewport: {
        defaultViewport: 'desktop'
    }
}

export const LoadingState = Template.bind({})
LoadingState.args = {
    children: <Text>Loading Header</Text>
}
LoadingState.parameters = {
    docs: {
        description: {
            story: 'Header in loading state while customer and basket data are being fetched.'
        }
    }
}

export const ErrorState = Template.bind({})
ErrorState.args = {
    children: <Text>Error Header</Text>
}
ErrorState.parameters = {
    docs: {
        description: {
            story: 'Header in error state when customer or basket data fails to load.'
        }
    }
}
