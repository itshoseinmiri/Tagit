<div style="display: flex; align-items: center; gap: 6px">
    <img src="/images/tagit.png" width="60px" />
</div>

# Tagit - AI-Powered JSDoc Comment Generator

Tagit is a Visual Studio Code extension that generates JSDoc-style comments for your JavaScript and TypeScript code using AI. By leveraging the power of GPT-3.5, Tagit provides intelligent and context-aware comments to improve your code documentation process.

## Features

- **AI-Powered Comments**: Automatically generates high-quality, JSDoc-compliant comments for functions, classes, and code snippets.
- **Seamless Integration**: Works inline with your editor, providing suggestions as you type.
- **Customizable Activation**: Trigger AI-based comment generation on any line of your code.
- **Supports JavaScript and TypeScript**: Optimized for both languages, ensuring flexibility and wide adoption.

## How It Works

Tagit uses the `GPT-3.5-turbo` model to analyze the selected code and generate relevant comments. The AI understands your code's structure and context, enabling it to provide precise and meaningful documentation.

## Installation

1. Clone this repository or download the extension from the Visual Studio Code Marketplace (coming soon!).
2. Open the command palette in VS Code (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
3. Select **Extensions: Install from VSIX...** and choose the downloaded file.

## Usage

1. Place your cursor on a line of code (JavaScript or TypeScript).
2. The extension will automatically suggest a comment based on the code.
3. Accept the suggestion to insert the comment inline.

## Configuration

- **API Key**: Tagit requires an API key from `aimlapi.com` to access the GPT-3.5-turbo model. Replace the placeholder API key in `extension.ts` with your valid API key:

  ```typescript
  const apiKey = 'your_api_key_here';
  ```

- **Supported File Types**: The extension is configured to work with `.js` and `.ts` files.

## Extension Workflow

1. **Activate Extension**:
   - Tagit activates upon loading, displaying a confirmation message.
   - Inline comment suggestions are enabled for JavaScript and TypeScript files.

2. **Code Processing**:
   - Reads the current line of code and sends it to the AI API.

3. **AI-Generated Comment**:
   - Fetches and displays a JSDoc-style comment suggestion for the selected line.

## Example

### Before:

```javascript
function add(a, b) {
    return a + b;
}
```

### After:

```javascript
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/tagit
   cd tagit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

   ```bash
   npm run compile
   ```

4. Launch the extension in VS Code:

   - Press `F5` to start a new VS Code session with Tagit enabled.

## Known Issues

- Limited token support for large code snippets (truncate code if necessary).
- Requires a valid API key for operation.
- Internet connection is mandatory for API access.

## Roadmap

- Add support for additional languages.
- Enable configuration for custom comment styles.
- Publish to the Visual Studio Code Marketplace.

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature-name"
   ```

4. Push to your fork:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License

Tagit is licensed under the [MIT License](LICENSE).

---

### Enjoy effortless documentation with Tagit! 🚀
