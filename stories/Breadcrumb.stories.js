import React from 'react';
import Breadcrumb from '../app/components/breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# Breadcrumb Component

The Breadcrumb component displays a navigation breadcrumb trail showing the current page's location within the site hierarchy. It uses Chakra UI components with custom styling.

## Features

- **Category Navigation**: Displays a trail of categories leading to the current page
- **Clickable Links**: Each breadcrumb item is a clickable link to that category
- **Custom Separator**: Uses chevron right icon as separator
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and semantic structure
- **URL Generation**: Automatically generates category URLs

## Usage

\`\`\`jsx
import Breadcrumb from '@salesforce/retail-react-app/app/components/breadcrumb';

<Breadcrumb 
    categories={[
        { id: 'cat1', name: 'Home' },
        { id: 'cat2', name: 'Electronics' },
        { id: 'cat3', name: 'Smartphones' }
    ]}
/>
\`\`\`

## Category Structure

Each category object should have:
- \`id\`: Unique category identifier
- \`name\`: Display name for the category

## URL Generation

The component automatically generates URLs using the categoryUrlBuilder utility function, which creates SEO-friendly URLs based on the category structure and current locale.
                `
            }
        }
    },
    argTypes: {
        categories: {
            description: 'Array of category objects to display in the breadcrumb',
            control: { type: 'object' }
        }
    }
};

const Template = (args) => <Breadcrumb {...args} />;

// Simple breadcrumb with few categories
export const Simple = Template.bind({});
Simple.args = {
    categories: [
        { id: 'home', name: 'Home' },
        { id: 'electronics', name: 'Electronics' }
    ]
};
Simple.parameters = {
    docs: {
        description: {
            story: 'Simple breadcrumb with two categories - Home and Electronics.'
        }
    }
};

// Deep breadcrumb with many categories
export const Deep = Template.bind({});
Deep.args = {
    categories: [
        { id: 'home', name: 'Home' },
        { id: 'electronics', name: 'Electronics' },
        { id: 'computers', name: 'Computers' },
        { id: 'laptops', name: 'Laptops' },
        { id: 'gaming-laptops', name: 'Gaming Laptops' }
    ]
};
Deep.parameters = {
    docs: {
        description: {
            story: 'Deep breadcrumb with multiple category levels showing a detailed navigation path.'
        }
    }
};

// E-commerce category breadcrumb
export const Ecommerce = Template.bind({});
Ecommerce.args = {
    categories: [
        { id: 'home', name: 'Home' },
        { id: 'clothing', name: 'Clothing' },
        { id: 'mens-clothing', name: 'Men\'s Clothing' },
        { id: 'shirts', name: 'Shirts' },
        { id: 'casual-shirts', name: 'Casual Shirts' }
    ]
};
Ecommerce.parameters = {
    docs: {
        description: {
            story: 'E-commerce breadcrumb showing clothing category navigation.'
        }
    }
};

// Single category breadcrumb
export const SingleCategory = Template.bind({});
SingleCategory.args = {
    categories: [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About Us' }
    ]
};
SingleCategory.parameters = {
    docs: {
        description: {
            story: 'Breadcrumb with just two categories - useful for simple page navigation.'
        }
    }
};

// Product category breadcrumb
export const ProductCategory = Template.bind({});
ProductCategory.args = {
    categories: [
        { id: 'home', name: 'Home' },
        { id: 'electronics', name: 'Electronics' },
        { id: 'smartphones', name: 'Smartphones' },
        { id: 'apple-phones', name: 'Apple Phones' }
    ]
};
ProductCategory.parameters = {
    docs: {
        description: {
            story: 'Product category breadcrumb showing navigation to a specific product category.'
        }
    }
};

// Long category names
export const LongNames = Template.bind({});
LongNames.args = {
    categories: [
        { id: 'home', name: 'Home' },
        { id: 'electronics', name: 'Electronics & Technology' },
        { id: 'computers', name: 'Computers & Accessories' },
        { id: 'laptops', name: 'Laptops & Notebooks' },
        { id: 'gaming', name: 'Gaming Laptops & Workstations' }
    ]
};
LongNames.parameters = {
    docs: {
        description: {
            story: 'Breadcrumb with long category names to test text wrapping and layout.'
        }
    }
};

// Multiple breadcrumbs showcase
export const MultipleBreadcrumbs = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <div>
            <h4>Simple Navigation</h4>
            <Breadcrumb 
                categories={[
                    { id: 'home', name: 'Home' },
                    { id: 'about', name: 'About' }
                ]}
            />
        </div>
        
        <div>
            <h4>E-commerce Navigation</h4>
            <Breadcrumb 
                categories={[
                    { id: 'home', name: 'Home' },
                    { id: 'clothing', name: 'Clothing' },
                    { id: 'mens', name: 'Men\'s' },
                    { id: 'shirts', name: 'Shirts' }
                ]}
            />
        </div>
        
        <div>
            <h4>Electronics Navigation</h4>
            <Breadcrumb 
                categories={[
                    { id: 'home', name: 'Home' },
                    { id: 'electronics', name: 'Electronics' },
                    { id: 'computers', name: 'Computers' },
                    { id: 'laptops', name: 'Laptops' }
                ]}
            />
        </div>
        
        <div>
            <h4>Deep Navigation</h4>
            <Breadcrumb 
                categories={[
                    { id: 'home', name: 'Home' },
                    { id: 'sports', name: 'Sports & Outdoors' },
                    { id: 'fitness', name: 'Fitness & Exercise' },
                    { id: 'cardio', name: 'Cardio Equipment' },
                    { id: 'treadmills', name: 'Treadmills' }
                ]}
            />
        </div>
    </div>
);
MultipleBreadcrumbs.parameters = {
    docs: {
        description: {
            story: 'Multiple breadcrumb examples showing different navigation scenarios and category structures.'
        }
    }
};

// Interactive breadcrumb builder
export const InteractiveBreadcrumb = () => {
    const [categories, setCategories] = React.useState([
        { id: 'home', name: 'Home' },
        { id: 'electronics', name: 'Electronics' },
        { id: 'smartphones', name: 'Smartphones' }
    ]);

    const addCategory = () => {
        const newId = `cat${categories.length + 1}`;
        const newName = `Category ${categories.length + 1}`;
        setCategories([...categories, { id: newId, name: newName }]);
    };

    const removeCategory = () => {
        if (categories.length > 1) {
            setCategories(categories.slice(0, -1));
        }
    };

    const updateCategory = (index, field, value) => {
        const newCategories = [...categories];
        newCategories[index] = { ...newCategories[index], [field]: value };
        setCategories(newCategories);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h3>Breadcrumb Preview</h3>
                <div style={{ 
                    backgroundColor: 'white', 
                    padding: '15px', 
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                }}>
                    <Breadcrumb categories={categories} />
                </div>
            </div>
            
            <div style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '15px', 
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <h4>Edit Categories</h4>
                <div style={{ marginBottom: '15px' }}>
                    <button 
                        onClick={addCategory}
                        style={{ 
                            padding: '8px 16px', 
                            marginRight: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Add Category
                    </button>
                    <button 
                        onClick={removeCategory}
                        style={{ 
                            padding: '8px 16px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Remove Last
                    </button>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {categories.map((category, index) => (
                        <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div>
                                <label>ID:</label>
                                <input 
                                    value={category.id} 
                                    onChange={(e) => updateCategory(index, 'id', e.target.value)}
                                    style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                                />
                            </div>
                            <div>
                                <label>Name:</label>
                                <input 
                                    value={category.name} 
                                    onChange={(e) => updateCategory(index, 'name', e.target.value)}
                                    style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
InteractiveBreadcrumb.parameters = {
    docs: {
        description: {
            story: 'Interactive breadcrumb builder - add, remove, and edit categories to see how the breadcrumb updates in real-time.'
        }
    }
}; 