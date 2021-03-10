// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "oj-vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('oj-vscode.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from oj-vscode!');
	});

	const accNewAll = vscode.commands.registerCommand("oj-vscode.accNewAll", () => {
		const a: [number, number] = [1, 2];
		const inputBoxOptions = {
			ignoreFocusOut: true,
			placeHolder: "コンテストの名前を入れてください。",
			prompt: "これどこだ。",
			value: "apple apple",
			valueSelection: a,
		};
		const inputBox = vscode.window.showInputBox(inputBoxOptions);

		//vscode.window.showInformationMessage('Hello World acc!');
		inputBox.then((contestName: string | undefined) => {
			const terminal = vscode.window.createTerminal("Code");
			terminal.show();
			terminal.sendText(`echo ${contestName}`);
		});
	});

	const accNew = vscode.commands.registerCommand("oj-vscode.accNew", () => {
		const items = ["Problem A", "Problem B"]
		const quickPick = vscode.window.showQuickPick(items);
		quickPick.then((contestProblem: string | undefined) => {
			const terminal = vscode.window.createTerminal("Code");
			terminal.show();
			terminal.sendText(`echo ${contestProblem}`);
		});
	});

	context.subscriptions.push(disposable, accNewAll, accNew);
}

// this method is called when your extension is deactivated
export function deactivate() { }
