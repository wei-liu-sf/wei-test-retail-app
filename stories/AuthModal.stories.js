/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useState} from 'react'
import {Box, Button, Text, VStack} from '@salesforce/retail-react-app/app/components/shared/ui'
import {AuthModal, useAuthModal} from '@salesforce/retail-react-app/app/hooks/use-auth-modal'

export default {
    title: 'Components/AuthModal',
    component: AuthModal,
    parameters: {
        docs: {
            description: {
                component: `
# AuthModal Component

The AuthModal component handles user authentication including login, registration, password reset, and passwordless authentication.

## Features
- **Login Form**: Email/password authentication
- **Registration Form**: New user account creation
- **Password Reset**: Forgot password functionality
- **Passwordless Login**: Email-based authentication
- **Social Login**: Integration with identity providers
- **Form Validation**: Client-side validation
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during authentication

## Authentication Types
- **Password-based**: Traditional email/password login
- **Passwordless**: Email-based authentication without password
- **Social**: OAuth integration with providers
- **Registration**: New account creation

## Props
- \`initialView\`: Starting view (login, register, password, email)
- \`initialEmail\`: Pre-filled email address
- \`onLoginSuccess\`: Callback when login succeeds
- \`onRegistrationSuccess\`: Callback when registration succeeds
- \`isOpen\`: Controls modal visibility
- \`onOpen\`: Callback when modal opens
- \`onClose\`: Callback when modal closes
- \`isPasswordlessEnabled\`: Enable passwordless authentication
- \`isSocialEnabled\`: Enable social login
- \`idps\`: Array of identity providers

## Usage
The AuthModal integrates with:
- Authentication system (useAuthHelper)
- Customer management (useCurrentCustomer)
- Navigation system
- Toast notifications
                `
            }
        }
    },
    argTypes: {
        initialView: {
            description: 'Starting view for the modal',
            control: {
                type: 'select',
                options: ['login', 'register', 'password', 'email']
            },
            defaultValue: 'login'
        },
        initialEmail: {
            description: 'Pre-filled email address',
            control: 'text'
        },
        isPasswordlessEnabled: {
            description: 'Enable passwordless authentication',
            control: 'boolean',
            defaultValue: false
        },
        isSocialEnabled: {
            description: 'Enable social login',
            control: 'boolean',
            defaultValue: false
        },
        idps: {
            description: 'Array of identity providers',
            control: 'object'
        },
        onLoginSuccess: {
            description: 'Callback when login succeeds',
            action: 'login success'
        },
        onRegistrationSuccess: {
            description: 'Callback when registration succeeds',
            action: 'registration success'
        },
        onOpen: {
            description: 'Callback when modal opens',
            action: 'modal opened'
        },
        onClose: {
            description: 'Callback when modal closes',
            action: 'modal closed'
        }
    },
    decorators: [
        (Story) => (
            <Box layerStyle="page" p={4}>
                <Story />
            </Box>
        )
    ]
}

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <VStack spacing={4}>
            <Text>Click the button below to open the AuthModal</Text>
            <Button onClick={() => setIsOpen(true)}>Open Auth Modal</Button>
            <AuthModal
                {...args}
                isOpen={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
            />
        </VStack>
    )
}

export const LoginView = Template.bind({})
LoginView.args = {
    initialView: 'login',
    initialEmail: 'user@example.com'
}
LoginView.parameters = {
    docs: {
        description: {
            story: 'AuthModal showing the login form. Users can enter email and password to authenticate.'
        }
    }
}

export const RegistrationView = Template.bind({})
RegistrationView.args = {
    initialView: 'register',
    initialEmail: 'newuser@example.com'
}
RegistrationView.parameters = {
    docs: {
        description: {
            story: 'AuthModal showing the registration form. New users can create an account with email, password, and personal information.'
        }
    }
}

export const PasswordResetView = Template.bind({})
PasswordResetView.args = {
    initialView: 'password',
    initialEmail: 'user@example.com'
}
PasswordResetView.parameters = {
    docs: {
        description: {
            story: 'AuthModal showing the password reset form. Users can request a password reset link via email.'
        }
    }
}

export const PasswordlessLogin = Template.bind({})
PasswordlessLogin.args = {
    initialView: 'email',
    initialEmail: 'user@example.com',
    isPasswordlessEnabled: true
}
PasswordlessLogin.parameters = {
    docs: {
        description: {
            story: 'AuthModal showing passwordless login. Users can authenticate using only their email address.'
        }
    }
}

export const SocialLoginEnabled = Template.bind({})
SocialLoginEnabled.args = {
    initialView: 'login',
    isSocialEnabled: true,
    idps: [
        {id: 'google', name: 'Google'},
        {id: 'facebook', name: 'Facebook'},
        {id: 'apple', name: 'Apple'}
    ]
}
SocialLoginEnabled.parameters = {
    docs: {
        description: {
            story: 'AuthModal with social login enabled. Shows options for Google, Facebook, and Apple authentication.'
        }
    }
}

export const WithCustomCallbacks = Template.bind({})
WithCustomCallbacks.args = {
    initialView: 'login',
    onLoginSuccess: () => console.log('Login successful'),
    onRegistrationSuccess: () => console.log('Registration successful'),
    onOpen: () => console.log('Modal opened'),
    onClose: () => console.log('Modal closed')
}
WithCustomCallbacks.parameters = {
    docs: {
        description: {
            story: 'AuthModal with custom callback functions. Demonstrates how to handle authentication events.'
        }
    }
}

export const PrefilledEmail = Template.bind({})
PrefilledEmail.args = {
    initialView: 'login',
    initialEmail: 'john.doe@example.com'
}
PrefilledEmail.parameters = {
    docs: {
        description: {
            story: 'AuthModal with pre-filled email address. Useful when redirecting from other parts of the application.'
        }
    }
}

export const LoadingState = Template.bind({})
LoadingState.args = {
    initialView: 'login'
}
LoadingState.parameters = {
    docs: {
        description: {
            story: 'AuthModal in loading state during authentication. Shows loading indicators and disables form inputs.'
        }
    }
}

export const ErrorState = Template.bind({})
ErrorState.args = {
    initialView: 'login'
}
ErrorState.parameters = {
    docs: {
        description: {
            story: 'AuthModal in error state. Shows error messages for invalid credentials, network issues, or other authentication errors.'
        }
    }
}

// Hook usage example
export const UseAuthModalHook = () => {
    const authModal = useAuthModal('login')

    return (
        <VStack spacing={4}>
            <Text>Using the useAuthModal hook</Text>
            <Button onClick={authModal.onOpen}>Open Login Modal</Button>
            <Text>Current view: {authModal.currentView}</Text>
            <Text>Is open: {authModal.isOpen ? 'Yes' : 'No'}</Text>
            <AuthModal {...authModal} isPasswordlessEnabled={true} isSocialEnabled={true} />
        </VStack>
    )
}
UseAuthModalHook.parameters = {
    docs: {
        description: {
            story: 'Example of using the useAuthModal hook to manage authentication modal state programmatically.'
        }
    }
}

export const AllFeaturesEnabled = Template.bind({})
AllFeaturesEnabled.args = {
    initialView: 'login',
    isPasswordlessEnabled: true,
    isSocialEnabled: true,
    idps: [
        {id: 'google', name: 'Google'},
        {id: 'facebook', name: 'Facebook'},
        {id: 'apple', name: 'Apple'},
        {id: 'microsoft', name: 'Microsoft'}
    ]
}
AllFeaturesEnabled.parameters = {
    docs: {
        description: {
            story: 'AuthModal with all authentication features enabled: password login, passwordless login, and social login with multiple providers.'
        }
    }
}

export const MobileView = Template.bind({})
MobileView.args = {
    initialView: 'login'
}
MobileView.parameters = {
    docs: {
        description: {
            story: 'AuthModal optimized for mobile devices. Shows mobile-friendly layout and touch interactions.'
        }
    },
    viewport: {
        defaultViewport: 'mobile1'
    }
}

export const TabletView = Template.bind({})
TabletView.args = {
    initialView: 'login'
}
TabletView.parameters = {
    docs: {
        description: {
            story: 'AuthModal optimized for tablet devices. Shows intermediate layout between mobile and desktop.'
        }
    },
    viewport: {
        defaultViewport: 'tablet'
    }
}

export const DesktopView = Template.bind({})
DesktopView.args = {
    initialView: 'login'
}
DesktopView.parameters = {
    docs: {
        description: {
            story: 'AuthModal optimized for desktop devices. Shows full-width layout with enhanced visual design.'
        }
    },
    viewport: {
        defaultViewport: 'desktop'
    }
}
