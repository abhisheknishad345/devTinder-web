import React, { useState } from "react";
import api from "../utils/axios";
import { ThumbsUp, ThumbsDown, MessageSquareText, Heart, MessageSquare } from "lucide-react";

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
        <div className=" rounded-xl shadow p-4 mb-4 border border-green-500">

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

            <div className="flex items-center gap-6 border-t pt-3 mt-4">

                <button
                    onClick={handleLike}
                    className="flex items-center gap-2  hover:text-pink-500 cursor-pointer"
                >
                    <Heart size={22} />
                    <span>{likes}</span>
                    {/* <span>Like</span> */}
                </button>

                <button
                    onClick={handleDislike}
                    className="flex items-center gap-2 hover:text-red-500 cursor-pointer"
                >
                    <ThumbsDown size={22} />
                    <span>{dislikes}</span>
                    {/* <span>Dislike</span> */}
                </button>

                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center gap-2 hover:text-cyan-500 cursor-pointer"
                >
                    <MessageSquareText size={22} />
                    <span>{comments.length}</span>
                    {/* <span>Comment</span> */}
                </button>

            </div>

            {/* Actions - temporarily */}
            <div className=" pt-3 gap-2">

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
                                className="bg-cyan-500 text-black px-4 py-2 rounded-lg disabled:opacity-50 cursor-pointer ml-2 mt-2 font-semibold"
                            >
                                {commentLoading ? "Sending" : "SEND"}
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