/**
 * extract type
 */

type StringOnly = Extract<string|boolean|number, string>

type FunctionOnly = Extract<string | (() => void), Function>;