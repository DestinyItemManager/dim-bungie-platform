import endpoints from "./endpoints";
import _ from "lodash";

let createRequests = (host, lib, method) => {
  let template = _.template(method.url);

  lib[method.name] = (params, headers) => {
    //params = await Promise.resolve(params);

    if (!_.isObject(params)) {
      throw new Error(`Argument must be an Object containing: ${ method.required.join(", ") }.`);
    }

    return {
      url: host + template(params),
      headers: headers,
      body: {

      }
    };
  };

  return lib;
};

let bungieNetPlatformApi = (host = "https://www.bungie.net/Platform/") => {
  return endpoints.reduce(createRequests.bind(null, host), {});
};

export default bungieNetPlatformApi;
