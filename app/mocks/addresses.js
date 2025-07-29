/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// US Addresses
export const usAddresses = {
    standard: {
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main Street',
        city: 'Anytown',
        stateCode: 'CA',
        postalCode: '12345',
        countryCode: 'US'
    },
    business: {
        firstName: 'Acme',
        lastName: 'Corporation',
        address1: '1000 Business Plaza Suite 200',
        city: 'New York',
        stateCode: 'NY',
        postalCode: '10001',
        countryCode: 'US'
    },
    apartment: {
        firstName: 'Jane',
        lastName: 'Smith',
        address1: '456 Oak Lane Apt 3B',
        city: 'Portland',
        stateCode: 'OR',
        postalCode: '97201',
        countryCode: 'US'
    },
    longName: {
        firstName: 'Alexander',
        lastName: 'Montgomery-Smythe',
        address1: '1234 Very Long Street Name That Might Wrap',
        city: 'San Francisco',
        stateCode: 'CA',
        postalCode: '94102',
        countryCode: 'US'
    }
}

// International Addresses
export const internationalAddresses = {
    uk: {
        firstName: 'Sarah',
        lastName: 'Wilson',
        address1: '42 High Street',
        city: 'London',
        stateCode: '',
        postalCode: 'SW1A 1AA',
        countryCode: 'GB'
    },
    canada: {
        firstName: 'Michael',
        lastName: 'Thompson',
        address1: '789 Maple Avenue',
        city: 'Toronto',
        stateCode: 'ON',
        postalCode: 'M5V 3A8',
        countryCode: 'CA'
    },
    australia: {
        firstName: 'Emma',
        lastName: 'Davis',
        address1: '456 Kangaroo Road',
        city: 'Sydney',
        stateCode: 'NSW',
        postalCode: '2000',
        countryCode: 'AU'
    },
    germany: {
        firstName: 'Hans',
        lastName: 'Mueller',
        address1: 'Bahnhofstraße 15',
        city: 'Berlin',
        stateCode: '',
        postalCode: '10115',
        countryCode: 'DE'
    },
    japan: {
        firstName: 'Yuki',
        lastName: 'Tanaka',
        address1: '1-2-3 Shibuya',
        city: 'Tokyo',
        stateCode: '',
        postalCode: '150-0002',
        countryCode: 'JP'
    },
    france: {
        firstName: 'Marie',
        lastName: 'Dubois',
        address1: '15 Rue de la Paix',
        city: 'Paris',
        stateCode: '',
        postalCode: '75001',
        countryCode: 'FR'
    },
    italy: {
        firstName: 'Marco',
        lastName: 'Rossi',
        address1: 'Via Roma 123',
        city: 'Rome',
        stateCode: '',
        postalCode: '00100',
        countryCode: 'IT'
    },
    spain: {
        firstName: 'Carmen',
        lastName: 'Garcia',
        address1: 'Calle Mayor 45',
        city: 'Madrid',
        stateCode: '',
        postalCode: '28013',
        countryCode: 'ES'
    },
    netherlands: {
        firstName: 'Jan',
        lastName: 'van der Berg',
        address1: 'Prinsengracht 263',
        city: 'Amsterdam',
        stateCode: '',
        postalCode: '1016 GV',
        countryCode: 'NL'
    },
    sweden: {
        firstName: 'Erik',
        lastName: 'Andersson',
        address1: 'Drottninggatan 12',
        city: 'Stockholm',
        stateCode: '',
        postalCode: '111 51',
        countryCode: 'SE'
    }
}

// Special Cases
export const specialAddresses = {
    minimal: {
        firstName: 'Jane',
        lastName: 'Smith',
        address1: '456 Oak Lane',
        city: 'Portland',
        stateCode: '',
        postalCode: '97201',
        countryCode: 'US'
    },
    poBox: {
        firstName: 'Robert',
        lastName: 'Johnson',
        address1: 'P.O. Box 12345',
        city: 'Anytown',
        stateCode: 'CA',
        postalCode: '12345',
        countryCode: 'US'
    },
    rural: {
        firstName: 'William',
        lastName: 'Brown',
        address1: 'RR 2 Box 456',
        city: 'Farmville',
        stateCode: 'TX',
        postalCode: '78901',
        countryCode: 'US'
    },
    military: {
        firstName: 'David',
        lastName: 'Miller',
        address1: 'Unit 1234 Box 5678',
        city: 'APO',
        stateCode: 'AE',
        postalCode: '09012',
        countryCode: 'US'
    }
}

// All addresses combined
export const allAddresses = {
    ...usAddresses,
    ...internationalAddresses,
    ...specialAddresses
}

export default allAddresses
