import app from '../app/app';


fixture(`Getting Started`)
    .page`https://testcafe.io/`;

test('My zero test of search button', async t => {
    await t
        .click(app.docSearchButotn.button)
        .typeText(app.docSearchButotn.input,'skip')
        .click(app.docSearchButotn.docsearchselector.nth(1));
        await t.expect(true).ok();
});

test('My first test', async t => {

    await t.expect(await app.welcomeBoard.welcomeMessage.textContent)
        .eql('End-to-end testing, simplified');
    await t.expect(await app.header.menuItem.count).eql(7);
    await t.click(app.header.menuItem.withText('Docs'));
    await t.expect(await app.documentBoard.title.textContent)
        .eql('Getting Started'); 

});

test('My second test', async t => {
    await t.click(app.header.menuItem.withText('Docs'));
    for (let i = 0; i < await app.header.menuItem.count; i++) {
        await t.click(app.header.menuItem.nth(i));

        for (let i = 0; i < await app.rightSideBar.sideBar.count; i++) {
            await t.click(app.rightSideBar.sideBar.nth(i));

        }
    }
    await t.expect(true).ok();
    
});

test('My third test', async t => {
    await t.click(app.header.menuItem.withText('Docs'));
    await t.click(app.header.menuItem.withText('Guides'));
    for (let i = 0; i < await app.leftSideBar.sideBar.count; i++) {
        await t.click(app.leftSideBar.sideBar.nth(i));
        
        for (let i = 0; i < await app.rightSideBar.sideBar.count; i++) {
            await t.click(app.rightSideBar.sideBar.nth(i));

        }
    }
        await t.expect(true).ok();
})