import { MixedRealityService, Models } from '../';
import MockLedgerDriver from '../services/drivers/ledger/mock-ledger';

let driver: MockLedgerDriver;
let mrs: MixedRealityService;
let addReq: Models.AddRequest;
let deleteReq: Models.DeleteRequest;
let searchReq: Models.SearchRequest;

beforeAll(() => {
  
  // Create a mock ledger driver
  driver = new MockLedgerDriver();

  // Create an instance of MRS service to query
  mrs = new MixedRealityService(driver);

  // Mock add request
  addReq = new Models.AddRequest();
  addReq.Latitude = -33.883882;
  addReq.Longitude = 151.172799;
  addReq.Elevation = 22;
  addReq.Range = 20;
  addReq.Foad = false;
  addReq.ServicePoint = new URL('https://linz.id.au/');
  addReq.VerificationToken = 'Hi, my name is Lindsay Evans. My voice is my passport. Verify Me.';

  // Mock delete request
  deleteReq = new Models.DeleteRequest();
  deleteReq = JSON.parse(JSON.stringify(addReq));

  // Mock search request
  searchReq = new Models.SearchRequest();
  searchReq.Latitude = -33.883882;
  searchReq.Longitude = 151.172799;
  searchReq.Elevation = 0;
  searchReq.Range = 0;

});

describe('An MRS `add` operation should...', () => {

  test('succeed when given a valid add request', () => {

    // Test expectation
    return mrs.add(addReq)
      .then(response => {
        expect(response).toEqual({
          Added: true
        });
      });

  });

  test('fail gracefully when given an unverified add request', () => {

    delete addReq.VerificationToken;

    // Test expectation
    return mrs.add(addReq)
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
    return mrs.delete(deleteReq)
      .then(response => {
        expect(response).toEqual({
          Removed: true
        });
      });

  });

  test('fail gracefully when given an unverified delete request', () => {

    delete deleteReq.VerificationToken

    // Test expectation
    return mrs.delete(deleteReq)
      .then(response => {
        expect(response).toEqual({
          Removed: false
        });
      });

  });

  test('fail gracefully when given an unmatching delete request', () => {

    deleteReq.ServicePoint = new URL('http://example.com/');

    // Test expectation
    return mrs.delete(deleteReq)
      .then(response => {
        expect(response).toEqual({
          Removed: false
        });
      });

  });

  test('fail when given an invalid delete request', () => {

    delete deleteReq.Latitude;

    // Test expectation
    return mrs.delete(deleteReq)
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
    return mrs.search(searchReq)
      .then(response => {
        expect(response).toEqual({
          NumberMatches: 0
        });
      });

  });

  test('fail when given an invalid search request', () => {

    delete searchReq.Latitude

    // Test expectation
    return mrs.search(searchReq)
      .catch(exception => {
        expect(exception).toEqual({
          Message: 'Invalid SearchRequest'
        });
      });

  });

});
