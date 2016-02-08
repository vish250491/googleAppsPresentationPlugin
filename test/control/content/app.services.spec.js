describe('Unit: googleAppsPresentationPluginContent: Services', function () {
    beforeEach(module('googleAppsPresentationPluginContent'));


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
    var DataStore, Buildfire, MESSAGES, STATUS_CODE, q, TAG_NAMES, $rootScope, Utils;
    beforeEach(module('googleAppsPresentationPluginContent', function ($provide) {
      $provide.service('Buildfire', function () {
        this.datastore = jasmine.createSpyObj('datastore', ['get', 'update', 'save']);
        this.datastore.get.and.callFake(function (_tagName, callback) {
          if (_tagName) {
            callback(null, 'Success');
          } else {
            callback('Error', null);
          }
        });
         this.datastore.update.and.callFake(function (id, _tagName, test, callback) {
          if (id, _tagName) {
            callback(null, 'Success');
          } else {
            callback('Error', null);
          }
        });
        this.datastore.save.and.callFake(function (item, _tagName, callback) {
          if (item, _tagName) {
            callback(null, 'Success');
          } else {
            callback('Error', null);
          }
        });
      });
    }));


    beforeEach(module('googleAppsPresentationPluginContent'));
    beforeEach(inject(function (_DataStore_, CODES, MESSAGES, _TAG_NAMES_, _$rootScope_, _Utils_) {
      DataStore = _DataStore_;
      STATUS_CODE = CODES;
      STATUS_MESSAGES = MESSAGES;
      TAG_NAMES = _TAG_NAMES_;
      $rootScope = _$rootScope_;
      Utils = _Utils_;
      Buildfire = {
        datastore: {}
      };


    }));
  it('DataStore should exist and be an object', function () {
    expect(typeof DataStore).toEqual('object');
  });
  it('DataStore.get should exist and be a function', function () {
    expect(typeof DataStore.get).toEqual('function');
  });
  xit('DataStore.update should exist and be a function', function () {
    expect(typeof DataStore.update).toEqual('function');
  });
  it('DataStore.save should exist and be a function', function () {
    expect(typeof DataStore.save).toEqual('function');
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
    xit('DataStore.get should return success', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.get(TAG_NAMES.JOT_FORM_DATA).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Success');
    });



    xit('DataStore.update should return error', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.update( null,null, null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Error');
    });

    xit('DataStore.update should return success', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.update( 123, TAG_NAMES.GOOGLE_APPS_PRESENTATION_INFO, null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Success');
    });
    xit('DataStore.save should return error', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.save( null,null, null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Error');
    });

    it('DataStore.save should return success', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.save( 123, TAG_NAMES.GOOGLE_APPS_PRESENTATION_INFO, null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Success');
    });
  })

});