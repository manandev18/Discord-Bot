# Discord Bot for QRCODE generation with Groq AI Integration

This is a Discord bot built using `discord.js` that generates sarcastic responses using Groq's AI models. The bot also supports generating QR codes for user-provided messages.

## Features

- Responds to messages with sarcastic AI-generated responses.
- Generates QR codes for user-provided messages.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/manandev18/Discord-Bot.git
    cd discord-bot-groq
    ```

2. Install the required dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Groq API key and Discord bot token:

    ```env
    GROQ_API_KEY=your_groq_api_key
    TOKEN=your_discord_bot_token
    ```

## Usage

1. Start the bot:

    ```sh
    node index.js
    ```

2. Interact with the bot on your Discord server:

    - **Generate QR Code**: Use the `/create` command followed by your message.
    - **Chat with the bot**: Send a message to any channel the bot is in, and it will reply with a sarcastic AI-generated response.

## Example Commands

- `/create message:Hello World!` - Generates a QR code for the message "Hello World!".
- `Hi bot, how are you?` - The bot replies with a sarcastic response.

## Dependencies

- [discord.js](https://discord.js.org/) - A powerful JavaScript library for interacting with the Discord API.
- [qrcode](https://github.com/soldair/node-qrcode) - A QR code generator for Node.js.
- [groq-sdk](https://github.com/groq-ai/groq-sdk-js) - Groq's AI SDK for Node.js.
- [dotenv](https://github.com/motdotla/dotenv) - A module that loads environment variables from a `.env` file.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push to your branch.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
