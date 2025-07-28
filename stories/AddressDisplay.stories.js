import React from 'react';
import AddressDisplay from '../app/components/address-display';
import { usAddresses, internationalAddresses, specialAddresses } from '../app/mocks/addresses';

export default {
    title: 'Components/AddressDisplay',
    component: AddressDisplay,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# AddressDisplay Component

The AddressDisplay component renders a formatted address with proper line breaks and structure. 
It displays the recipient's name, street address, city/state/postal code, and country code.

## Features

- **Name Display**: Shows first and last name on the first line
- **Street Address**: Displays the primary address line
- **City/State/Postal**: Formats city, state, and postal code on one line
- **Country Code**: Shows the country code on the final line
- **Responsive Layout**: Adapts to different screen sizes
- **Clean Formatting**: Proper spacing and line breaks

## Usage

\`\`\`jsx
import AddressDisplay from '@salesforce/retail-react-app/app/components/address-display';

<AddressDisplay 
    address={{
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main Street',
        city: 'Anytown',
        stateCode: 'CA',
        postalCode: '12345',
        countryCode: 'US'
    }}
/>
\`\`\`

## Address Object Structure

The component expects an address object with the following properties:

- \`firstName\`: Recipient's first name
- \`lastName\`: Recipient's last name  
- \`address1\`: Primary street address
- \`city\`: City name
- \`stateCode\`: State/province code
- \`postalCode\`: Postal/ZIP code
- \`countryCode\`: Country code
                `
            }
        }
    },
    argTypes: {
        address: {
            description: 'Address object containing all address information',
            control: { type: 'object' }
        }
    }
};

const Template = (args) => <AddressDisplay {...args} />;

// Default story with standard US address
export const Default = Template.bind({});
Default.args = {
    address: {
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main Street',
        city: 'Anytown',
        stateCode: 'CA',
        postalCode: '12345',
        countryCode: 'US'
    }
};
Default.parameters = {
    docs: {
        description: {
            story: 'Default AddressDisplay with a standard US address format.'
        }
    }
};

// International address (UK)
export const InternationalAddress = Template.bind({});
InternationalAddress.args = {
    address: {
        firstName: 'Sarah',
        lastName: 'Wilson',
        address1: '42 High Street',
        city: 'London',
        stateCode: '',
        postalCode: 'SW1A 1AA',
        countryCode: 'GB'
    }
};
InternationalAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a UK address format - note the different postal code format and no state code.'
        }
    }
};

// Canadian address
export const CanadianAddress = Template.bind({});
CanadianAddress.args = {
    address: {
        firstName: 'Michael',
        lastName: 'Thompson',
        address1: '789 Maple Avenue',
        city: 'Toronto',
        stateCode: 'ON',
        postalCode: 'M5V 3A8',
        countryCode: 'CA'
    }
};
CanadianAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a Canadian address format - includes province code and Canadian postal code format.'
        }
    }
};

// Australian address
export const AustralianAddress = Template.bind({});
AustralianAddress.args = {
    address: {
        firstName: 'Emma',
        lastName: 'Davis',
        address1: '456 Kangaroo Road',
        city: 'Sydney',
        stateCode: 'NSW',
        postalCode: '2000',
        countryCode: 'AU'
    }
};
AustralianAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with an Australian address format - includes state code and 4-digit postal code.'
        }
    }
};

// German address
export const GermanAddress = Template.bind({});
GermanAddress.args = {
    address: {
        firstName: 'Hans',
        lastName: 'Mueller',
        address1: 'Bahnhofstraße 15',
        city: 'Berlin',
        stateCode: '',
        postalCode: '10115',
        countryCode: 'DE'
    }
};
GermanAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a German address format - includes street number in address and 5-digit postal code.'
        }
    }
};

// Japanese address
export const JapaneseAddress = Template.bind({});
JapaneseAddress.args = {
    address: {
        firstName: 'Yuki',
        lastName: 'Tanaka',
        address1: '1-2-3 Shibuya',
        city: 'Tokyo',
        stateCode: '',
        postalCode: '150-0002',
        countryCode: 'JP'
    }
};
JapaneseAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a Japanese address format - includes district information in address and 7-digit postal code.'
        }
    }
};

// Long name address
export const LongNameAddress = Template.bind({});
LongNameAddress.args = {
    address: {
        firstName: 'Alexander',
        lastName: 'Montgomery-Smythe',
        address1: '1234 Very Long Street Name That Might Wrap',
        city: 'San Francisco',
        stateCode: 'CA',
        postalCode: '94102',
        countryCode: 'US'
    }
};
LongNameAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a long name and address to test text wrapping and layout.'
        }
    }
};

// Minimal address (missing optional fields)
export const MinimalAddress = Template.bind({});
MinimalAddress.args = {
    address: {
        firstName: 'Jane',
        lastName: 'Smith',
        address1: '456 Oak Lane',
        city: 'Portland',
        stateCode: '',
        postalCode: '97201',
        countryCode: 'US'
    }
};
MinimalAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with minimal address information - missing state code to show how the component handles optional fields.'
        }
    }
};

// Business address
export const BusinessAddress = Template.bind({});
BusinessAddress.args = {
    address: usAddresses.business
};
BusinessAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a business address - company name as recipient and suite number in address.'
        }
    }
};

// Apartment address
export const ApartmentAddress = Template.bind({});
ApartmentAddress.args = {
    address: usAddresses.apartment
};
ApartmentAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with an apartment address - includes apartment number in the address line.'
        }
    }
};

// PO Box address
export const PoBoxAddress = Template.bind({});
PoBoxAddress.args = {
    address: specialAddresses.poBox
};
PoBoxAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a PO Box address - shows how the component handles PO Box format.'
        }
    }
};

// Rural address
export const RuralAddress = Template.bind({});
RuralAddress.args = {
    address: specialAddresses.rural
};
RuralAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a rural address - shows rural route format.'
        }
    }
};

// Military address
export const MilitaryAddress = Template.bind({});
MilitaryAddress.args = {
    address: specialAddresses.military
};
MilitaryAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a military address - shows APO format for military addresses.'
        }
    }
};

// French address
export const FrenchAddress = Template.bind({});
FrenchAddress.args = {
    address: internationalAddresses.france
};
FrenchAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a French address - shows European address format with street name first.'
        }
    }
};

// Italian address
export const ItalianAddress = Template.bind({});
ItalianAddress.args = {
    address: internationalAddresses.italy
};
ItalianAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with an Italian address - shows Mediterranean address format.'
        }
    }
};

// Spanish address
export const SpanishAddress = Template.bind({});
SpanishAddress.args = {
    address: internationalAddresses.spain
};
SpanishAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a Spanish address - shows Spanish address format with "Calle" prefix.'
        }
    }
};

// Dutch address
export const DutchAddress = Template.bind({});
DutchAddress.args = {
    address: internationalAddresses.netherlands
};
DutchAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a Dutch address - shows Netherlands address format with "van der" in name.'
        }
    }
};

// Swedish address
export const SwedishAddress = Template.bind({});
SwedishAddress.args = {
    address: internationalAddresses.sweden
};
SwedishAddress.parameters = {
    docs: {
        description: {
            story: 'AddressDisplay with a Swedish address - shows Nordic address format.'
        }
    }
};

// Multiple addresses showcase
export const MultipleAddresses = () => (
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px', 
        padding: '20px',
        backgroundColor: '#f5f5f5'
    }}>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>US Standard</h4>
            <AddressDisplay {...Default.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>UK Address</h4>
            <AddressDisplay {...InternationalAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>Canadian Address</h4>
            <AddressDisplay {...CanadianAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>German Address</h4>
            <AddressDisplay {...GermanAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>French Address</h4>
            <AddressDisplay {...FrenchAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>Japanese Address</h4>
            <AddressDisplay {...JapaneseAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>Business Address</h4>
            <AddressDisplay {...BusinessAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>PO Box Address</h4>
            <AddressDisplay {...PoBoxAddress.args} />
        </div>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
            <h4>Military Address</h4>
            <AddressDisplay {...MilitaryAddress.args} />
        </div>
    </div>
);
MultipleAddresses.parameters = {
    docs: {
        description: {
            story: 'Multiple AddressDisplay components in a grid layout showing different international address formats.'
        }
    }
};

// Interactive address editor
export const InteractiveAddress = () => {
    const [address, setAddress] = React.useState({
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main Street',
        city: 'Anytown',
        stateCode: 'CA',
        postalCode: '12345',
        countryCode: 'US'
    });

    const updateField = (field, value) => {
        setAddress(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h3>Address Display</h3>
                <div style={{ 
                    backgroundColor: 'white', 
                    padding: '15px', 
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                }}>
                    <AddressDisplay address={address} />
                </div>
            </div>
            
            <div style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '15px', 
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <h4>Edit Address</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    <div>
                        <label>First Name:</label>
                        <input 
                            value={address.firstName} 
                            onChange={(e) => updateField('firstName', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input 
                            value={address.lastName} 
                            onChange={(e) => updateField('lastName', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label>Address:</label>
                        <input 
                            value={address.address1} 
                            onChange={(e) => updateField('address1', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>City:</label>
                        <input 
                            value={address.city} 
                            onChange={(e) => updateField('city', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>State Code:</label>
                        <input 
                            value={address.stateCode} 
                            onChange={(e) => updateField('stateCode', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>Postal Code:</label>
                        <input 
                            value={address.postalCode} 
                            onChange={(e) => updateField('postalCode', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>Country Code:</label>
                        <input 
                            value={address.countryCode} 
                            onChange={(e) => updateField('countryCode', e.target.value)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
InteractiveAddress.parameters = {
    docs: {
        description: {
            story: 'Interactive AddressDisplay with editable fields. Modify the address information to see how the component updates in real-time.'
        }
    }
}; 