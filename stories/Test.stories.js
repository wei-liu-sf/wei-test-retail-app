import React from 'react'

export default {
    title: 'Test/Simple',
    component: 'div',
    parameters: {
        layout: 'centered'
    }
}

const Template = (args) => <div {...args}>Hello Storybook!</div>

export const Default = Template.bind({})
Default.args = {
    style: {padding: '20px', border: '1px solid #ccc'}
}
