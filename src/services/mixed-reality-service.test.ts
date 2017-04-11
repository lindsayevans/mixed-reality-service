import { MixedRealityService, Models } from '../';
import MockLedgerDriver from '../services/drivers/ledger/mock-ledger';

let driver: MockLedgerDriver;
let mrs: MixedRealityService;
let addReq: any;

beforeAll(() => {
  
  // Create a mock ledger driver
  driver = new MockLedgerDriver();

  // Create an instance of MRS service to query
  mrs = new MixedRealityService(driver);

  // Mock add request
  // TODO: Mock up proper requests & responses here - shouldn't be testing the JSON conversion here
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

});

describe('An MRS `add` operation should...', () => {

  test('suceed when given a valid add request', () => {

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
