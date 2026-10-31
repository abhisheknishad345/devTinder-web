
import React, { useState, useEffect } from "react";
import api from "../utils/axios";
import {Camera, X} from "lucide-react"

const MAX_IMAGE_SIZE = 4 * 1024 * 1024; // 4 MB


const Post = ({ onPostCreated }) => {

    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

     useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;
        setError("");

        if (!file.type.startsWith("image/")) {
            setError("Please select a valid image.");
            e.target.value = "";
            return;
        }

         if (file.size > MAX_IMAGE_SIZE) {
            setError("Image size should not exceed 4 MB.");
            e.target.value = "";
            return;
        }

        setImage(file);

        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
    };


    const removeImage = () => {

        setImage(null);
        setPreview(null);
        setError("");
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!content.trim() && !image) {
            return;
        }

        try {

            setLoading(true);
            setError("")

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

             e.target.reset();

        } catch (err) {

            console.log(
                "Error creating post:",
                err.response?.data || err.message
            );

             setError(
                err.response?.status === 413
                    ? "Image is too large. Please select an image under 4 MB."
                    : "Unable to create post. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="rounded-xl shadow p-4">
            <h1 className="font-medium font-mono text-xl capitalize mb-2 text-gray-400">Post your thought</h1>

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

                 {error && (
                    <p className="text-red-500 text-lg mt-2">
                        {error}
                    </p>
                )}



                {/* Bottom section */}
                <div className="flex items-center justify-between mt-4">

                    {/* Image button */}
                    <label className="cursor-pointer text-pink-500 flex items-center gap-2 hover:text-pink-400">

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
                     <p className="text-green-500 mt-4">*Image up to 4 MB</p>

            </form>

        </div>
    );
};
    

export default Post;