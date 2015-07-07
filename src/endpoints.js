import _ from "lodash";

let get = [{
  "name": "Search",
  "url": "Destiny/SearchDestinyPlayer/${ membershipType }/${ name }/",
  "required": [
    "membershipType",
    "name"
  ]
}, {
  "name": "GetBungieNetUser",
  "url": "User/GetBungieNetUser",
  "required": []
}, {
  "name": "GetMembershipId",
  "url": "Destiny/${ membershipType }/GetMembershipIdByDisplayName/${ displayName }",
  "required": [
    "membershipType",
    "displayName"
  ]
}, {
  "name": "Account",
  "url": "Destiny/${ membershipType }/Account/${ membershipId }",
  "required": [
    "membershipType",
    "membershipId"
  ]
}, {
  "name": "Character",
  "url": "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/?definitions=false",
  "required": [
    "membershipType",
    "membershipId",
    "characterId"
  ]
}, {
  "name": "Vault",
  "url": "Destiny/${ membershipType }/MyAccount/Vault/?definitions=false",
  "required": [
    "membershipType",
    "membershipId",
    "characterId"
  ]
}, {
  "name": "Activities",
  "url": "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Activities",
  "required": [
    "membershipType",
    "membershipId",
    "characterId"
  ]
}, {
  "name": "Inventory",
  "url": "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Inventory",
  "required": [
    "membershipType",
    "membershipId",
    "characterId"
  ]
}, {
  "name": "Progression",
  "url": "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Progression",
  "required": [
    "membershipType",
    "membershipId",
    "characterId"
  ]
}];

let post = [{
  "name": "EquipItem",
  "url": "Destiny/EquipItem",
  "required": [
    "characterId",
    "itemId",
    "membershipType"
  ]
}, {
  "name": "TransferItem",
  "url": "Destiny/TransferItem",
  "required": [
    "characterId",
    "itemId",
    "itemReferenceHash",
    "membershipType"
  ]
}].map(obj => {
  return _.extend(obj, {
    "options": {
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
  });
});

let endpoints = [].concat(get, post);

export default endpoints;
