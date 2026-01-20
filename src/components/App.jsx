import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './Content'

export default function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="content">
                <SideBar />
                <Content />
            </div>
        </>
    )
}