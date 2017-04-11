import Record from './record';

/**
 * Authenticated MRS entry
 */
export default class AuthenticatedRecord extends Record {

    /**
     * Encrypted verification token
     */
    public VerificationToken?: string;

}
