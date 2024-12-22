import * as vscode from 'vscode';
import axios from 'axios';

async function fetchAIComment(selectedCode: string): Promise<string> {
    const apiKey = 'd2669f8ec25e41c886293c494899422b'; 
    try {
        const response = await axios.post(
            'https://api.aimlapi.com/v1/chat/completions', 
            {
                model: "gpt-3.5-turbo-1106",
                messages: [
                    { role: "system", content: "You are a code commentator, create JSDoc-style comments for the code." },
                    { role: "user", content: selectedCode },
                ],
                temperature: 0.7,
                max_tokens: 100,
            },
            {
                headers: { Authorization: `Bearer ${apiKey}` },
            }
        );

        if (response.data.choices && response.data.choices.length > 0) {
            return response.data.choices[0].message.content.trim();
        } else {
            throw new Error('No AI response received.');
        }
    } catch (error: any) {
        console.error('Error calling AI API:', error.message || error);
        throw new Error('Failed to fetch AI comment. Please check your API key, network connection, or API configuration.');
    }
}

export function activate(context: vscode.ExtensionContext) {
    const provider: vscode.InlineCompletionItemProvider = {
        async provideInlineCompletionItems(document, position, context, token) {
            try {
                // Get the current line's text
                const lineText = document.lineAt(position).text.trim();
                if (!lineText) {return { items: [] };}

                const aiComment = await fetchAIComment(lineText);

                // Create inline completion item
                return {
                    items: [
                        {
                            insertText: `// ${aiComment}`,
                            range: new vscode.Range(position, position),
                        },
                    ],
                };
            } catch (error: any) {
                console.error('Error fetching AI comment:', error.message || error);
                return { items: [] };
            }
        },
    };

    // Register the inline completion provider
    const disposable = vscode.languages.registerInlineCompletionItemProvider(
        { pattern: '**/*.{js,ts}' },
        provider
    );

    context.subscriptions.push(disposable);
    vscode.window.showInformationMessage('Inline comment suggestion activated!');
}

export function deactivate() {}
