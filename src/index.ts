/**
 * Represents a housing location with all relevant property information
 */
export interface HousingLocation {
  /** Unique identifier for the housing location */
  id: number;
  
  /** Name or title of the property */
  name: string;
  
  /** City where the property is located */
  city: string;
  
  /** State or province where the property is located */
  state: string;
  
  /** URL or path to the property photo */
  photo: string;
  
  /** Number of available units in the property */
  availableUnits: number;
  
  /** Whether WiFi is available */
  wifi: boolean;
  
  /** Whether laundry facilities are available */
  laundry: boolean;
}

/**
 * Type guard to check if an object is a valid HousingLocation
 */
export function isHousingLocation(obj: any): obj is HousingLocation {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.city === 'string' &&
    typeof obj.state === 'string' &&
    typeof obj.photo === 'string' &&
    typeof obj.availableUnits === 'number' &&
    typeof obj.wifi === 'boolean' &&
    typeof obj.laundry === 'boolean'
  );
}

/**
 * Creates a mock HousingLocation for testing purposes
 */
export function createMockHousingLocation(overrides?: Partial<HousingLocation>): HousingLocation {
  return {
    id: 1,
    name: 'Sample Property',
    city: 'San Francisco',
    state: 'CA',
    photo: 'https://example.com/photo.jpg',
    availableUnits: 5,
    wifi: true,
    laundry: true,
    ...overrides
  };
}
