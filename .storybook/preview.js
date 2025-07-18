/** @type { import('@storybook/react-webpack5').Preview } */

import React from 'react';

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { CurrencyProvider } from '@salesforce/retail-react-app/app/contexts';
import { IntlProvider } from 'react-intl'; // Adjust the import path as necessary
import { AddToCartModalProvider } from '@salesforce/retail-react-app/app/hooks/use-add-to-cart-modal'; // Adjust the import path as necessary
import {CommerceApiProvider} from '@salesforce/commerce-sdk-react'
// import {MockConfig} from '@saleforce/retail-react-app/app/config/default.js'
import MockConfig from '../config/default.js'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const DEFAULT_LOCALE = 'en-US';

export const withProviders = (Story, context) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <CommerceApiProvider
                clientId={MockConfig.clientId}
                organizationId={MockConfig.organizationId}
                proxy={MockConfig.proxy}
                redirectURI={MockConfig.redirectURI}
                siteId={MockConfig.siteId}
                shortCode={MockConfig.shortCode}
                locale={MockConfig.locale}
                currency={MockConfig.currency}>
        <BrowserRouter>
          <IntlProvider locale={DEFAULT_LOCALE} defaultLocale={DEFAULT_LOCALE}>
            <CurrencyProvider>
              <AddToCartModalProvider>
                <Story {...context} />
              </AddToCartModalProvider>
            </CurrencyProvider>
          </IntlProvider>
        </BrowserRouter>
      </CommerceApiProvider>
    </QueryClientProvider>
  );
};

export const decorators = [withProviders];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;