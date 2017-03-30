// describe('Google test', function() {
//   before(function(client, done) {
//     done();
//   });

//   beforeEach(function(client, done) {
//     done();
//   });

//   afterEach(function(client, done) {
//     done();
//   });

//   after(function(client, done) {
//     client.end(function() {
//       done();
//     });
//   });

//   it('search nightwatch', function(client) {
//     client
//       .url('http://google.com')
//       .expect.element('body').to.be.present.before(1000);

//     client.setValue('input[type=search]', ['nightwatch', client.Keys.ENTER])
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch');
//   });

//   it('search appium', function(client) {
//     client
//       .url('http://google.com')
//       .expect.element('body').to.be.present.before(1000);

//     client.setValue('input[type=search]', ['appium', client.Keys.ENTER])
//       .pause(1000)
//       .assert.containsText('#main', 'Appium');
//   });
// });