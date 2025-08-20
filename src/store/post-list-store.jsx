import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    addInitialPosts:()=>{},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type == "DELETE_POST") {
        newPostList = currPostList.filter(
            (post) => post.id !== action.paylode.postID
        );
    }else if(action.type == 'ADD_POST'){
        newPostList = [action.paylode, ...currPostList];
    } else if (action.type == "ADD_INITIAL_POSTS") {
        newPostList = [...currPostList, ...action.paylode.posts];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            paylode: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions:reactions,
                userId: userId,
                tags: tags,
            },
        });
    };
    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            paylode: {
                posts,
            },
        });
    };
    const deletePost = (postID) => {
        dispatchPostList({
            type: "DELETE_POST",
            paylode: {
                postID,
            },
        });
    };

    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
    );
    return (
        <PostList.Provider value={{ postList, addPost, deletePost ,addInitialPosts}}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going to do adventure",
        body: "Hi friends I'm going to do one adventure",
        reactions: 2,
        userId: "user-3",
        tags: ["vacation", "Araku", "Enjoying"],
    },
    {
        id: "2",
        title: "Going to do beach",
        body: "Hi friends I'm going to do beach",
        reactions: 12,
        userId: "user-13",
        tags: ["Holiday", "Beach", "Enjoying"],
    },
];
export default PostListProvider;
