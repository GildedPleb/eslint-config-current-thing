import type { Linter } from "eslint";
import type { Rules } from "eslint-define-config";

// PathMark: ./src/conflicts/types.ts
export type Combinations = Array<
  Array<{
    location: string;
    name: string;
  }>
>;

export interface ConfigData {
  rules?: Linter.RulesRecord;
}

export type ConflictCache = Record<string, Partial<Rules>>;
export type DiffReturn = Promise<[string | undefined, string | undefined]>;

export interface Files {
  filePath: string;
}
export interface IFlatESLint {
  calculateConfigForFile: (filePath: string) => Promise<ConfigData>;
  lintText: (
    code: string,
    options?: { filePath?: string; warnIgnored?: boolean },
  ) => Promise<LintResult[]>;
}
interface LintMessage {
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

interface LintResult {
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

export type RuleConfig = Linter.RuleEntry;

interface SuggestionResult {
  desc: string;
  fix: {
    range: [number, number];
    text: string;
  };
  messageId?: string;
}
// EOF
