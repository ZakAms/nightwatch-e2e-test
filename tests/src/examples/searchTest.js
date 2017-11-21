module.exports = {
    tags: ['simpletest'],
    disabled: true,

    'Google Simple Search Test' : function (client) {
        const searchObject = 'Germany';

        client
            .url('https://www.google.no/')
            .waitForElementVisible('#hplogo', 2000);

        client.expect.element('body').to.be.present;

        client.logger('Check Attributes');
        client.expect.element('body').to.have.attribute('class').which.contains('vasq');
        client.expect.element('body').to.have.attribute('onload');
        client.expect.element('#hplogo').text.to.match(/Nor/);
        client.expect.element('#lst-ib').to.be.an('input');

        client.logger('Search for ' + searchObject);
        client.setValue('#lst-ib', searchObject);
        client.expect.element('#lst-ib').to.have.value.equal(searchObject);
        client
            .keys(client.Keys.ENTER)
            .waitForElementVisible('#search', 2000);


        ////////////////////////////////
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .waitForElementVisible('button[name=btnG]', 1000)
        .click('button[name=btnG]')
        .pause(1000)
        .assert.containsText('ol#rso li:first-child',
        'Rembrandt - Wikipedia')
        .end();

    }
};
