/** @type { import('@storybook/react-webpack5').Preview } */

import React, {useRef, useEffect} from 'react'

import {BrowserRouter} from 'react-router-dom' // Import BrowserRouter
import {CurrencyProvider, MultiSiteProvider} from '@salesforce/retail-react-app/app/contexts'
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
import {ServerContext} from '@salesforce/pwa-kit-react-sdk/ssr/universal/contexts'
import fallbackMessages from '@salesforce/retail-react-app/app/static/translations/compiled/en-US.json'

import {createUrlTemplate} from '@salesforce/retail-react-app/app/utils/url'
import {getSiteByReference} from '@salesforce/retail-react-app/app/utils/site-utils'

export const DEFAULT_LOCALE = 'en-US'

// Create a stable QueryClient instance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
})

export const withProviders = (Story, context) => {
    window.__CONFIG__ = mockConfig

    const config = getConfig()
    const appConfig = config.app
    const commerceApiConfig = appConfig.commerceAPI
    const locale = DEFAULT_LOCALE

    const mounted = useRef()
    // We use this to track mounted state.
    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
        }
    }, [])

    const site = getSiteByReference(appConfig.defaultSite)
    const messages = fallbackMessages

    const buildUrl = createUrlTemplate(
        appConfig,
        site?.alias || site?.id,
        locale.alias || locale.id
    )

    return (
        <QueryClientProvider client={queryClient}>
            <ServerContext.Provider value={{}}>
                <IntlProvider locale={locale.id} defaultLocale={DEFAULT_LOCALE} messages={messages}>
                    <MultiSiteProvider site={site} locale={locale} buildUrl={buildUrl}>
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
                                <ChakraProvider theme={theme}>
                                    <CurrencyProvider>
                                        <AddToCartModalProvider>
                                            <Story {...context} />
                                        </AddToCartModalProvider>
                                    </CurrencyProvider>
                                </ChakraProvider>
                            </BrowserRouter>
                        </CommerceApiProvider>
                    </MultiSiteProvider>
                </IntlProvider>
            </ServerContext.Provider>
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

