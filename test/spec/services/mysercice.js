'use strict';

describe('Service: mySercice', function () {

  // load the service's module
  beforeEach(module('appNameApp'));

  // instantiate service
  var mySercice;
  beforeEach(inject(function (_mySercice_) {
    mySercice = _mySercice_;
  }));

  it('should do something', function () {
    expect(!!mySercice).toBe(true);
  });

});
