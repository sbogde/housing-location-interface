# @sbogde/housing-location-interface

[![npm version](https://badge.fury.io/js/%40sbogde%2Fhousing-location-interface.svg)](https://www.npmjs.com/package/@sbogde/housing-location-interface)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript interface for housing location data - reusable across Angular and TypeScript applications.

## 🏠 What is this?

A simple, well-typed interface for representing housing/real estate property data. Perfect for Angular apps, React apps, or any TypeScript project dealing with property listings.

## 📦 Installation

```bash
npm install @sbogde/housing-location-interface
```

## 🚀 Usage

### Basic Import

```typescript
import { HousingLocation } from '@sbogde/housing-location-interface';

const property: HousingLocation = {
  id: 1,
  name: 'Acme Fresh Start Housing',
  city: 'Chicago',
  state: 'IL',
  photo: '/assets/property.jpg',
  availableUnits: 4,
  wifi: true,
  laundry: true
};
```

### Type Guard

```typescript
import { isHousingLocation } from '@sbogde/housing-location-interface';

const data = fetchDataFromAPI();

if (isHousingLocation(data)) {
  // TypeScript knows data is a valid HousingLocation
  console.log(data.city);
}
```

### Mock Data for Testing

```typescript
import { createMockHousingLocation } from '@sbogde/housing-location-interface';

const mockProperty = createMockHousingLocation({
  name: 'Test Property',
  city: 'Test City'
});

// Use in your tests
expect(component.property).toEqual(mockProperty);
```

## 📝 Interface Definition

```typescript
interface HousingLocation {
  id: number;              // Unique identifier
  name: string;            // Property name
  city: string;            // City location
  state: string;           // State/province
  photo: string;           // Photo URL or path
  availableUnits: number;  // Number of available units
  wifi: boolean;           // WiFi availability
  laundry: boolean;        // Laundry facilities
}
```

## 🛠️ API

### Exports

- **`HousingLocation`** - Main TypeScript interface
- **`isHousingLocation(obj: any): obj is HousingLocation`** - Type guard function
- **`createMockHousingLocation(overrides?: Partial<HousingLocation>)`** - Mock factory for testing

## 🎯 Use Cases

- Angular property listing applications
- Real estate web applications
- TypeScript projects needing property type definitions
- Testing and mock data generation
- Ensuring type safety across multiple projects

## 🔗 Related Projects

This package was created as part of the [ng-house-hunters](https://github.com/sbogde/ng-house-hunters) tutorial project.

## 📄 License

MIT © Sorin Bogde

## 🤝 Contributing

Issues and pull requests are welcome!

## 📧 Contact

For questions or feedback, open an issue on [GitHub](https://github.com/sbogde/housing-location-interface).
