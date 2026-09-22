import Post from "./Post";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import api from "../utils/axios"

const MyPost = () => {

     const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMyPost = async () => {
        try {

            const response = await api.get("/posts/mypost", {
                withCredentials: true
            });

            setPosts(response.data.posts);

        } catch (err) {

            console.log(
                "Error fetching feed:",
                err.response?.data || err.message
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {
        getMyPost();
    }, []);

    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => [
            newPost,
            ...prevPosts
        ]);
    };


    if (loading) {
        return (
            <div className="text-center mt-10">
                Loading feed...
            </div>
        );
    }


    return (
        <div className="p-2">
            <h1 className="font-medium font-mono text-2xl capitalize mb-2 text-center">
                Create & See all your posts
            </h1>
            {/* Create Post */}
            <Post onPostCreated={handlePostCreated} />

            <div className="mt-6">

                {posts.length === 0 ? (

                    <p className="text-center text-gray-500">
                        No posts available.
                    </p>

                ) : (

                    posts.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                        />
                    ))

                )}

            </div>
        </div>
    )
}

export default MyPost;