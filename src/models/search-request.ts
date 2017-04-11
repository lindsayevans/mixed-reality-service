import { JsonObject } from './json';

import Request from './request';

/**
 * MRS search request
 * 
 * The Mixed Reality Service defines a simple ‘search’ operation mechanism to
interrogate the MRS mapping.
 */
export default class SearchRequest extends Request {

    /**
     * Latitude is defined as a floating point number with five significant digits of
precision, and a range from 90.0 to -90.0 degrees inclusive.
     */
    public Latitude: Number;

    /**
     * Longitude is defined as a floating point number with five significant digits of
precision, and a range from 180.0 to -180.0 degrees inclusive.
     */
    public Longitude: Number;

    /**
     * Elevation is defined as a floating point number with three significant digits of
precision, as meters above sea level (or below sea level, in the case of negative
values).
     */
    public Elevation: Number;

    /**
     * Range is defined as a floating point number with one significant digit of precision.
The range value sets a radius in metres for the discovery query, and must be a
positive number from 0.0 to 1000000.0, setting the maximum range radius for any
discovery request at 1000 kilometers.
     */
    public Range: Number;

    /**
     * Encrypted verification token
     */
    public VerificationToken?: string;

    /**
     * Converts a JSON object into an MRS search request
     */
    public static fromJson(json: JsonObject): SearchRequest {

        // Input format:
        // {
        //     search: {
        //          “lat”: <value>,
        //          “lon”: <value>,
        //          “ele”: <value>,
        //          “range”: <value>
        //     }
        // }

        let request = <SearchRequest> {
            Latitude: json['search']['lat'],
            Longitude: json['search']['lon'],
            Elevation: json['search']['ele'],
            Range: json['search']['range'],
        };

        if (json['search']['verification'] !== undefined) {
            request.VerificationToken = json['search']['verification'];
        }

        return request;
    }

    /**
     * Converts a JSON string into an MRS search request
     */
    public static deserialise(text: string): SearchRequest {
        return this.fromJson(JSON.parse(text));
    }

}
