import { State, City } from "country-state-city";

/**
 * Parse and validate location slug (format: city-state)
 * @param {string} slug - The URL slug (e.g., "lahore-punjab")
 * @returns {Object} - { city, state, isValid }
 */
export function parseLocationSlug(slug) {
  if (!slug || typeof slug !== "string") {
    return { city: null, state: null, isValid: false };
  }

  const parts = slug.split("-");

  // Must have at least 2 parts (city-state)
  if (parts.length < 2) {
    return { city: null, state: null, isValid: false };
  }

  // Convert first part to city name
  const cityName = parts[0]
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Convert remaining parts to state name
  const stateName = parts
    .slice(1)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // ✅ Get all Pakistan states
  const pakistanStates = State.getStatesOfCountry("PK");

  // Validate state exists (flexible match for Islamabad etc.)
  const stateObj = pakistanStates.find((s) => {
    const normalizedState = stateName.toLowerCase();
    const normalizedRealState = s.name.toLowerCase();

    return (
      normalizedRealState === normalizedState ||
      normalizedRealState.includes(normalizedState)
    );
  });

  if (!stateObj) {
    return { city: null, state: null, isValid: false };
  }

  // Validate city exists in that state
  const cities = City.getCitiesOfState("PK", stateObj.isoCode);
  const cityExists = cities.some(
    (c) => c.name.toLowerCase() === cityName.toLowerCase(),
  );

  if (!cityExists) {
    return { city: null, state: null, isValid: false };
  }

  return { city: cityName, state: stateName, isValid: true };
}

/**
 * Create location slug from city and state
 * @param {string} city - City name
 * @param {string} state - State name
 * @returns {string} - URL slug (e.g., "lahore-punjab")
 */
export function createLocationSlug(city, state) {
  if (!city || !state) return "";

  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const stateSlug = state.toLowerCase().replace(/\s+/g, "-");

  return `${citySlug}-${stateSlug}`;
}
