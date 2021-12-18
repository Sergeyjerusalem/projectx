const app = require('../app/app');

fixture(`Getting Started`)
    .page`https://www.ableton.com/`;

test.skip('Test 1', async t => {
    await t.
        click(app.ui.header.menuItem.nth(8))
        .typeText(app.ui.loginform.user, 'jijj4395@gmail.com')
        .typeText(app.ui.loginform.password.nth(0), 'lol123')
        .click(app.ui.loginform.loginButton.nth(0));
 
});

test('Test 2', async t => {
    await t.
        scrollIntoView(app.ui.panelblog.container)
        .click(app.ui.panelblog.menuItem.nth(3))
        .wait(2000)
 
});



test.skip('first api test', async t => {
    const resp = await app.api.link.getSummary('');
         app.expect(resp.status).to.equal(200); 
});
