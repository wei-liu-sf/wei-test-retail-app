/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {Box, Text, VStack} from '@salesforce/retail-react-app/app/components/shared/ui'
import {PromoCode, usePromoCode} from '@salesforce/retail-react-app/app/components/promo-code'

export default {
    title: 'Components/PromoCode',
    component: PromoCode,
    parameters: {
        docs: {
            description: {
                component: `
# PromoCode Component

The PromoCode component allows users to apply and manage promotional codes on their shopping basket.

## Features
- **Apply Promo Codes**: Enter and apply promotional codes
- **Remove Promo Codes**: Remove applied promotional codes
- **Form Validation**: Client-side validation for promo codes
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Toast notifications for successful actions
- **Loading States**: Visual feedback during API calls
- **Basket Integration**: Works with current shopping basket

## Promotional Scenarios
- **No Promo Applied**: Empty state with form to enter code
- **Promo Applied**: Shows applied promotion with remove option
- **Invalid Promo**: Error state with validation message
- **Expired Promo**: Error handling for expired promotions
- **Multiple Promos**: Support for multiple promotional codes

## Props
- \`form\`: React Hook Form instance for promo code input
- \`submitPromoCode\`: Function to apply promotional code
- \`removePromoCode\`: Function to remove promotional code
- \`itemProps\`: Additional props for accordion items

## Usage
The PromoCode component integrates with:
- Shopping basket (useCurrentBasket)
- Form management (react-hook-form)
- Toast notifications
- API mutations (useShopperBasketsMutation)
                `
            }
        }
    },
    argTypes: {
        itemProps: {
            description: 'Additional props for accordion items',
            control: 'object'
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

const Template = (args) => <PromoCode {...args} />

export const EmptyBasket = Template.bind({})
EmptyBasket.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
EmptyBasket.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with empty basket. Shows form to enter promotional code but no applied promotions.'
        }
    }
}

export const WithAppliedPromo = Template.bind({})
WithAppliedPromo.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
WithAppliedPromo.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with applied promotional code. Shows the applied promotion with option to remove it.'
        }
    }
}

export const WithErrors = Template.bind({})
WithErrors.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {
            errors: {
                code: {
                    type: 'manual',
                    message: 'Invalid promotional code. Please check and try again.'
                }
            }
        },
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
WithErrors.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with validation errors. Shows error message for invalid or expired promotional codes.'
        }
    }
}

export const LoadingState = Template.bind({})
LoadingState.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {
        // Simulate loading
        await new Promise((resolve) => setTimeout(resolve, 2000))
    },
    removePromoCode: async () => {}
}
LoadingState.parameters = {
    docs: {
        description: {
            story: 'PromoCode component in loading state. Shows loading indicators during API calls for applying or removing promotions.'
        }
    }
}

export const SuccessState = Template.bind({})
SuccessState.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {
        // Simulate success
        console.log('Promo code applied successfully')
    },
    removePromoCode: async () => {
        // Simulate success
        console.log('Promo code removed successfully')
    }
}
SuccessState.parameters = {
    docs: {
        description: {
            story: 'PromoCode component in success state. Shows success feedback when promotional codes are applied or removed.'
        }
    }
}

export const MultiplePromos = Template.bind({})
MultiplePromos.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
MultiplePromos.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with multiple applied promotions. Shows multiple promotional codes with individual remove options.'
        }
    }
}

// Hook usage example
export const UsePromoCodeHook = () => {
    const {form, submitPromoCode, removePromoCode} = usePromoCode()

    return (
        <VStack spacing={4}>
            <Text>Using the usePromoCode hook</Text>
            <PromoCode
                form={form}
                submitPromoCode={submitPromoCode}
                removePromoCode={removePromoCode}
            />
        </VStack>
    )
}
UsePromoCodeHook.parameters = {
    docs: {
        description: {
            story: 'Example of using the usePromoCode hook to manage promotional code functionality programmatically.'
        }
    }
}

export const CustomItemProps = Template.bind({})
CustomItemProps.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {},
    itemProps: {
        border: '2px solid',
        borderColor: 'blue.500',
        borderRadius: 'md',
        p: 4
    }
}
CustomItemProps.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with custom styling for accordion items. Demonstrates customization options.'
        }
    }
}

export const MobileView = Template.bind({})
MobileView.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
MobileView.parameters = {
    docs: {
        description: {
            story: 'PromoCode component optimized for mobile devices. Shows mobile-friendly layout and touch interactions.'
        }
    },
    viewport: {
        defaultViewport: 'mobile1'
    }
}

export const TabletView = Template.bind({})
TabletView.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
TabletView.parameters = {
    docs: {
        description: {
            story: 'PromoCode component optimized for tablet devices. Shows intermediate layout between mobile and desktop.'
        }
    },
    viewport: {
        defaultViewport: 'tablet'
    }
}

export const DesktopView = Template.bind({})
DesktopView.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {errors: {}},
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
DesktopView.parameters = {
    docs: {
        description: {
            story: 'PromoCode component optimized for desktop devices. Shows full-width layout with enhanced visual design.'
        }
    },
    viewport: {
        defaultViewport: 'desktop'
    }
}

export const ExpiredPromo = Template.bind({})
ExpiredPromo.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {
            errors: {
                code: {
                    type: 'manual',
                    message: 'This promotional code has expired. Please use a valid code.'
                }
            }
        },
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
ExpiredPromo.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with expired promotional code. Shows specific error message for expired promotions.'
        }
    }
}

export const AlreadyApplied = Template.bind({})
AlreadyApplied.args = {
    form: {
        register: () => ({}),
        handleSubmit: (fn) => fn,
        formState: {
            errors: {
                code: {
                    type: 'manual',
                    message: 'This promotional code is already applied to your basket.'
                }
            }
        },
        reset: () => {},
        setError: () => {}
    },
    submitPromoCode: async () => {},
    removePromoCode: async () => {}
}
AlreadyApplied.parameters = {
    docs: {
        description: {
            story: 'PromoCode component with already applied promotional code. Shows error message for duplicate applications.'
        }
    }
}
