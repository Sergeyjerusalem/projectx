import { Selector } from 'testcafe';

export default class LeftSideBar {
    public container = Selector('.left ');
    public sideBar = this.container.find('ul li');
}
