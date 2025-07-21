/** @type { import('@storybook/react-webpack5').Preview } */

import React from 'react'

import {BrowserRouter} from 'react-router-dom' // Import BrowserRouter
import {CurrencyProvider} from '@salesforce/retail-react-app/app/contexts'
import {IntlProvider} from 'react-intl' // Adjust the import path as necessary
import {AddToCartModalProvider} from '@salesforce/retail-react-app/app/hooks/use-add-to-cart-modal' // Adjust the import path as necessary
import {CommerceApiProvider} from '@salesforce/commerce-sdk-react'
// import {MockConfig} from '@saleforce/retail-react-app/app/config/default.js'
//import MockConfig from '../config/default.js'
import {withReactQuery} from '@salesforce/pwa-kit-react-sdk/ssr/universal/components/with-react-query'
import {QueryClient, QueryClientProvider, useQueryClient} from '@tanstack/react-query'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {ChakraProvider} from '@salesforce/retail-react-app/app/components/shared/ui'
import theme from '@salesforce/retail-react-app/app/theme'
import mockConfig from '../config/mocks/default'

export const DEFAULT_LOCALE = 'en-US'

export const withProviders = (Story, context) => {
    window.__CONFIG__ = mockConfig

    const config = getConfig()
    const appConfig = config.app
    const commerceApiConfig = appConfig.commerceAPI
    const queryClient = new QueryClient({})

    return (
        <QueryClientProvider client={queryClient}>
            <CommerceApiProvider
                shortCode={commerceApiConfig.parameters.shortCode}
                clientId={commerceApiConfig.parameters.clientId}
                organizationId={commerceApiConfig.parameters.organizationId}
                siteId={'RefArch'}
                locale={'en-US'}
                proxy={''}
                redirectURI={''}
                fetchedToken={''}
            >
                <BrowserRouter>
                    <IntlProvider locale={DEFAULT_LOCALE} defaultLocale={DEFAULT_LOCALE}>
                        <ChakraProvider theme={theme}>
                            <CurrencyProvider>
                                <AddToCartModalProvider>
                                    <Story {...context} />
                                </AddToCartModalProvider>
                            </CurrencyProvider>
                        </ChakraProvider>
                    </IntlProvider>
                </BrowserRouter>
            </CommerceApiProvider>
        </QueryClientProvider>
    )
}

export const decorators = [withProviders]

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview

