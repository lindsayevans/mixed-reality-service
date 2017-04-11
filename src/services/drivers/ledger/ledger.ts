import {
    Exception,
    Request, Response,
    AddRequest, AddResponse,
    DeleteRequest, DeleteResponse,
    SearchRequest, SearchResponse
} from '../../../models/';

/**
 * Base class for ledger drivers
 */
export default class LedgerDriver {

    constructor(public name: string = 'BaseLedgerDriver') {
        //
    }

    /**
     * Adds or updates an MRS record in the ledger
     */
    public async add(request: AddRequest): Promise<AddResponse | Exception> {

        let response = await new AddResponse();
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
