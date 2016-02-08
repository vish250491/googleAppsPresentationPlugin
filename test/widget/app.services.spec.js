describe('Unit: googleAppsPresentationWidget: Services', function () {
    beforeEach(module('googleAppsPresentationWidget'));


  describe('Unit : Buildfire service', function () {
    var Buildfire;
    beforeEach(inject(
        function (_Buildfire_) {
          Buildfire = _Buildfire_;
        }));
    it('Buildfire should exists', function () {
      expect(Buildfire).toBeDefined();
    });
  });

  describe('Unit : DataStore Factory', function () {
    var DataStore, Buildfire, STATUS_MESSAGES, STATUS_CODE, q, TAG_NAMES, $rootScope, Utils;
    beforeEach(module('googleAppsPresentationWidget', function ($provide) {
      $provide.service('Buildfire', function () {
        this.datastore = jasmine.createSpyObj('datastore', ['get', 'onUpdate']);
        this.datastore.get.and.callFake(function (_tagName, callback) {
          if (_tagName) {
            callback(null, 'Success');
          } else {
            callback('Error', null);
          }
        });
         this.datastore.onUpdate.and.callFake(function (id, _tagName, callback) {
          if (id, _tagName) {
            callback();
          }
        });
      });
    }));


    beforeEach(module('googleAppsPresentationWidget'));
    beforeEach(inject(function (_DataStore_, _STATUS_CODE_, _STATUS_MESSAGES_, _TAG_NAMES_, _$rootScope_) {
      DataStore = _DataStore_;
      STATUS_CODE = _STATUS_CODE_;
      STATUS_MESSAGES = _STATUS_MESSAGES_;
      TAG_NAMES = _TAG_NAMES_;
      $rootScope = _$rootScope_;
      Buildfire = {
        datastore: {}
      };


    }));
  it('DataStore should exist and be an object', function () {
    expect(typeof DataStore).toEqual('object');
  });
  it('DataStore.update should exist and be a function', function () {
    expect(typeof DataStore.onUpdate).toEqual('function');
  });


    it('DataStore.get should return error', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.get(null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Error');
    });
    it('DataStore.get should return success', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.get(TAG_NAMES.GOOGLE_APPS_PRESENTATION_INFO).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Success');
    });



    xit('DataStore.onUpdate should return error', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.onUpdate( null,null, null).then(success, error);
      $rootScope.$digest();
    });

    xit('DataStore.onUpdate should return success', function () {
      var result = ''
          , event = function (response) {
            result = response;
          };
      DataStore.onUpdate().then(event);
      $rootScope.$digest();
     });
  })

});