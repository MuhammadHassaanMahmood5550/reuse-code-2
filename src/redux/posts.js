import { createSlice } from '@reduxjs/toolkit'


export const postSlice = createSlice({
  name: 'data',
  initialState: {

    posts: [
        {title: "shopping", body: "sunday is decided for shoping", auhtor: "hassaan", id: 1},
        {title: "picnic", body: "dream world is decided for picnic", auhtor: "qasim", id: 2},
        {title: "movie", body: "capri-cinema is decided for movie", auhtor: "hashim", id: 3},
    ]
    
},
  reducers: {
    addPost: (state, action) => {
      const newPosts = {
        title: action.payload.title,
        body: action.payload.body,
        auhtor: action.payload.auhtor,
        id: Math.random()
      }
      state.push(newPosts);
    },
    deletePost: (state, action) => {
        console.log(action.payload);
        console.log(state.posts[0]);
        //return state.posts.filter((cur) => cur.id !== action.payload);
        //this above wont work bcz, this above show proxy and can't update so do step by step 
    const newFiltered = state.posts.filter((cur) => cur.id !== action.payload);
    console.log("newFiltered", newFiltered);
    // state.posts.pop();
    state.posts = newFiltered;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBlog, deletePost, incrementByAmount } = postSlice.actions

export default postSlice.reducer