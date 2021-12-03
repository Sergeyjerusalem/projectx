import { Selector } from 'testcafe';

export default class DocSearchButton {
    public button = Selector('.DocSearch-Button-Placeholder');
    public input = Selector('.DocSearch-Input')
    public docsearchselector = Selector('.DocSearch-Hit-Container');
}