import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import PostCard from "./PostCard";

const PostFeed = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFeed = async () => {
        try {

            const response = await api.get("/posts/feed", {
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
        getFeed();
    }, []);


    if (loading) {
        return (
            <div className="text-center mt-10">
                Loading feed...
            </div>
        );
    }


    return (
        <div className="w-full mx-auto py-6 px-4">


            {/* Posts Feed*/}
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
    );
};

export default PostFeed;