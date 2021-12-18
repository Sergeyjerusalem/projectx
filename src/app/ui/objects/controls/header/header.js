import { Selector } from 'testcafe';


class Header {
    menuItem = Selector('#main-nav-content > ul > li')
}
module.exports = Header;