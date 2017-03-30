import path from 'path'
import low from 'lowdb'

describe('Mobile login test', function() {
  const db = low(path.resolve(__dirname, '../../database/db.json'))

  before(function(client, done) {
    done()
  })

  beforeEach(function(client, done) {
    done()
  })

  afterEach(function(client, done) {
    done()
  })

  after(function(client, done) {
    client.end(function() {
      done()
    })
  })

  db.get('users').value().map((item) => {
    it('User [' + item.loginId + '] login is ' + (item.valid ? 'valid' : 'invalid'), function(browser) {
      browser
        .url('http://192.168.0.161:3000/login')
        .expect.element('body').to.be.present.before(1000)

      const client = browser
        .setValue('form.form_login input[name=loginId]', item.loginId)
        .setValue('form.form_login input[name=password]', item.password)
        .submitForm('form.form_login')
        .pause(1000)
        .click('button.btn.btn_yellow')
        .pause(3000)

      if (item.valid) {
        client.assert.containsText('#app', item.loginId)
      } else {
        client.assert.visible('.alert.danger')
      }
    })
  })
})