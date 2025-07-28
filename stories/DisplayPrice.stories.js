import React from 'react';
import DisplayPrice from '../app/components/display-price';

export default {
    title: 'Components/DisplayPrice',
    component: DisplayPrice,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# DisplayPrice Component

The DisplayPrice component renders product pricing information with support for various pricing scenarios including sales, sets, masters, and ranges.

## Features

- **Current Price Display**: Shows the current selling price
- **List Price Display**: Shows original price when on sale
- **Set Pricing**: Displays "From X" for product sets
- **Master/Variant Pricing**: Shows price ranges for master products
- **Sale Pricing**: Shows crossed-out list price with current price
- **Quantity Support**: Calculates price based on quantity
- **Accessibility**: Includes proper labels for screen readers
- **Currency Formatting**: Proper currency display

## Usage

\`\`\`jsx
import DisplayPrice from '@salesforce/retail-react-app/app/components/display-price';

<DisplayPrice 
    priceData={{
        currentPrice: 29.99,
        listPrice: 39.99,
        isOnSale: true,
        isASet: false,
        isMaster: false,
        isRange: false
    }}
    currency="USD"
    quantity={1}
/>
\`\`\`

## Price Data Structure

The component expects a priceData object with the following properties:

- \`currentPrice\`: Current selling price (required)
- \`listPrice\`: Original list price (optional)
- \`isOnSale\`: Whether the product is on sale (required)
- \`isASet\`: Whether the product is a set (optional)
- \`isMaster\`: Whether the product is a master product (optional)
- \`isRange\`: Whether the price is a range (optional)
- \`pricePerUnit\`: Price per unit (optional)
- \`maxPrice\`: Maximum price for ranges (optional)
- \`tieredPrice\`: Tiered pricing (optional)
                `
            }
        }
    },
    argTypes: {
        priceData: {
            description: 'Price data object containing all pricing information',
            control: { type: 'object' }
        },
        currency: {
            description: 'Currency code for price display',
            control: { type: 'text' },
            defaultValue: 'USD'
        },
        quantity: {
            description: 'Quantity to calculate total price',
            control: { type: 'number' },
            defaultValue: 1
        },
        labelForA11y: {
            description: 'Accessibility label for screen readers',
            control: { type: 'text' }
        },
        currentPriceProps: {
            description: 'Additional props for CurrentPrice component',
            control: { type: 'object' }
        },
        listPriceProps: {
            description: 'Additional props for ListPrice component',
            control: { type: 'object' }
        }
    }
};

const Template = (args) => <DisplayPrice {...args} />;

// Standard product with current price only
export const StandardPrice = Template.bind({});
StandardPrice.args = {
    priceData: {
        currentPrice: 29.99,
        isOnSale: false,
        isASet: false,
        isMaster: false,
        isRange: false
    },
    currency: 'USD'
};
StandardPrice.parameters = {
    docs: {
        description: {
            story: 'Standard product price display - shows only the current price.'
        }
    }
};

// Product on sale with list price
export const SalePrice = Template.bind({});
SalePrice.args = {
    priceData: {
        currentPrice: 29.99,
        listPrice: 39.99,
        isOnSale: true,
        isASet: false,
        isMaster: false,
        isRange: false
    },
    currency: 'USD'
};
SalePrice.parameters = {
    docs: {
        description: {
            story: 'Product on sale - shows current price with crossed-out list price.'
        }
    }
};

// Product set with "From" pricing
export const SetPrice = Template.bind({});
SetPrice.args = {
    priceData: {
        currentPrice: 29.99,
        isOnSale: false,
        isASet: true,
        isMaster: false,
        isRange: false
    },
    currency: 'USD'
};
SetPrice.parameters = {
    docs: {
        description: {
            story: 'Product set - shows "From X" pricing indicating the lowest price in the set.'
        }
    }
};

// Master product with range pricing
export const MasterPrice = Template.bind({});
MasterPrice.args = {
    priceData: {
        currentPrice: 29.99,
        listPrice: 39.99,
        isOnSale: true,
        isASet: false,
        isMaster: true,
        isRange: true
    },
    currency: 'USD'
};
MasterPrice.parameters = {
    docs: {
        description: {
            story: 'Master product - shows price range with "From X" format for variants.'
        }
    }
};

// Price with quantity
export const PriceWithQuantity = Template.bind({});
PriceWithQuantity.args = {
    priceData: {
        currentPrice: 29.99,
        listPrice: 39.99,
        isOnSale: true,
        isASet: false,
        isMaster: false,
        isRange: false
    },
    currency: 'USD',
    quantity: 3
};
PriceWithQuantity.parameters = {
    docs: {
        description: {
            story: 'Price with quantity - shows total price calculated for multiple items.'
        }
    }
};

// Different currencies
export const DifferentCurrencies = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <div>
            <h4>USD</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 29.99,
                    listPrice: 39.99,
                    isOnSale: true,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="USD"
            />
        </div>
        <div>
            <h4>EUR</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 25.50,
                    listPrice: 35.00,
                    isOnSale: true,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="EUR"
            />
        </div>
        <div>
            <h4>GBP</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 22.99,
                    listPrice: 32.99,
                    isOnSale: true,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="GBP"
            />
        </div>
        <div>
            <h4>JPY</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 3500,
                    listPrice: 4500,
                    isOnSale: true,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="JPY"
            />
        </div>
    </div>
);
DifferentCurrencies.parameters = {
    docs: {
        description: {
            story: 'Price display in different currencies - shows how the component handles various currency formats.'
        }
    }
};

// Price scenarios showcase
export const PriceScenarios = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <div>
            <h4>Standard Product</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 29.99,
                    isOnSale: false,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="USD"
            />
        </div>
        <div>
            <h4>Product on Sale</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 29.99,
                    listPrice: 39.99,
                    isOnSale: true,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="USD"
            />
        </div>
        <div>
            <h4>Product Set</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 29.99,
                    isOnSale: false,
                    isASet: true,
                    isMaster: false,
                    isRange: false
                }}
                currency="USD"
            />
        </div>
        <div>
            <h4>Master Product</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 29.99,
                    listPrice: 39.99,
                    isOnSale: true,
                    isASet: false,
                    isMaster: true,
                    isRange: true
                }}
                currency="USD"
            />
        </div>
        <div>
            <h4>Bundle Product</h4>
            <DisplayPrice 
                priceData={{
                    currentPrice: 79.99,
                    listPrice: 99.99,
                    isOnSale: true,
                    isASet: false,
                    isMaster: false,
                    isRange: false
                }}
                currency="USD"
            />
        </div>
    </div>
);
PriceScenarios.parameters = {
    docs: {
        description: {
            story: 'Various price scenarios - demonstrates different pricing configurations and their display formats.'
        }
    }
};

// Interactive price editor
export const InteractivePrice = () => {
    const [priceData, setPriceData] = React.useState({
        currentPrice: 29.99,
        listPrice: 39.99,
        isOnSale: true,
        isASet: false,
        isMaster: false,
        isRange: false
    });

    const updateField = (field, value) => {
        setPriceData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h3>Price Display</h3>
                <div style={{ 
                    backgroundColor: 'white', 
                    padding: '15px', 
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                }}>
                    <DisplayPrice 
                        priceData={priceData}
                        currency="USD"
                    />
                </div>
            </div>
            
            <div style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '15px', 
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <h4>Edit Price Data</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    <div>
                        <label>Current Price:</label>
                        <input 
                            type="number"
                            step="0.01"
                            value={priceData.currentPrice} 
                            onChange={(e) => updateField('currentPrice', parseFloat(e.target.value))}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>List Price:</label>
                        <input 
                            type="number"
                            step="0.01"
                            value={priceData.listPrice || ''} 
                            onChange={(e) => updateField('listPrice', e.target.value ? parseFloat(e.target.value) : null)}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox"
                                checked={priceData.isOnSale} 
                                onChange={(e) => updateField('isOnSale', e.target.checked)}
                                style={{ marginRight: '5px' }}
                            />
                            On Sale
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox"
                                checked={priceData.isASet} 
                                onChange={(e) => updateField('isASet', e.target.checked)}
                                style={{ marginRight: '5px' }}
                            />
                            Is Set
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox"
                                checked={priceData.isMaster} 
                                onChange={(e) => updateField('isMaster', e.target.checked)}
                                style={{ marginRight: '5px' }}
                            />
                            Is Master
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox"
                                checked={priceData.isRange} 
                                onChange={(e) => updateField('isRange', e.target.checked)}
                                style={{ marginRight: '5px' }}
                            />
                            Is Range
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
InteractivePrice.parameters = {
    docs: {
        description: {
            story: 'Interactive price editor - modify the price data to see how the component updates in real-time.'
        }
    }
}; 