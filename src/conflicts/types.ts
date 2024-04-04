// PathMark: ./src/conflicts/types.ts
export type Combinations = Array<
  Array<{
    location: string;
    name: string;
  }>
>;
export type Rule = number | number[] | string | string[];

export type ConflictCache = Record<string, Record<string, Rule>>;
export type DiffReturn = Promise<[string | undefined, string | undefined]>;
export interface SuggestionResult {
  desc: string;
  fix: {
    range: [number, number];
    text: string;
  };
  messageId?: string;
}

export interface LintMessage {
  column: number | undefined;
  endColumn?: number;
  endLine?: number;
  fatal?: boolean;
  fix?: {
    range: [number, number];
    text: string;
  };
  line: number | undefined;
  message: string;
  messageId?: string;
  nodeType?: null | string;
  ruleId: null | string;
  severity: 0 | 1 | 2;
  suggestions?: SuggestionResult[];
}

export interface LintResult {
  errorCount: number;
  fatalErrorCount: number;
  filePath: string;
  fixableErrorCount: number;
  fixableWarningCount: number;
  messages?: LintMessage[];
  output?: string;
  source?: string;
  warningCount: number;
}

export interface ConfigData {
  rules?: Record<string, Rule>;
}

export interface Files {
  filePath: string;
}

export interface IFlatESLint {
  calculateConfigForFile: (filePath: string) => Promise<ConfigData | undefined>;
  lintText: (
    code: string,
    options?: { filePath?: string; warnIgnored?: boolean },
  ) => Promise<LintResult[]>;
}
// EOF
