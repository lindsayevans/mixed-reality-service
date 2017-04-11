import LedgerDriver from './ledger';

import {
    Exception,
    Request, Response,
    AddRequest, AddResponse,
    DeleteRequest, DeleteResponse,
    SearchRequest, SearchResponse
} from '../../../models/';

/**
 * Mock ledger driver
 */
export default class MockLedgerDriver extends LedgerDriver {

    constructor(public name: string = 'MockLedgerDriver') {
        super(name);
    }

    /**
     * Adds or updates an MRS record in the ledger
     */
    public async add(request: AddRequest): Promise<AddResponse | Exception> {

        if (request.Latitude === undefined) {
            throw 'Invalid AddRequest';
        }

        let response = await new AddResponse();
        response.Added = request.VerificationToken !== undefined;
        return response;

    }

    /**
     * Deletes an MRS record in the ledger
     */
    public async delete(request: DeleteRequest): Promise<DeleteResponse | Exception> {

        let response = await new DeleteResponse();
        return response;

    }

    /**
     * Searches for an MRS record in the ledger
     */
    public async search(request: SearchRequest): Promise<SearchResponse | Exception> {

        let response = await new SearchResponse();
        return response;

    }
}
