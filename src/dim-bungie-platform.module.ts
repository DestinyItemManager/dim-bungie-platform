module DimBungiePlatformModule {
  angular.module('dimBungiePlatform', []);

  export var getModule: () => ng.IModule = () => {
    return angular.module('dimBungiePlatform');
  }
}
