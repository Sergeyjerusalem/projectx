import { Selector } from 'testcafe';

export default class RightSidebar {
    public container = Selector('.scrollspy');
    public sideBar = this.container.find('.scrollspy-link');
}

