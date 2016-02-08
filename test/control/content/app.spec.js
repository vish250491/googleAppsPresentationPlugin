describe('Unit: googleAppsPresentationPluginContent content app', function () {
  describe('Unit: app', function () {
    beforeEach(module('googleAppsPresentationPluginContent'));
    var location, route, rootScope;
    beforeEach(inject(function () {

    }));
      var ContentHome, scope, $rootScope, $controller, Buildfire, ActionItems, TAG_NAMES, STATUS_CODE, LAYOUTS, STATUS_MESSAGES, CONTENT_TYPE, q, Utils;

    beforeEach(inject(function (_Utils_, _$rootScope_, _$q_, _$controller_, _TAG_NAMES_) {
      $rootScope = _$rootScope_;
      q = _$q_;
      scope = $rootScope.$new();
      $controller = _$controller_;
      TAG_NAMES = _TAG_NAMES_;
      Utils = _Utils_;
      Buildfire = {
        components: {
          carousel: {
            editor: function (name) {
              return {}
            },
            viewer: function (name) {
              return {}
            }
          }

        },     spinner: {
          hide: function () {
            return {}
          },
          show: function () {
            return {}
          }

        }
      };
    }));

    beforeEach(function () {
      ContentHome = $controller('ContentHomeCtrl', {
        $scope: scope,
        Buildfire: Buildfire,
        TAG_NAMES: TAG_NAMES,
        Utils:Utils
      });
    });
    describe('It will test the defined methods', function () {

      it('it should pass if ContentHome is defined', function () {
        expect(ContentHome).not.toBeUndefined();
      });
      it('it should pass if clearData is called', function () {
        ContentHome.clearData();
      });

      it('it should pass if ContentHome.validateUrl is called with success', function () {
        ContentHome.validateUrl();
        var result  = true;
        ContentHome.success({data:{content:{}}});
      });

      it('it should pass if ContentHome.validateUrl is called with success', function () {
        ContentHome.validateUrl();
        var result  = true;
        ContentHome.error({data:{content:{}}});
      });

      it('it should pass if ContentHome.validateUrl is called with error', function () {
        ContentHome.validateUrl();
        ContentHome.error(null);
      });

      it('it should pass if ContentHome.init is called', function () {

        ContentHome.init();
        var result  = true;
        ContentHome.error(null);
      });

      it('it should pass if ContentHome.init is called', function () {
        ContentHome.dummydata = {
          content:{
            url:null
          }
        };
        ContentHome.init();
        var data = {};
        ContentHome.success();
        expect(ContentHome.data).toEqual(ContentHome.dummydata)
      });
    });

  });
});