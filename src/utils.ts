import * as vscode from 'vscode';


export const getCurrentLine = () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor !== undefined) {
        const line = activeEditor.selection.active.line;
        const text = activeEditor.document.lineAt(line).text;
        const character = activeEditor.selection.active.character;
        return { text, line, character };
    }
    return { text: '', line: -1, character: -1 };
};

export interface Entry extends vscode.TreeItem {
    loc: HytekItem;
}

export type HytekParser = (line: string) => Entry[];
export interface HytekItem 
{
    start: number;
    length: number;
    label: string;
}

export class LineProvider {
    private line: string;
    constructor(line: string) {
        let l = " " + line;
        if (l.length < 180) {
            l = l + Array(180 - l.length).join(" ");
        }
        this.line = l;
    }

    public at(start: number, length: number): string {
        const text = this.line.substring(start, start + length).trim();
        return text.length > 0 ? text : '""'
    }

    public entry(start: number, length: number, label: string): Entry {
        const entry: Entry = {
            label: this.at(start, length),
            description: label,
            loc: { start, length, label }
        };
        if (label.includes("SEX")) {
            entry.iconPath = new vscode.ThemeIcon("heart");
        }
        if (label.includes("swimmer name")) {
            entry.iconPath = new vscode.ThemeIcon("account");
        }
        if (label.includes("time")) {
            entry.iconPath = new vscode.ThemeIcon("graph");
        }
        if (label.includes("date")) {
            entry.iconPath = new vscode.ThemeIcon("calendar");
        }
        return entry;
    }
}

export class LineProviderQueue {
    private static providers: LineProviderQueue[] = [];

    constructor(public id: string) {
        LineProviderQueue.providers.push(this);
    }

    public steps: HytekItem[] = [];

    public entry(start: number, length: number, label: string): LineProviderQueue {
        this.steps.push({ start, length, label });
        return this;
    }

    public execute(line: string): Entry[] {
        const lp = new LineProvider(line);
        const entries: Entry[] = [];
        for (const step of this.steps) {
            entries.push(lp.entry(step.start, step.length, step.label));
        }
        return entries;
    }

    private getMatch(): string {
        let str = "^";
        str += this.id;
        let index = 1;
        let len = 0;
        for (const step of this.steps) {
            if (index > 1) {
                str += `(.{${step.length}})`;
                len += step.length;
                if (len > 150) {
                    str += "?";
                }
            }
            index++;
        }

        str += "";
        return str;
    }

    private getCaptures() {
        const names = [
            "keyword.control.export.ts", // purple
            "entity.name.function.ts",  // yellow
            "variable.other.constant.ts", // blue
            "string.quoted.single.ts", // orange
            "entity.name.type.class",   // green

        ]
        const captures = { } as any;
        let index = 1;
        for (const step of this.steps) {
            if (index > 1) {
                captures[(index-1).toString()] ={
                    name: names[index % names.length],
                }
            }
            index++;
        }
        return captures;
    }

    public describe() {
        const item = {
            match: this.getMatch(),
            captures: this.getCaptures(),
        }

        return item;
    }

    public static getGrammar() {
        const result = {
            scopeName: "source.cl2",
            repository: {},
            patterns: [],
        } as any;

        for (const provider of LineProviderQueue.providers) {
            result.repository[`tag-${provider.id}`] = provider.describe();
            result.patterns.push({
                include: `#tag-${provider.id}`,
            });
        }

        return result;
    }
}