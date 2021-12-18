import { Selector } from 'testcafe';


class LoginForm {
    
    user = Selector('.username');
    password = Selector('#id_password');
    loginButton = Selector('section > form > div > input');
}
module.exports = LoginForm;