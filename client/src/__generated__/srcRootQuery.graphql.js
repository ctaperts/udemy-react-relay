/**
 * @flow
 * @relayHash 232c59ba14819c5da4eb023100cb55fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_appUser$ref = any;
export type srcRootQueryVariables = {||};
export type srcRootQueryResponse = {|
  +random_label2: ?{|
    +$fragmentRefs: App_appUser$ref
  |}
|};
export type srcRootQuery = {|
  variables: srcRootQueryVariables,
  response: srcRootQueryResponse,
|};
*/


/*
query srcRootQuery {
  random_label2: myuser(name: "Colby") {
    ...App_appUser
  }
}

fragment App_appUser on Viewer {
  ...Home_userToGreet
}

fragment Home_userToGreet on Viewer {
  user {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "Colby",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "srcRootQuery",
  "id": null,
  "text": "query srcRootQuery {\n  random_label2: myuser(name: \"Colby\") {\n    ...App_appUser\n  }\n}\n\nfragment App_appUser on Viewer {\n  ...Home_userToGreet\n}\n\nfragment Home_userToGreet on Viewer {\n  user {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "srcRootQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "random_label2",
        "name": "__myuser_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "App_appUser",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "srcRootQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "random_label2",
        "name": "myuser",
        "storageKey": "myuser(name:\"Colby\")",
        "args": v0,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": "random_label2",
        "name": "myuser",
        "args": v0,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f81ba4abd335d4ec32851584bbb5ac32';
module.exports = node;
