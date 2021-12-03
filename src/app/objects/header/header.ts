import { Selector } from 'testcafe';

export default class Header {
    public container = Selector('#header');
    public menuItem = this.container.find('nav li');
}