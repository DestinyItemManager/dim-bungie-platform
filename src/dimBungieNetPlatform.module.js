import endpoints from "./bungieNetPlatform";

angular.module("dimBungieNetPlatform", []);

angular.module("dimBungieNetPlatform")
  .constant("dimBungieNetPlatform.config", config);

let config = endpoints();
