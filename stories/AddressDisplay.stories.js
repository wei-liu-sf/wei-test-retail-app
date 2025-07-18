import React from 'react';
import AddressDisplay from '../app/components/address-display';

export default {
    title: 'Components/AddressDisplay',
    component: AddressDisplay,
};

const Template = (args) => <AddressDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
    address: {
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main St',
        city: 'Anytown',
        stateCode: 'CA',
        postalCode: '12345',
        countryCode: 'US',
    },
}; 