/**
 * Base exception class
 */
export default class Exception {

    constructor(message?: string) {
        this.Message = message;
    }

    Message: string;
}
