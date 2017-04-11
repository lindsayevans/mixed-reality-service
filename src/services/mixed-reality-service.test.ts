import { MixedRealityService, Models } from '../';
import MockLedgerDriver from '../services/drivers/ledger/mock-ledger';

let driver: MockLedgerDriver;
let mrs: MixedRealityService;
let addReq: any;
let deleteReq: any;
let searchReq: any;

beforeAll(() => {
  
  // Create a mock ledger driver
  driver = new MockLedgerDriver();

  // Create an instance of MRS service to query
  mrs = new MixedRealityService(driver);

  // Mock add request
  // FIXME: Mock up proper requests & responses here - shouldn't be testing the JSON conversion here
  addReq = {
      add: {
          lat: -33.883882,
          lon: 151.172799,
          ele: 22,
          range: 20,
          FOAD: false,
          Service_Point: 'https://linz.id.au/',
          verification: 'XrKgqLnTDm7mxibLtGPyVwphpp8Cb47sbv'
      }
  };

  deleteReq = {
      delete: JSON.parse(JSON.stringify(addReq.add))
  };

  searchReq = {
      search: {
          lat: -33.883882,
          lon: 151.172799,
          ele: 0,
          range: 0,
      }
  }

});

describe('An MRS `add` operation should...', () => {

  test('succeed when given a valid add request', () => {

    // Test expectation
    return mrs.add(Models.AddRequest.deserialise(JSON.stringify(addReq)))
      .then(response => {
        expect(response).toEqual({
          Added: true
        });
      });

  });

  test('fail gracefully when given an unverified add request', () => {

    delete addReq.add.verification;

    // Test expectation
    return mrs.add(Models.AddRequest.deserialise(JSON.stringify(addReq)))
      .then(response => {
        expect(response).toEqual({
          Added: false
        });
      });

  });

  test('fail when given an invalid add request', () => {

    // Test expectation
    return mrs.add(new Models.AddRequest())
      .catch(exception => {
        expect(exception).toEqual({
          Message: 'Invalid AddRequest'
        });
      });

  });

});


describe('An MRS `delete` operation should...', () => {

  test('succeed when given a valid delete request', () => {

    // Test expectation
    return mrs.delete(Models.DeleteRequest.deserialise(JSON.stringify(deleteReq)))
      .then(response => {
        expect(response).toEqual({
          Removed: true
        });
      });

  });

  test('fail gracefully when given an unverified delete request', () => {

    delete deleteReq.delete.verification;

    // Test expectation
    return mrs.delete(Models.DeleteRequest.deserialise(JSON.stringify(deleteReq)))
      .then(response => {
        expect(response).toEqual({
          Removed: false
        });
      });

  });

  test('fail gracefully when given an unmatching delete request', () => {

    deleteReq.delete.Service_Point = 'http://example.com/';

    // Test expectation
    return mrs.delete(Models.DeleteRequest.deserialise(JSON.stringify(deleteReq)))
      .then(response => {
        expect(response).toEqual({
          Removed: false
        });
      });

  });

  test('fail when given an invalid delete request', () => {

    delete deleteReq.delete.lat;

    // Test expectation
    return mrs.delete(Models.DeleteRequest.deserialise(JSON.stringify(deleteReq)))
      .catch(exception => {
        expect(exception).toEqual({
          Message: 'Invalid DeleteRequest'
        });
      });

  });

});

describe('An MRS `search` operation should...', () => {

  test('return an empty result set', () => {

    // Test expectation
    return mrs.search(Models.SearchRequest.deserialise(JSON.stringify(searchReq)))
      .then(response => {
        expect(response).toEqual({
          NumberMatches: 0
        });
      });

  });

  test('fail when given an invalid search request', () => {

    delete searchReq.search.lat;

    // Test expectation
    return mrs.search(Models.SearchRequest.deserialise(JSON.stringify(searchReq)))
      .catch(exception => {
        expect(exception).toEqual({
          Message: 'Invalid SearchRequest'
        });
      });

  });

});
