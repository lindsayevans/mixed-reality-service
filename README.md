# Mixed Reality Service

ES6/TypeScript library implementation of the [Mixed Reality Service](https://mixedrealitysystem.org/) (MRS).

Based on the [third draft of the MRS specification](https://mixedrealitysystem.org/spec/Mixed_Reality_Service_Specification_THIRD_DRAFT.pdf).

## Questions about the spec
* Can a search operation be authenticated? (for example to return ServicePoint if FOAD == true & authenticated)
* Does range in a search operation take elevation into account?
* What search fields are required/optional?

## Features
* Core MRS logic
* Datatype conversion (JSON to/from strongly typed TS)
* Communication with distributed ledger via driver plugins
* Authentication of add/delete requests (TODO)
* Local cache (based on MongoDB) for fast search requests (TODO)

### Things it _doesn't_ include
* An actual endpoint you can make requests to (TODO: example app)
* A distributed ledger (Openchain, Hyperledger etc.)

## Installation

TODO: Publish to NPM

```bash
npm install mixed-reality-service --save
```

## Usage

### JavaScript (NodeJS, might work in browser if Babel-ified?)

```javascript
const MixedRealityService = require('mixed-reality-service');
const AddRequest = require('mixed-reality-service/models/add-request');
const OpenchainDriver = require('mixed-reality-service/services/drivers/openchain');

const ledgerDriver = new OpenchainDriver('https://openchain.server:8080/');
const mrs = new MixedRealityService(ledgerDriver);

mrs.add(AddRequest.deserialise(someJson));
```

### TypeScript

Includes TypeScript definitions, so the following should work:

```typescript
import { MixedRealityService, OpenchainDriver, AddRequest } from 'mixed-reality-service';

const ledgerDriver = new OpenchainDriver('https://openchain.server:8080/');
const mrs = new MixedRealityService(ledgerDriver);

mrs.add(AddRequest.deserialise(someJson));
```

## Contributing

### TODO:
* Prerequisites
  * Node/Yarn
  * Ledger
  * Cache DB
* Building
  * Source
  * Docs
* npm link etc.
* Code style etc.
* Testing/linting
* Gitflow
