module.exports = {
  tags: ['simpletest'],
  disabled: false,

  'Simple sanity-check to stox site is on' : function (client) {

    client
      .url('https://stox.welldone-software.com/')
      .waitForElementVisible('body', 2000);

    client.expect.element('body').to.be.present;

    client.logger('Check login page');

    client.expect.element('h2  a').to.be.present
    client.assert.attributeContains('h2  a', 'href', '#/signup');
    client.useXpath().click('//a[@href="#/signup"]').pause(1000).useCss().assert.urlContains('auth/signup');

    client
      .url('https://stox.welldone-software.com/#/auth/signin/')
      .waitForElementVisible('body', 2000);

    client.logger('Check login with valid user');
    client.assert.elementPresent('input[name=\"email\"]')
      .setValue('input[name="email"]', 'info+4@welldone-software.com')
      .setValue('input[name="password"]', '00Dani11')
      .useXpath().click('//button[@type="sumbit"]')
      .useCss().waitForElementVisible('body', 2000).pause(10000)
      .assert.urlContains('predictions')

    client.logger('Check predictions page');
    client.assert.elementPresent('ul li:nth-child(3)')
  }
};
