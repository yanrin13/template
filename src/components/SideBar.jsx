export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__login">
                <div className="img"></div>
                <button className="btn">Login</button>
            </div>
            <div className="sidebar__history">
                <ul className="sidebar__history-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div className="sidebar__contacts">
                <h2>Contacts</h2>
                <ul>
                    <li>+1(800)469-92-69</li>
                    <li>tg @qweqweqwesad</li>
                </ul>
            </div>
        </div>
    )
}