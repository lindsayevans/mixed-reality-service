import { JsonObject } from './json';

/**
 * MRS base response
 */
export default class Response {

    /**
     * Converts Response into a JSON object
     */
    public toJson(): JsonObject {
        return <any> this as JsonObject;
    }

    /**
     * Converts Response into a JSON string
     */
    public serialise(): string {
        return JSON.stringify(this.toJson());
    }

}
