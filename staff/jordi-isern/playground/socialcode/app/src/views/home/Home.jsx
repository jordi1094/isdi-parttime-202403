import { useEffect, useState } from "react"

import Button from "../../Components/Core/Button";
import View from "../../Components/Library/View";
import Header from "./components/Header";
import Heading from "../../Components/Core/Heading";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import CreatePostForm from "./components/CreatePostForm";

import logic from "../../logic";

function Home({ onUserLoggedOut }) {
    console.log('Home -> render')

    const [name, setName] = useState('')
    const [view, setView] = useState('')
    const [postListRefreshStamp, setPostListRefreshStamp] = useState(0)

    const handleLogout = () => {
        logic.logoutUser()

        onUserLoggedOut()
    }

    useEffect(() => {
        console.log('Home -> useEffect')

        try {
            logic.getUserName()
                .then(name => {
                    console.log('Home -> setName')

                    setName(name)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleCreatePostClick = () => setView('create-post')

    const handleCancelCreatePostClick = () => setView('')

    const handlePostCreated = () => {
        setPostListRefreshStamp(Date.now())

        setView('')
    }
    
    return <View>
        <Header>
            <Heading level="3">{name}</Heading>
            <Button onClick={handleLogout}>Logout</Button>
        </Header>
        {view === 'create-post' && <CreatePostForm onCancelCreatePostClick={handleCancelCreatePostClick} onPostCreated={handlePostCreated} />}
        <View tag="main">
            <PostList refreshStamp={postListRefreshStamp} />
        </View>

        <Footer onCreatePostClick={handleCreatePostClick} />
    </View>
}

export default Home