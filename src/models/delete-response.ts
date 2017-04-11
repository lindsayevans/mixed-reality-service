import { JsonObject } from './json';

import Response from './response';

/**
 * MRS delete response
 */
export default class DeleteResponse extends Response {

    /**
     * The MRRS endpoint transmits a response to the ‘delete’ request with a one required
field, ‘removed’. If the ‘delete’ request has been successfully deleted from the MRS
mapping, ‘removed’ returns TRUE. If the MRS mapping was not successful deleted,
‘removed’ returns FALSE.
     */
    Removed: boolean = false;

    /**
     * Converts this MRS delete response into a JSON object
     */
    public toJson(): JsonObject {

        // Output format:
        // {
        //     “response”: {
        //         “removed”: <boolean>
        //     }
        // }

        let response = {
            'response': {
                'removed': this.Removed
            }
        };

        return response;
    }

}
