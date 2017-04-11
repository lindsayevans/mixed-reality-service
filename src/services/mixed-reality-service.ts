import {
    Exception,
    AddRequest, AddResponse,
    DeleteRequest, DeleteResponse,
    SearchRequest, SearchResponse
} from '../models/';

import LedgerDriver from './drivers/ledger/ledger';

/**
 * Mixed Reality Service operations
 */
export default class MixedRealityService {

    // TODO: DI driver
    constructor(public driver?: LedgerDriver) {
        
    }

    /**
     * add
     */
    public async add(request: AddRequest): Promise<AddResponse | Exception> {

        // TODO:
        // Authentication - use driver auth method?
        try {
             let response = await this.driver.add(request);
             return response;
        } catch (e) {
             throw <Exception> {
                 Message: e
             }
        }

    }

    /**
     * delete
     */
    public async delete(request: DeleteRequest): Promise<DeleteResponse | Exception> {

        // TODO:
        // Authentication - use driver auth method?
        try {
             let response = await this.driver.delete(request);
             return response;
        } catch (e) {
             throw <Exception> {
                 Message: e
             }
        }

    }

    /**
     * search
     */
    public async search(request: SearchRequest): Promise<SearchResponse | Exception> {

        // TODO:
        // Authentication - do we need it for search?
        try {
             let response = await this.driver.search(request);
             return response;
        } catch (e) {
             throw <Exception> {
                 Message: e
             }
        }

    }

}
