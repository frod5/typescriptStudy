/**
 * exclude type
 */
type NoString = Exclude<string|boolean|number, string>

type NoFunction = Exclude<string | (() => {}), Function>;