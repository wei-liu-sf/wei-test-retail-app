/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// Guest customer (not authenticated)
export const guestCustomer = {
    customerId: null,
    isRegistered: false,
    isGuest: true,
    customerType: 'guest',
    data: null
}

// Registered customer (authenticated buyer)
export const registeredCustomer = {
    customerId: 'customer_123456',
    isRegistered: true,
    isGuest: false,
    customerType: 'registered',
    data: {
        _type: 'customer',
        _v: '21.3',
        _resource_state: 'customer_resource_state_123',
        customer_id: 'customer_123456',
        customer_no: 'C123456',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone_mobile: '+1-555-123-4567',
        phone_home: '+1-555-987-6543',
        birthday: '1990-01-15',
        gender: 1,
        customer_since: '2020-03-15T10:30:00.000Z',
        last_visit: '2023-12-01T14:22:00.000Z',
        addresses: [
            {
                _type: 'address',
                address_id: 'addr_123',
                address1: '123 Main Street',
                address2: 'Apt 4B',
                city: 'New York',
                country_code: 'US',
                first_name: 'John',
                last_name: 'Doe',
                phone: '+1-555-123-4567',
                postal_code: '10001',
                state_code: 'NY',
                preferred: true
            },
            {
                _type: 'address',
                address_id: 'addr_456',
                address1: '456 Business Ave',
                address2: 'Suite 200',
                city: 'Los Angeles',
                country_code: 'US',
                first_name: 'John',
                last_name: 'Doe',
                phone: '+1-555-987-6543',
                postal_code: '90210',
                state_code: 'CA',
                preferred: false
            }
        ],
        payment_instruments: [
            {
                _type: 'customer_payment_instrument',
                payment_instrument_id: 'pi_123',
                payment_method_id: 'CREDIT_CARD',
                credit_card_number: '************1234',
                credit_card_type: 'Visa',
                credit_card_expiration_month: 12,
                credit_card_expiration_year: 2025,
                holder: 'John Doe'
            }
        ],
        groups: [
            {
                _type: 'customer_group',
                id: 'Registered',
                link: 'https://example.com/customer_groups/Registered'
            }
        ]
    }
}

// Premium customer with loyalty points
export const premiumCustomer = {
    customerId: 'customer_premium_789',
    isRegistered: true,
    isGuest: false,
    customerType: 'registered',
    data: {
        _type: 'customer',
        _v: '21.3',
        _resource_state: 'premium_customer_resource_state',
        customer_id: 'customer_premium_789',
        customer_no: 'P789',
        email: 'premium.user@example.com',
        first_name: 'Sarah',
        last_name: 'Johnson',
        phone_mobile: '+1-555-999-8888',
        customer_since: '2018-06-10T09:15:00.000Z',
        last_visit: '2023-12-01T16:45:00.000Z',
        addresses: [
            {
                _type: 'address',
                address_id: 'addr_premium_1',
                address1: '789 Luxury Lane',
                city: 'Beverly Hills',
                country_code: 'US',
                first_name: 'Sarah',
                last_name: 'Johnson',
                phone: '+1-555-999-8888',
                postal_code: '90210',
                state_code: 'CA',
                preferred: true
            }
        ],
        payment_instruments: [
            {
                _type: 'customer_payment_instrument',
                payment_instrument_id: 'pi_premium_1',
                payment_method_id: 'CREDIT_CARD',
                credit_card_number: '************5678',
                credit_card_type: 'Amex',
                credit_card_expiration_month: 8,
                credit_card_expiration_year: 2026,
                holder: 'Sarah Johnson'
            }
        ],
        groups: [
            {
                _type: 'customer_group',
                id: 'Premium',
                link: 'https://example.com/customer_groups/Premium'
            }
        ],
        custom_attributes: {
            loyalty_points: 2500,
            membership_tier: 'gold',
            total_orders: 45,
            lifetime_value: 12500.0
        }
    }
}

// Customer with multiple addresses
export const customerWithMultipleAddresses = {
    customerId: 'customer_multi_456',
    isRegistered: true,
    isGuest: false,
    customerType: 'registered',
    data: {
        _type: 'customer',
        _v: '21.3',
        _resource_state: 'multi_address_customer_resource_state',
        customer_id: 'customer_multi_456',
        customer_no: 'M456',
        email: 'multi.address@example.com',
        first_name: 'Michael',
        last_name: 'Chen',
        phone_mobile: '+1-555-777-6666',
        customer_since: '2021-09-20T11:00:00.000Z',
        last_visit: '2023-12-01T13:30:00.000Z',
        addresses: [
            {
                _type: 'address',
                address_id: 'addr_home',
                address1: '123 Home Street',
                city: 'San Francisco',
                country_code: 'US',
                first_name: 'Michael',
                last_name: 'Chen',
                phone: '+1-555-777-6666',
                postal_code: '94102',
                state_code: 'CA',
                preferred: true
            },
            {
                _type: 'address',
                address_id: 'addr_work',
                address1: '456 Business Plaza',
                address2: 'Floor 15',
                city: 'San Francisco',
                country_code: 'US',
                first_name: 'Michael',
                last_name: 'Chen',
                phone: '+1-555-777-6666',
                postal_code: '94105',
                state_code: 'CA',
                preferred: false
            },
            {
                _type: 'address',
                address_id: 'addr_vacation',
                address1: '789 Beach Road',
                city: 'Miami',
                country_code: 'US',
                first_name: 'Michael',
                last_name: 'Chen',
                phone: '+1-555-777-6666',
                postal_code: '33139',
                state_code: 'FL',
                preferred: false
            }
        ],
        payment_instruments: [
            {
                _type: 'customer_payment_instrument',
                payment_instrument_id: 'pi_multi_1',
                payment_method_id: 'CREDIT_CARD',
                credit_card_number: '************9999',
                credit_card_type: 'Mastercard',
                credit_card_expiration_month: 3,
                credit_card_expiration_year: 2027,
                holder: 'Michael Chen'
            }
        ],
        groups: [
            {
                _type: 'customer_group',
                id: 'Registered',
                link: 'https://example.com/customer_groups/Registered'
            }
        ]
    }
}

// New customer (recently registered)
export const newCustomer = {
    customerId: 'customer_new_101',
    isRegistered: true,
    isGuest: false,
    customerType: 'registered',
    data: {
        _type: 'customer',
        _v: '21.3',
        _resource_state: 'new_customer_resource_state',
        customer_id: 'customer_new_101',
        customer_no: 'N101',
        email: 'new.user@example.com',
        first_name: 'Emma',
        last_name: 'Wilson',
        phone_mobile: '+1-555-111-2222',
        customer_since: '2023-11-15T14:20:00.000Z',
        last_visit: '2023-12-01T10:15:00.000Z',
        addresses: [
            {
                _type: 'address',
                address_id: 'addr_new_1',
                address1: '321 New User Street',
                city: 'Austin',
                country_code: 'US',
                first_name: 'Emma',
                last_name: 'Wilson',
                phone: '+1-555-111-2222',
                postal_code: '73301',
                state_code: 'TX',
                preferred: true
            }
        ],
        payment_instruments: [],
        groups: [
            {
                _type: 'customer_group',
                id: 'Registered',
                link: 'https://example.com/customer_groups/Registered'
            }
        ]
    }
}

// Customer with incomplete profile
export const incompleteCustomer = {
    customerId: 'customer_incomplete_202',
    isRegistered: true,
    isGuest: false,
    customerType: 'registered',
    data: {
        _type: 'customer',
        _v: '21.3',
        _resource_state: 'incomplete_customer_resource_state',
        customer_id: 'customer_incomplete_202',
        customer_no: 'I202',
        email: 'incomplete@example.com',
        first_name: 'Alex',
        last_name: 'Taylor',
        phone_mobile: null,
        customer_since: '2023-10-05T16:45:00.000Z',
        last_visit: '2023-12-01T09:30:00.000Z',
        addresses: [],
        payment_instruments: [],
        groups: [
            {
                _type: 'customer_group',
                id: 'Registered',
                link: 'https://example.com/customer_groups/Registered'
            }
        ]
    }
}

// Export all customer scenarios
export const customerScenarios = {
    guest: guestCustomer,
    registered: registeredCustomer,
    premium: premiumCustomer,
    multiAddress: customerWithMultipleAddresses,
    new: newCustomer,
    incomplete: incompleteCustomer
}

export default customerScenarios
