import { JsonObject } from './json';

import Record from './record';

/**
 * MRS delete request
 * 
 * A ‘delete’ operation requests that the existing MRS mapping between a set of
geospatial coordinates and a URI be removed.
 * 
 * In order to uniquely determine the MRS mapping to be removed, the same set of data
used to create the mapping in an ‘add’ operation must be provided to the ‘delete’
operation.
 */
export default class DeleteRequest extends Record {

    /**
     * Encrypted verification token
     */
    public VerificationToken?: string;

    /**
     * Converts a JSON object into an MRS delete request
     */
    public static fromJson(json: JsonObject): DeleteRequest {

        // Input format:
        // {
        //     delete: {
        //         “lat”: <value>,
        //         “lon”: <value>,
        //         “ele”: <value>,
        //         “range”: <value>,
        //         “FOAD”: <boolean>,
        //         “Service_Point”: <URI>,
        //         “verification”: <data>
        //     }
        // }

        let request = <DeleteRequest> {
            Latitude: json['delete']['lat'],
            Longitude: json['delete']['lon'],
            Elevation: json['delete']['ele'],
            Range: json['delete']['range'],
            Foad: json['delete']['FOAD'],
            ServicePoint: json['delete']['Service_Point'],
        };

        if (json['delete']['verification'] !== undefined) {
            request.VerificationToken = json['delete']['verification'];
        }

        return request;
    }

    /**
     * Converts a JSON string into an MRS delete request
     */
    public static deserialise(text: string): DeleteRequest {
        return this.fromJson(JSON.parse(text));
    }

}
