import * as vscode from 'vscode';
import { parseA0 } from './Hytek.A0';
import { parseB1 } from './Hytek.B1';
import { parseB2 } from './Hytek.B2';
import { parseC1 } from './Hytek.C1';
import { parseC2 } from './Hytek.C2';
import { parseD0 } from './Hytek.D0';
import { parseD1 } from './Hytek.D1';
import { parseD2 } from './Hytek.D2';
import { parseD3 } from './Hytek.D3';
import { parseE0 } from './Hytek.E0';
import { parseF0 } from './Hytek.F0';
import { parseG0 } from './Hytek.G0';
import { parseZ0 } from './Hytel.Z0';
import { Entry, getCurrentLine, HytekParser, LineProviderQueue } from './utils';


const parsers: { [key: string]: HytekParser } = {
    A0: parseA0,
    B1: parseB1,
    B2: parseB2,
    C1: parseC1,
    C2: parseC2,
    D0: parseD0,
    D1: parseD1,
    D2: parseD2,
    D3: parseD3,
    E0: parseE0,
    F0: parseF0,
    G0: parseG0,
    Z0: parseZ0,
};

const grammar = LineProviderQueue.getGrammar();
const grammarString = JSON.stringify(grammar);
// process.stdout.write(grammarString + '\n');

export class HytekPeekProvider implements vscode.TreeDataProvider<Entry> {
    onDidChangeTreeData?: vscode.Event<void | Entry | Entry[] | null | undefined> | undefined;
    
    getTreeItem(element: Entry): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: Entry): vscode.ProviderResult<Entry[]> {
        const { line, text, character } = getCurrentLine();
        if (line === -1) {
            return [];
        }

        const parser = parsers[text.substring(0, 2)];
        const items = parser ? parser(text) : [];
        items.forEach(item => {
            const { start, length } = item.loc;
            // is selected
            if (character >= start && character < start + length) {
                const oldLabel = item.label as string;
                const complexLabel: vscode.TreeItemLabel = {
                    label: oldLabel,
                    highlights: [[0, oldLabel.length]]
                };
                item.label = complexLabel;
            }
        });
        return items;
    }
}
