import Header from "./objects/header/header";
import WelcomeBoard from "./objects/board/welcomeBoard";
import DocumentBoard from "./objects/docBoard/docBoard";
import RightSidebar from "./objects/sideBar/rightSideBar";
import LeftSideBar from "./objects/sideBar/leftSideBar";
import DocSearchButton from "./objects/docsearchbutton/docSearchButton";

class App {
    public header = new Header();
    public welcomeBoard = new WelcomeBoard(); 
    public documentBoard = new DocumentBoard();
    public rightSideBar = new RightSidebar();
    public leftSideBar = new LeftSideBar();
    public docSearchButotn = new DocSearchButton();
}

export default new App();