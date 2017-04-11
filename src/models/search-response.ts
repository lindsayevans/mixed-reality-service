import { JsonObject } from './json';
import Response from './response';
import Record from './record';

/**
 * MRS search response
 */
export default class SearchResponse extends Response {

    /**
     * Number of matches is defined as the number of intersections between the parameters
in the discovery request and the MRRS data set. It is an integer value, set to zero
if there are no matches, a positive integer if matches have been found, or -1 if an
error has occurred.
     */
    NumberMatches: number = 0;

    /**
     * List of matches is defined as an array of data representing the specific information
about each match found during the MRS ‘search’ request. If Number of Matches is zero
or negative, List of Matches should be omitted from the response.
     */
    Matching: Array<Record>;

    /**
     * Converts this MRS Response into a JSON object
     */
    public toJson(): JsonObject {

        // Output format:
        // {
        //     “response”: {
        //          “matches”: <value>,
        //          “matching”: [ array of entries... ]
        //     }
        // }

        return <JsonObject> {
            'response': {
                'matches': this.Matching.length,
                'matching': this.Matching.map(record => record.toJson())
            }
        };

    }

    /**
     * Converts this MRS Response into a JSON string
     */
    public serialise(): string {
        return JSON.stringify(this.toJson());
    }

}
