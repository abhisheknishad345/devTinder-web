
import React, { useState } from "react";
import api from "../utils/axios";
import {Camera, X} from "lucide-react"


const Post = ({ onPostCreated }) => {

    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
    };


    const removeImage = () => {

        setImage(null);
        setPreview(null);
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!content.trim() && !image) {
            return;
        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("content", content);

            if (image) {
                formData.append("image", image);
            }

            const response = await api.post(
                "/post",
                formData,
                {
                    withCredentials: true
                }
            );

            console.log(response.data);
            onPostCreated(response.data.post);

            // Reset form
            setContent("");
            setImage(null);
            setPreview(null);

        } catch (err) {

            console.log(
                "Error creating post:",
                err.response?.data || err.message
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="rounded-xl shadow p-4">
            <h1 className="font-medium font-mono text-2xl capitalize mb-2 text-pink-400">Post your thought</h1>

            <form onSubmit={handleSubmit}>

                {/* Text */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind? Max char-500"
                    className="w-full resize-none outline-none border rounded-lg p-3"
                    rows="3"
                />

                {/* Image Preview */}
                {preview && (
                    <div className="relative mt-3">

                        <h1 className="text-center mb-2 font-semibold">Preview</h1>

                        <img
                            src={preview}
                            alt="Preview"
                            className="w-1/2 h-full object-cover rounded-lg"
                        />

                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-2 right-2 bg-white cursor-pointer text-black rounded-full px-3 py-1 hover:text-red-500"
                        >
                            <X size={21}/>
                        </button>

                    </div>
                )}


                {/* Bottom section */}
                <div className="flex items-center justify-between mt-4">

                    {/* Image button */}
                    <label className="cursor-pointer flex items-center gap-2 hover:text-pink-400">

                        <Camera size={22}/>
                        <span>

                        Add Image
                        </span>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                    </label>


                    {/* Post button */}
                    <button
                        type="submit"
                        disabled={loading || (!content.trim() && !image)}
                        className="bg-white text-black font-semibold px-3 py-2 rounded-lg disabled:opacity-90 cursor-pointer"
                    >
                        {loading ? "Posting..." : "POST"}
                    </button>

                </div>

            </form>

        </div>
    );
};
    

export default Post;