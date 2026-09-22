import React, { useState } from "react";
import api from "../utils/axios";

const PostCard = ({ post }) => {

    const author = post.author;
    const [likes, setLikes] = useState(post.likes?.length || 0);
    const [likeLoading, setLikeLoading] = useState(false);
    const [dislikes, setDislikes] = useState(post.dislikes?.length || 0);
    const [dislikeLoading, setDislikeLoading] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(post.comments || []);
    const [showComments, setShowComments] = useState(false);
    const [commentLoading, setCommentLoading] = useState(false);


    const handleLike = async () => {

        if (likeLoading) return;

        try {

            setLikeLoading(true);

            const response = await api.post(
                "/post/" + post._id + "/like",
                {},
                {
                    withCredentials: true
                }
            );

            setLikes(response.data.likes);
            setDislikes(response.data.dislikes);

        } catch (err) {

            console.log(
                "Error liking post:",
                err.response?.data || err.message
            );

        } finally {

            setLikeLoading(false);
        }

    }


    const handleDislike = async () => {

        if (dislikeLoading) return;

        try {

            setDislikeLoading(true);

            const response = await api.post(
                "/post/" + post._id + "/dislike",
                {},
                {
                    withCredentials: true
                }
            );

            setLikes(response.data.likes);
            setDislikes(response.data.dislikes);

        } catch (err) {

            console.log(
                "Error disliking post:",
                err.response?.data || err.message
            );

        } finally {

            setDislikeLoading(false);
        }
    };

    // comment
    const handleComment = async () => {

        if (!commentText.trim() || commentLoading) {
            return;
        }

        try {

            setCommentLoading(true);

            const response = await api.post(
                "/post/" + post._id + "/comment",
                {
                    text: commentText
                },
                {
                    withCredentials: true
                }
            );

            setComments(response.data.comments);
            setCommentText("");

        } catch (err) {

            console.log(
                "Error commenting:",
                err.response?.data || err.message
            );

        } finally {

            setCommentLoading(false);
        }
    };

    return (
        <div className=" rounded-xl shadow p-4 mb-4 border">

            {/* Author */}
            <div className="flex items-center gap-3">

                <img
                    src={
                        author?.profileurl ||
                        "https://via.placeholder.com/50"
                    }
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-semibold">
                        {author?.Fname} {author?.Lname}
                    </h3>

                    <p className="text-sm text-gray-300">
                        {new Date(post.createdAt).toLocaleString()}
                    </p>
                </div>

            </div>


            {/* Content */}
            {post.content && (
                <p className="mt-4 text-gray-300 whitespace-pre-wrap">
                    {post.content}
                </p>
            )}


            {/* Image */}
            {post.image?.url && (
                <img
                    src={post.image.url}
                    alt="Post"
                    className="w-full max-h-[500px] object-cover rounded-lg mt-4"
                />
            )}


            {/* Counts */}
            <div className="flex gap-5 text-md text-gray-300 mt-4">

                <span>
                    ❤️ {likes}
                </span>

                <span>
                    👎 {dislikes}
                </span>

                <span>
                    💬 {post.comments?.length || 0}
                </span>

            </div>


            {/* Actions - temporarily */}
            <div className=" border-t mt-3 pt-3 gap-2">

                <button
                    onClick={handleLike}
                    disabled={likeLoading}
                    className="flex-1 py-2 rounded-lg hover:bg-gray-500 cursor-pointer px-2">
                    ❤️ Like
                </button>

                <button
                    onClick={handleDislike}
                    disabled={dislikeLoading}
                    className="flex-1 py-2 rounded-lg hover:bg-gray-500 cursor-pointer px-2">
                    👎 Dislike
                </button>

                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex-1 py-2 rounded-lg hover:bg-gray-500 cursor-pointer px-2">
                    💬 Comment
                </button>
                {showComments && (
                    <div className="mt-4 border-t pt-4">

                        {/* Comment Input */}
                        <div className="gap-2 flex">

                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Write a comment..."
                                rows={1}
                                className="flex-1 border rounded-lg px-3 py-2 outline-none resize-none max-h-32 overflow-y-auto"
                            />

                            <button
                                onClick={handleComment}
                                disabled={commentLoading || !commentText.trim()}
                                className="bg-cyan-500 text-black px-4 py-2 rounded-lg disabled:opacity-50 cursor-pointer ml-2 mt-2"
                            >
                                {commentLoading ? "..." : "Send"}
                            </button>

                        </div>


                        {/* Comments */}
                        <div className="mt-4 space-y-3">

                            {comments.map((comment) => (

                                <div
                                    key={comment._id}
                                    className="bg-gray-700 rounded-lg p-3"
                                >

                                    <div className="flex items-center gap-3">
                                        <img src={comment.user?.profileurl || "https://via.placeholder.com/50"}
                                            alt="profile"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />

                                        <div>
                                        <p className="text-sm font-semibold text-slate-400">
                                            {comment.user?.Fname} {comment.user?.Lname}
                                        </p>

                                        <p className="text-sm text-gray-300">
                                        {new Date(post.createdAt).toLocaleString()}
                                        </p>
                                        </div>

                                    </div>



                                    <p className="text-sm text-white/75 mt-2 font-medium font-sans">
                                        {comment.text}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                )}
            </div>

        </div>
    );
};

export default PostCard;