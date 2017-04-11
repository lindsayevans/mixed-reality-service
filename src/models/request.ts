import { JsonObject } from './json';

/**
 * MRS base request
 */
export default class Request {

    /**
     * Converts a JSON object into a Request
     */
    public static fromJson(json: JsonObject): Request {
        return <any> json as Request;
    }

    /**
     * Converts a JSON string into an MRS Request
     */
    public static deserialise(text: string): Request {
        return this.fromJson(JSON.parse(text));
    }

}
