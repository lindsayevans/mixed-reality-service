/**
 * Strict JSON Types
 * 
 * Enforces strict typing of names & values in JSON objects
 * http://json.org/
 * 
// TODO: 
// * Add to DefinitelyTyped?
// * Should this override ES6 lib JSON interface to make JSON methods use these types?
 */

export { Json, JsonObject, JsonArray, JsonValue };

/**
 * JSON
 * 
 * JSON can either be a JSON Object, or an array of JSON objects (or an array of values)
 */
type Json = JsonObject | JsonArray;

/**
 * JSON Object
 * 
 * A collection of name/value pairs.
 * In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
 *
 * TODO:
 * * Figure out how we can access JSON properties using dot notation to remove 'any'
 *   - Apparently this should work in TS 2.2?
*/
interface JsonObject {
    [name: string]: JsonValue;
}

/**
 * JSON Array
 * 
 * An ordered list of values.
 * In most languages, this is realized as an array, vector, list, or sequence.
 */
type JsonArray = Array<JsonValue>;

/**
 * JSON value
 * 
 * A value can be a string in double quotes, or a number, or true or false or null, or an object or an array.
 * These structures can be nested.
 */
type JsonValue = string | Number | JsonObject | Array<JsonObject> | true | false | null;
