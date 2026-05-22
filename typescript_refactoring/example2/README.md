# Tea Service TypeScript Refactoring Exercise

This exercise is designed to test a candidate's ability to identify and fix bugs, code quality issues, and TypeScript-specific problems.

## Structure

- `commented/` - Contains the exercise code with comments pointing out issues
- `test/` - Contains the same exercise code without comments for candidates
- `solution/` - Contains one example refactoring of the exercise

## Issues to Find and Fix

### TypeScript-Specific Issues:
1. **Missing Types**: Several parameters and return types are missing or use `any`
2. **Let vs Const**: Using `let` for variables that should be `const`
3. **String Comparison**: Using `==` instead of `===` for string comparisons
4. **Missing Return Types**: Methods missing explicit return type annotations

### Code Quality Issues:
1. **Public Properties**: Class properties should be private
2. **Missing Braces**: If statement without braces causing logic bugs
3. **Performance Issues**: Repeatedly growing a large string inside a loop
4. **Unused Parameters**: Parameters that are declared but not used
5. **Complex Calculations**: Overly complex mathematical expressions
6. **Magic Numbers**: Hard-coded values without constants
7. **Poor Error Handling**: No validation or error handling

### Design Issues:
1. **Too Many Parameters**: Methods with too many parameters should use objects
2. **Return Types**: Returning `any` instead of specific types
3. **Static Methods**: Overuse of static methods
4. **String Parsing**: Using string splitting instead of proper objects

### Logic Bugs:
1. **Incorrect Tea Type**: Passing wrong tea type in client code
2. **Array Index Access**: Accessing array indices without bounds checking
3. **Calculation Errors**: Incorrect mathematical operations
4. **Missing Validation**: No input validation

## Running the Code

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run the test version
npm run dev
```

## Expected Improvements

Candidates should be able to:
1. Identify and fix TypeScript type issues
2. Replace `let` with `const` where appropriate
3. Fix string comparison operators
4. Add proper return type annotations
5. Refactor methods to use objects instead of many parameters
6. Fix logic bugs and add error handling
7. Improve performance by using proper data structures
8. Add input validation and error handling
9. Create proper interfaces and types
10. Fix the missing braces bug in the if statement 