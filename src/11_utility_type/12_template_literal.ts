/**
 * template literal
 */
type Frod = 'Frod';

//upper case
type FrodUpperCase = Uppercase<Frod>;

//lower case
type FrodLowerCase = Lowercase<FrodUpperCase>;

// capitalize
type FrodCapital = Capitalize<FrodLowerCase>

// uncaptialize
type FrodUnCapital = Uncapitalize<FrodCapital>