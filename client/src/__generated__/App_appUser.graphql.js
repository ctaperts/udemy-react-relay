/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Home_userToGreet$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_appUser$ref: FragmentReference;
export type App_appUser = {|
  +$fragmentRefs: Home_userToGreet$ref,
  +$refType: App_appUser$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "App_appUser",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Home_userToGreet",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '713ce89858630b70523dab8008ab482d';
module.exports = node;
