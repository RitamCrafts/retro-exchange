# Currency Converter

A modern currency converter built with React and Tailwind CSS.

## Features

- Real-time currency conversion
- Swap currencies instantly
- Responsive retro-inspired UI
- Dynamic currency dropdowns
- Custom React hook for fetching currency data

## Tech Stack

- React
- Tailwind CSS
- JavaScript
- Vite

## Project Structure

```bash
src/
 ├── components/
 │    ├── MainBox.jsx
 │    ├── InfoBox.jsx
 │    └── SwapPart.jsx
 │
 ├── hooks/
 │    └── useCurrencyInfo.js
 │
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

## Installation

Clone the repository:

```bash
git clone <your-repo-link>
```

Move into the project folder:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## How It Works

- The app fetches currency conversion data using a custom hook.
- Currency options are generated dynamically using:

```js
Object.keys(currencyInfo)
```

- Selected currencies are managed using React state.
- Conversion values are updated whenever currencies or amount change.

## Example

```js
onChange={(e) => setSelectCurrency(e.target.value)}
```

This updates the selected currency whenever the user selects a new option.

## Future Improvements

- Add loading states
- Add error handling
- Add dark mode
- Save recent conversions
- Add charts for currency trends

## API Credits

This project uses exchange rate data from the open-source Exchange API by Fawaz Ahmed.

API Repository:
https://github.com/fawazahmed0/exchange-api

License:
https://github.com/fawazahmed0/exchange-api/blob/main/LICENSE

The API is distributed under the Creative Commons CC0 1.0 Universal license.
Special thanks to the API creator and contributors for providing free and publicly accessible exchange rate data for developers.

## Copyright

This project is created for educational and personal development purposes.
All third-party APIs, trademarks, and respective assets belong to their respective owners.

## Author

Ritam Mandal