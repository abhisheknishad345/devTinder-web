import { Search, Menu, User } from "lucide-react";

const Post = () => {
    return (
        <div className="m-2">
            <h1 className="font-medium font-mono text-2xl capitalize ">Post your thought here</h1>
            <p className="antialiased text-xl font-stretch-condensed">
            Hi everyone welcome post your thought, achievement & what you want to post related to developer</p>
            <button className="mx-4 border rounded-md p-2 cursor-pointer hover:bg-green-500 mt-2">Like</button>
            <button className=" border rounded-md p-2 hover:bg-zinc-500 cursor-pointer mt-2">Dislike</button>
        </div>
    )
}

export default Post;