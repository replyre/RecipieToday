# Recipe Application

This Recipe Application allows users to explore, search, and store a variety of recipes. It fetches data from the MealDB API and offers features to save favorite meals locally for easy access. The app uses Context API for state management and Local Storage to retain users' favorite meals across sessions.
![image](https://github.com/user-attachments/assets/62272100-f701-4e9a-b543-ea5849db0215)


## Features

- **Display Recipes**: Browse a wide selection of recipes fetched from the MealDB API.
- **Search Functionality**: Search for meals by name, category, or ingredients.
- **Favorite Recipes**: Save and manage your favorite meals using Local Storage.
- **Meal Details**: View detailed information about a meal, including ingredients and instructions.
  
![Screenshot 2024-10-09 145142](https://github.com/user-attachments/assets/f04ae9e2-915b-45b8-8d8d-0649a37b5945)

## Technologies Used

- **React**: For building the user interface.
- **MealDB API**: Used to fetch recipe data.
- **Context API**: For managing the application state.
- **Local Storage**: For storing favorite meals locally on the user's device.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/replyre/RecipieToday.git
   ```

2. Navigate to the project directory:

   ```bash
   cd RecipieToday
   ```

3. Install dependencies:

   ```bash
   npm install
   ```


5. Start the development server:

   ```bash
   npm start
   ```

## How to Use

1. **Search for Recipes**: Use the search bar to find specific recipes by name, category, or ingredients.
2. **View Recipe Details**: Click on a recipe to see detailed information such as ingredients, instructions, and preparation time.
3. **Save to Favorites**: Click the "Add to Favorites" button to save recipes locally. Favorites can be accessed from the Favorites section.
4. **Access Favorites**: The app stores your favorite recipes in Local Storage, so they will be saved even if you close and reopen the app.
![Screenshot 2024-10-09 145225](https://github.com/user-attachments/assets/c3a3dbca-cd64-4374-acae-96fc8b54bce2)


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your feature or bug fix.


## Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing recipe data.

