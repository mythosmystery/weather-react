export const localStorageKey = 'saved_cities';
export const getSavedCities = () => {
   const savedCities = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : [];

   return savedCities;
};

export const saveCities = cityArr => {
   if (cityArr.length) {
      localStorage.setItem(localStorageKey, JSON.stringify(cityArr));
   } else {
      localStorage.removeItem(localStorageKey);
   }
};
export const addCity = cityName => {
   const savedCities = getSavedCities();
   let invalid = false;
   if (savedCities.length) {
      savedCities.forEach(city => {
         if (city === cityName) invalid = true;
      });
   }

   if (!invalid) {
      savedCities.push(cityName);
      saveCities(savedCities);
   }
   return savedCities;
};
export const removeCity = cityName => {
   const savedCities = getSavedCities();
   if (savedCities.length) {
      const index = savedCities.indexOf(cityName);
      savedCities.splice(index, 1);
      saveCities(savedCities);
   }
   return savedCities;
};
