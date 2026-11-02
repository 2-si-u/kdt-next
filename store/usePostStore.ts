import { Post } from "@/api/post/post.api";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { persist } from "zustand/middleware";

const usePostStore = create(
    persist(
        combine(
            {
                post: null as null | Post,
                selectedId: null as null | number
            },
            (set, get) => ({
                setPost: (post: Post) => set({post: post}),
                setPosts: (post: Post[] | null) => set({post: post})
            })
        ),
        {
            name: "posts-storage"
        }
    )
)

export default usePostStore