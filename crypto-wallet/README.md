
# Crypto Wallet App

This is a simple cryptocurrency wallet application built using React, TypeScript, and Tailwind CSS. The app allows users to create a wallet, view their balance, send and receive cryptocurrency, and manage their transactions.

## Features

- **Wallet Creation**: Users can generate a new wallet with a mnemonic phrase and a unique wallet address.
- **Balance Management**: Users can view their current balance and increase it for testing purposes.
- **Send & Receive Crypto**: Users can send and receive cryptocurrency using their wallet address.
- **Transaction History**: The app displays a paginated list of past transactions.
- **Theme Toggle**: Users can switch between light and dark modes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ipouya79/kuknos-crypto-wallet.git
   cd crypto-wallet
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server using Vite:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the address shown in your terminal (typically `http://localhost:5173`).

## Usage

### Create a Wallet

1. On the homepage, click the **Create Wallet** button.
2. A 12-word mnemonic phrase will be generated. Write it down and keep it safe.
3. Confirm the mnemonic to create your wallet and get your unique wallet address.

### Send Cryptocurrency

1. Navigate to the **Send** page.
2. Enter the amount and the recipient's wallet address.
3. Click the **Send** button to complete the transaction.

### Receive Cryptocurrency

1. Navigate to the **Receive** page.
2. Share your wallet address or QR code with the sender.

### View Transaction History

- Navigate to the **Wallet** page to view your transaction history.

### Toggle Theme

- Click the theme toggle button at the bottom of any page to switch between light and dark modes.

## Project Structure

- **`src/components`**: Reusable UI components (e.g., `ThemeToggleButton`).
- **`src/pages`**: Main pages of the application (`LoginPage`, `WalletPage`, `SendPage`, `ReceivePage`).
- **`src/hooks`**: Custom hooks (`useAxios` for data fetching).
- **`src/types`**: TypeScript types used throughout the app.
- **`src/context`**: Context providers (e.g., `ThemeProvider` for managing the theme).

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling navigation within the app.
- **TypeScript**: Adds static types to JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making requests.
- **QRCode.react**: React component for generating QR codes.
- **uuid**: Library for generating unique identifiers.
- **Vite**: Next-generation frontend tooling for fast development.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

