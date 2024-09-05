/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<de9a2c3121666e0ed6bb921eb1e62c3f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { Result } from "relay-runtime";
import {client_object as userClientObjectResolverType} from "../resolvers/UserClientEdgeClientObjectResolver.js";
import type { TestResolverContextType } from "../../../mutations/__tests__/TestResolverContextType";
// Type assertion validating that `userClientObjectResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userClientObjectResolverType: (
  args: {|
    return_null: boolean,
  |},
  context: TestResolverContextType,
) => ?User__client_object$normalization);
import type { User__client_object$normalization } from "./../resolvers/__generated__/User__client_object$normalization.graphql";
export type RelayReaderRequiredFieldsTest31Query$variables = {||};
export type RelayReaderRequiredFieldsTest31Query$data = {|
  +me: Result<?{|
    +client_object: {|
      +description: ?string,
    |},
  |}, $ReadOnlyArray<mixed>>,
|};
export type RelayReaderRequiredFieldsTest31Query = {|
  response: RelayReaderRequiredFieldsTest31Query$data,
  variables: RelayReaderRequiredFieldsTest31Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "return_null",
    "value": true
  }
],
v1 = {
  "alias": null,
  "args": (v0/*: any*/),
  "concreteType": "ClientObject",
  "kind": "LinkedField",
  "name": "client_object",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "storageKey": "client_object(return_null:true)"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true,
      "throwOnFieldError": true
    },
    "name": "RelayReaderRequiredFieldsTest31Query",
    "selections": [
      {
        "kind": "CatchField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "me",
          "plural": false,
          "selections": [
            {
              "kind": "RequiredField",
              "field": {
                "kind": "ClientEdgeToClientObject",
                "concreteType": "ClientObject",
                "modelResolvers": null,
                "backingField": {
                  "alias": null,
                  "args": (v0/*: any*/),
                  "fragment": null,
                  "kind": "RelayResolver",
                  "name": "client_object",
                  "resolverModule": require('./../resolvers/UserClientEdgeClientObjectResolver').client_object,
                  "path": "me.client_object",
                  "normalizationInfo": {
                    "kind": "OutputType",
                    "concreteType": "ClientObject",
                    "plural": false,
                    "normalizationNode": require('./../resolvers/__generated__/User__client_object$normalization.graphql')
                  }
                },
                "linkedField": (v1/*: any*/)
              },
              "action": "THROW",
              "path": "me.client_object"
            }
          ],
          "storageKey": null
        },
        "to": "RESULT",
        "path": "me"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReaderRequiredFieldsTest31Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ClientEdgeToClientObject",
            "backingField": {
              "name": "client_object",
              "args": (v0/*: any*/),
              "fragment": null,
              "kind": "RelayResolver",
              "storageKey": "client_object(return_null:true)",
              "isOutputType": true
            },
            "linkedField": (v1/*: any*/)
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2b6da0801137cdbfe010551e214124af",
    "id": null,
    "metadata": {},
    "name": "RelayReaderRequiredFieldsTest31Query",
    "operationKind": "query",
    "text": "query RelayReaderRequiredFieldsTest31Query {\n  me {\n    id\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "f123a3d8f03fd4cd3a19ccd86231d743";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderRequiredFieldsTest31Query$variables,
  RelayReaderRequiredFieldsTest31Query$data,
>*/);
