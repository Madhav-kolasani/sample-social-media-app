import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const { addPost } = useContext(PostList);
    const navigate = useNavigate();
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.values = "";

        addPost(userId, postTitle, postBody, reactions, tags);
        // navigate("/");
    };
    return (
        <>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userID" className="form-label">
                        Enter your UserID here
                    </label>
                    <input
                        type="text"
                        ref={userIdElement}
                        className="form-control"
                        id="userId"
                        placeholder="Your User Id"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Post Title
                    </label>
                    <input
                        type="text"
                        ref={postTitleElement}
                        className="form-control"
                        id="title"
                        placeholder="How are you feeling today..."
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                        Post Content
                    </label>
                    <textarea
                        type="text"
                        ref={postBodyElement}
                        row="4"
                        className="form-control"
                        id="title"
                        placeholder="Tell us more about it..."
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">
                        No of reactions
                    </label>
                    <input
                        type="text"
                        ref={reactionsElement}
                        className="form-control"
                        id="reactions"
                        placeholder="How many people reacted to this post"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">
                        Enter your hashtags here
                    </label>
                    <input
                        type="text"
                        ref={tagsElement}
                        className="form-control"
                        id="tags"
                        placeholder="Please enter the tags using space"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Post
                </button>
            </form>
        </>
    );
};
export default CreatePost;
