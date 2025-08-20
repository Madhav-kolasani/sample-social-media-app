import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <>
            <PostListProvider>
                <div className="app-container">
                    <Sidebar
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    ></Sidebar>
                    <div className="content">
                        <Header></Header>
                        {/* {selectedTab === "Home" ? (
                            <PostList></PostList>
                        ) : (
                            <CreatePost></CreatePost>
                        )} */}
                        <Outlet></Outlet>

                        <Footer></Footer>
                    </div>
                </div>
            </PostListProvider>
        </>
    );
}

export default App;
