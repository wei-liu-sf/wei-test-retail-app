import React from 'react'
import LoadingSpinner from '../app/components/loading-spinner'

export default {
    title: 'Components/LoadingSpinner',
    component: LoadingSpinner,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# LoadingSpinner Component

The LoadingSpinner component displays a loading indicator with customizable styling and positioning. It's commonly used to show loading states during data fetching or processing.

## Features

- **Overlay Display**: Covers the entire container with a semi-transparent background
- **Centered Spinner**: Automatically centers the spinner in the container
- **Customizable Styling**: Supports custom wrapper and spinner styles
- **Accessibility**: Includes proper test IDs for testing
- **Responsive**: Adapts to different container sizes
- **Z-Index Management**: Proper layering with overlay positioning

## Usage

\`\`\`jsx
import LoadingSpinner from '@salesforce/retail-react-app/app/components/loading-spinner';

<LoadingSpinner 
    wrapperStyles={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
    spinnerStyles={{ color: 'blue.500' }}
/>
\`\`\`

## Styling Options

The component accepts two style objects:

- \`wrapperStyles\`: Styles for the overlay wrapper
- \`spinnerStyles\`: Styles for the spinner itself

## Default Styling

- **Wrapper**: White semi-transparent overlay with absolute positioning
- **Spinner**: Blue color, large size, with custom thickness and speed
- **Positioning**: Centered with proper z-index layering
                `
            }
        }
    },
    argTypes: {
        wrapperStyles: {
            description: 'Custom styles for the wrapper overlay',
            control: {type: 'object'}
        },
        spinnerStyles: {
            description: 'Custom styles for the spinner',
            control: {type: 'object'}
        }
    }
}

const Template = (args) => (
    <div
        style={{
            position: 'relative',
            width: '400px',
            height: '300px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <div style={{padding: '20px', textAlign: 'center'}}>
            <h3>Content Area</h3>
            <p>This is the content that would be covered by the loading spinner.</p>
            <p>The spinner will appear as an overlay on top of this content.</p>
        </div>
        <LoadingSpinner {...args} />
    </div>
)

// Default loading spinner
export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
    docs: {
        description: {
            story: 'Default loading spinner with standard styling - blue spinner on white semi-transparent overlay.'
        }
    }
}

// Custom colored spinner
export const CustomColor = Template.bind({})
CustomColor.args = {
    spinnerStyles: {
        color: 'red.500'
    }
}
CustomColor.parameters = {
    docs: {
        description: {
            story: 'Loading spinner with custom red color instead of the default blue.'
        }
    }
}

// Custom overlay background
export const CustomOverlay = Template.bind({})
CustomOverlay.args = {
    wrapperStyles: {
        background: 'rgba(0, 0, 0, 0.7)'
    }
}
CustomOverlay.parameters = {
    docs: {
        description: {
            story: 'Loading spinner with dark overlay background instead of the default white.'
        }
    }
}

// Small spinner
export const SmallSpinner = Template.bind({})
SmallSpinner.args = {
    spinnerStyles: {
        size: 'sm'
    }
}
SmallSpinner.parameters = {
    docs: {
        description: {
            story: 'Loading spinner with smaller size for less intrusive loading indication.'
        }
    }
}

// Large spinner
export const LargeSpinner = Template.bind({})
LargeSpinner.args = {
    spinnerStyles: {
        size: 'lg'
    }
}
LargeSpinner.parameters = {
    docs: {
        description: {
            story: 'Loading spinner with larger size for more prominent loading indication.'
        }
    }
}

// Custom thickness
export const CustomThickness = Template.bind({})
CustomThickness.args = {
    spinnerStyles: {
        thickness: '8px'
    }
}
CustomThickness.parameters = {
    docs: {
        description: {
            story: 'Loading spinner with custom thickness for different visual styles.'
        }
    }
}

// Custom speed
export const CustomSpeed = Template.bind({})
CustomSpeed.args = {
    spinnerStyles: {
        speed: '1s'
    }
}
CustomSpeed.parameters = {
    docs: {
        description: {
            story: 'Loading spinner with custom animation speed - faster rotation.'
        }
    }
}

// Multiple spinners showcase
export const MultipleSpinners = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            padding: '20px'
        }}
    >
        <div
            style={{
                position: 'relative',
                width: '300px',
                height: '200px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{padding: '15px', textAlign: 'center'}}>
                <h4>Default</h4>
                <p>Standard blue spinner</p>
            </div>
            <LoadingSpinner />
        </div>

        <div
            style={{
                position: 'relative',
                width: '300px',
                height: '200px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{padding: '15px', textAlign: 'center'}}>
                <h4>Red Spinner</h4>
                <p>Custom red color</p>
            </div>
            <LoadingSpinner spinnerStyles={{color: 'red.500'}} />
        </div>

        <div
            style={{
                position: 'relative',
                width: '300px',
                height: '200px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{padding: '15px', textAlign: 'center'}}>
                <h4>Dark Overlay</h4>
                <p>Dark background</p>
            </div>
            <LoadingSpinner wrapperStyles={{background: 'rgba(0, 0, 0, 0.7)'}} />
        </div>

        <div
            style={{
                position: 'relative',
                width: '300px',
                height: '200px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{padding: '15px', textAlign: 'center'}}>
                <h4>Small Spinner</h4>
                <p>Compact size</p>
            </div>
            <LoadingSpinner spinnerStyles={{size: 'sm'}} />
        </div>
    </div>
)
MultipleSpinners.parameters = {
    docs: {
        description: {
            story: 'Multiple loading spinners with different configurations - shows various styling options.'
        }
    }
}

// Interactive spinner customizer
export const InteractiveSpinner = () => {
    const [spinnerConfig, setSpinnerConfig] = React.useState({
        color: 'blue.500',
        size: 'xl',
        thickness: '4px',
        speed: '0.65s'
    })

    const [overlayConfig, setOverlayConfig] = React.useState({
        background: 'whiteAlpha.800'
    })

    const updateSpinnerConfig = (field, value) => {
        setSpinnerConfig((prev) => ({...prev, [field]: value}))
    }

    const updateOverlayConfig = (field, value) => {
        setOverlayConfig((prev) => ({...prev, [field]: value}))
    }

    return (
        <div style={{padding: '20px'}}>
            <div style={{marginBottom: '20px'}}>
                <h3>Loading Spinner Preview</h3>
                <div
                    style={{
                        position: 'relative',
                        width: '400px',
                        height: '300px',
                        backgroundColor: '#f0f0f0',
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{padding: '20px', textAlign: 'center'}}>
                        <h4>Content Area</h4>
                        <p>This content is covered by the loading spinner overlay.</p>
                    </div>
                    <LoadingSpinner spinnerStyles={spinnerConfig} wrapperStyles={overlayConfig} />
                </div>
            </div>

            <div
                style={{
                    backgroundColor: '#f5f5f5',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}
            >
                <h4>Customize Spinner</h4>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
                    <div>
                        <label htmlFor="spinnerColor">Color:</label>
                        <select
                            id="spinnerColor"
                            value={spinnerConfig.color}
                            onChange={(e) => updateSpinnerConfig('color', e.target.value)}
                            style={{width: '100%', padding: '5px', marginTop: '5px'}}
                        >
                            <option value="blue.500">Blue</option>
                            <option value="red.500">Red</option>
                            <option value="green.500">Green</option>
                            <option value="purple.500">Purple</option>
                            <option value="orange.500">Orange</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="spinnerSize">Size:</label>
                        <select
                            id="spinnerSize"
                            value={spinnerConfig.size}
                            onChange={(e) => updateSpinnerConfig('size', e.target.value)}
                            style={{width: '100%', padding: '5px', marginTop: '5px'}}
                        >
                            <option value="xs">Extra Small</option>
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                            <option value="xl">Extra Large</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="spinnerThickness">Thickness:</label>
                        <select
                            id="spinnerThickness"
                            value={spinnerConfig.thickness}
                            onChange={(e) => updateSpinnerConfig('thickness', e.target.value)}
                            style={{width: '100%', padding: '5px', marginTop: '5px'}}
                        >
                            <option value="2px">Thin</option>
                            <option value="4px">Normal</option>
                            <option value="6px">Thick</option>
                            <option value="8px">Very Thick</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="spinnerSpeed">Speed:</label>
                        <select
                            id="spinnerSpeed"
                            value={spinnerConfig.speed}
                            onChange={(e) => updateSpinnerConfig('speed', e.target.value)}
                            style={{width: '100%', padding: '5px', marginTop: '5px'}}
                        >
                            <option value="0.5s">Fast</option>
                            <option value="0.65s">Normal</option>
                            <option value="1s">Slow</option>
                            <option value="1.5s">Very Slow</option>
                        </select>
                    </div>
                </div>

                <h4 style={{marginTop: '20px'}}>Customize Overlay</h4>
                <div>
                    <label htmlFor="overlayBackground">Background:</label>
                    <select
                        id="overlayBackground"
                        value={overlayConfig.background}
                        onChange={(e) => updateOverlayConfig('background', e.target.value)}
                        style={{width: '100%', padding: '5px', marginTop: '5px'}}
                    >
                        <option value="whiteAlpha.800">Light</option>
                        <option value="blackAlpha.700">Dark</option>
                        <option value="blueAlpha.200">Blue</option>
                        <option value="redAlpha.200">Red</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
InteractiveSpinner.parameters = {
    docs: {
        description: {
            story: 'Interactive spinner customizer - modify the spinner and overlay properties to see real-time changes.'
        }
    }
}
