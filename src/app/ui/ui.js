const Header = require('./objects/controls/header/header');
const LoginForm = require('./objects/controls/login/login');
const PanelBlog = require('./objects/controls/panelBlog/panelBlog')

class Ui {

    header = new Header();
    loginform = new LoginForm();
    panelblog = new PanelBlog();
}


module.exports = Ui;