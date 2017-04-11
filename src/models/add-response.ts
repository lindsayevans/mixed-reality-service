import { JsonObject } from './json';

import Response from './response';

/**
 * MRS add response
 */
export default class AddResponse extends Response {

    /**
     * The MRS endpoint transmits a response to the ‘add’ request with a one required
field, ‘added’. If the ‘add’ request has been successfully added to the MRS mapping,
‘added’ returns TRUE. If the MRS mapping was not successful, ‘added’ returns FALSE.
     */
    Added: boolean = false;

    /**
     * Converts this MRS add response into a JSON object
     */
    public toJson(): JsonObject {

        // Output format:
        // {
        //     “response”: {
        //         “added”: <boolean>
        //     }
        // }

        let response = {
            'response': {
                'added': this.Added
            }
        };

        return response;
    }

}
