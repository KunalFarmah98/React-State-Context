import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';

const BlogContext = React.createContext({});

export const BlogProvider = ({ children }) => {

  // const [blogPosts,setBlogPosts] = useState( [
  //   {
  //     title: 'Post 1',
  //     id: 1
  //   },
  //   {
  //     title: 'Post 2',
  //     id: 2
  //   }
  // ]);

  // const addBlogPost = ()=>{
  //   setBlogPosts([...blogPosts, {title: `Post ${blogPosts.length+1}`, id: blogPosts.length+1}]);
  // }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add_blogpost':
        return [...state, { title: `Post ${state.length + 1}`, id: state.length + 1 }];
      default: return state;
    }
  };

  const [blogPosts, dispatch] = useReducer(reducer, [
    {
      title: 'Post 1',
      id: 1
    },
    {
      title: 'Post 2',
      id: 2
    }]);

    const addBlogPost = ()=>{
      console.log('add');
      dispatch({type:'add_blogpost'});
    }

  
  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
};

export default BlogContext;