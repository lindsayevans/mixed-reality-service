import { JsonObject } from './json';

/**
 * MRS record
 */
export default class Record {

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
     * Range is defined as an floating point number with one significant digit of
precision, the radius of a circular area whose center is described by the Latitude,
Longitude and Elevation values. Range must be expressed as a positive number from
0.0 to 1000000.0, setting the maximum radius for any mapping at 1000 kilometers.
     */
    public Range: Number;

    /**
     * FOAD is a binary flag. If TRUE, the MRS mapping requests strict privacy and will
provide no information about itself via a service point. Where FOAD is TRUE, the
Service Point field is optional and undefined.
     */
    public Foad: boolean;

    /**
     * Service Point is defined as a URI as specified in IETF RFC 3986. It is strongly
recommended that the Service Point resolve to a valid MRSE interrogation point, but
the Service Point may be any well-formed URI. Where FOAD is TRUE, the Service Point
field is optional and undefined.
     */
    public ServicePoint: URL;

    /**
     * Converts this MRS record to a JSON object
     */
    public toJson(): JsonObject {

        // Output format:
        // {
        //     “lat”: <value>,
        //     “lon”: <value>,
        //     “ele”: <value>,
        //     “range”: <value>,
        //     “FOAD”: <boolean>,
        //     “Service_Point”: <URI>
        // }

        return <JsonObject> {
            'lat': this.Latitude,
            'lon': this.Longitude,
            'ele': this.Elevation,
            'range': this.Range,
            'FOAD': this.Foad,
            'Service_Point': this.ServicePoint.toString(),
        };
    }

}
