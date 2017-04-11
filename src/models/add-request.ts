import { JsonObject } from './json';

import AuthenticatedRecord from './authenticated-record';

/**
 * MRS add request
 * 
 * The ‘add’ operation requests that a binding between provided geospatial coordinates
and a URI be added to the MRS mapping.
 */
export default class AddRequest extends AuthenticatedRecord {

    /**
     * Converts a JSON object into an MRS add request
     */
    public static fromJson(json: JsonObject): AddRequest {

        // Input format:
        // {
        //     “add”: {
        //         “lat”: <value>,
        //         “lon”: <value>,
        //         “ele”: <value>,
        //         “range”: <value>,
        //         “FOAD”: <boolean>,
        //         “Service_Point”: <URI>,
        //         “verification”: <data>
        //     }
        // }

        let request = <AddRequest> {
            Latitude: json['add']['lat'],
            Longitude: json['add']['lon'],
            Elevation: json['add']['ele'],
            Range: json['add']['range'],
            Foad: json['add']['FOAD'],
            ServicePoint: json['add']['Service_Point'],
        };

        if (json['add']['verification'] !== undefined) {
            request.VerificationToken = json['add']['verification'];
        }

        return request;
    }

    /**
     * Converts a JSON string to an MRS add request
     */
    public static deserialise(text: string): AddRequest {
        return this.fromJson(JSON.parse(text));
    }

}
