# AddressDisplay Storybook Stories

This directory contains comprehensive Storybook stories for the AddressDisplay component, showcasing various address formats and international standards.

## Available Stories

### 1. Default
- **Description**: Default AddressDisplay with a standard US address format
- **Features**: Standard US address with state code and ZIP code
- **Use Case**: Typical US residential address display

### 2. InternationalAddress (UK)
- **Description**: AddressDisplay with a UK address format
- **Features**: UK postal code format, no state code
- **Use Case**: International address display for UK customers

### 3. CanadianAddress
- **Description**: AddressDisplay with a Canadian address format
- **Features**: Province code, Canadian postal code format
- **Use Case**: Canadian address display

### 4. AustralianAddress
- **Description**: AddressDisplay with an Australian address format
- **Features**: State code, 4-digit postal code
- **Use Case**: Australian address display

### 5. GermanAddress
- **Description**: AddressDisplay with a German address format
- **Features**: Street number in address, 5-digit postal code
- **Use Case**: German address display

### 6. JapaneseAddress
- **Description**: AddressDisplay with a Japanese address format
- **Features**: District information in address, 7-digit postal code
- **Use Case**: Japanese address display

### 7. LongNameAddress
- **Description**: AddressDisplay with a long name and address
- **Features**: Tests text wrapping and layout with long content
- **Use Case**: Edge case testing for long names/addresses

### 8. MinimalAddress
- **Description**: AddressDisplay with minimal address information
- **Features**: Missing state code to show optional field handling
- **Use Case**: Addresses with incomplete information

### 9. BusinessAddress
- **Description**: AddressDisplay with a business address
- **Features**: Company name as recipient, suite number in address
- **Use Case**: Business address display

### 10. ApartmentAddress
- **Description**: AddressDisplay with an apartment address
- **Features**: Apartment number in the address line
- **Use Case**: Apartment/unit address display

### 11. PoBoxAddress
- **Description**: AddressDisplay with a PO Box address
- **Features**: PO Box format handling
- **Use Case**: PO Box address display

### 12. RuralAddress
- **Description**: AddressDisplay with a rural address
- **Features**: Rural route format
- **Use Case**: Rural address display

### 13. MilitaryAddress
- **Description**: AddressDisplay with a military address
- **Features**: APO format for military addresses
- **Use Case**: Military address display

### 14. FrenchAddress
- **Description**: AddressDisplay with a French address
- **Features**: European address format with street name first
- **Use Case**: French address display

### 15. ItalianAddress
- **Description**: AddressDisplay with an Italian address
- **Features**: Mediterranean address format
- **Use Case**: Italian address display

### 16. SpanishAddress
- **Description**: AddressDisplay with a Spanish address
- **Features**: Spanish address format with "Calle" prefix
- **Use Case**: Spanish address display

### 17. DutchAddress
- **Description**: AddressDisplay with a Dutch address
- **Features**: Netherlands address format with "van der" in name
- **Use Case**: Dutch address display

### 18. SwedishAddress
- **Description**: AddressDisplay with a Swedish address
- **Features**: Nordic address format
- **Use Case**: Swedish address display

### 19. MultipleAddresses
- **Description**: Multiple AddressDisplay components in a grid layout
- **Features**: Grid layout showcase with different international formats
- **Use Case**: Address listing pages, comparison views

### 20. InteractiveAddress
- **Description**: Interactive AddressDisplay with editable fields
- **Features**: Working form fields, real-time updates
- **Use Case**: Testing address editing functionality

## Component Props

The AddressDisplay component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | Object | - | Address object containing all address information |

## Address Object Structure

The component expects an address object with the following properties:

- `firstName`: Recipient's first name
- `lastName`: Recipient's last name  
- `address1`: Primary street address
- `city`: City name
- `stateCode`: State/province code (optional)
- `postalCode`: Postal/ZIP code
- `countryCode`: Country code

## Mock Data

The stories use several mock data files:

- `addresses.js`: Comprehensive collection of address examples including:
  - US addresses (standard, business, apartment, long names)
  - International addresses (UK, Canada, Australia, Germany, Japan, France, Italy, Spain, Netherlands, Sweden)
  - Special cases (PO Box, rural, military)

## Address Format Examples

### US Standard
```
John Doe
123 Main Street
Anytown, CA 12345
US
```

### UK Address
```
Sarah Wilson
42 High Street
London, SW1A 1AA
GB
```

### Canadian Address
```
Michael Thompson
789 Maple Avenue
Toronto, ON M5V 3A8
CA
```

### German Address
```
Hans Mueller
Bahnhofstraße 15
Berlin, 10115
DE
```

### Japanese Address
```
Yuki Tanaka
1-2-3 Shibuya
Tokyo, 150-0002
JP
```

## Running the Stories

To run the Storybook stories:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006` where you can interact with all the AddressDisplay stories.

## Development

When adding new stories:

1. Create mock data if needed in `app/mocks/addresses.js`
2. Add the story to `AddressDisplay.stories.js`
3. Include proper documentation in the story parameters
4. Test the story in Storybook

## Best Practices

- Each story should demonstrate a specific address format or use case
- Include comprehensive documentation for each story
- Use realistic address data that represents actual international formats
- Test edge cases like long names, missing fields, and special formats
- Ensure stories work across different screen sizes
- Consider accessibility for address display (screen readers, etc.)

## International Considerations

The AddressDisplay component handles various international address formats:

- **Postal Codes**: Different countries use different formats (US: 12345, UK: SW1A 1AA, Canada: M5V 3A8)
- **State/Province**: Some countries don't use state codes (UK, Germany, Japan)
- **Address Format**: Different countries have different address line structures
- **Name Formats**: Some cultures have different name structures (e.g., "van der" in Dutch names)

## Testing Scenarios

The stories cover various testing scenarios:

- **Standard Formats**: Common address formats for major countries
- **Edge Cases**: Long names, missing fields, special formats
- **International**: Different postal code formats and address structures
- **Business**: Company names and suite numbers
- **Special**: PO Box, rural routes, military addresses
- **Interactive**: Real-time editing and validation 