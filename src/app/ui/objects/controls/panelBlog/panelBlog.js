import { Selector } from 'testcafe';


class PanelBlog {
    
     container = Selector('section.panel-blog-categories.bg-dolphin');
     menuItem = this.container.find('a');
}
module.exports = PanelBlog;