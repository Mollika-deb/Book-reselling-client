import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='ml-32 mt-10 mb-10 mr-32 bg-slate-800 p-24 shadow-2xl rounded-xl'>
            
                <h1 className='text-2xl font-bold text-white m-t-5 text-pink-600'>1. What are the different ways to manage a state in a React application?</h1>
                <p className='text-white mt-5'>In React apps, there are some ways to handle the state. Let us  explore a few of them in this part. <br /> <br />
                    <b>1. Web Storage</b> <br />
                    <b>2. Local State</b> <br />
                    <b>3. Lifted State</b> <br />
                    <b>4. Derived State</b> <br />
                    <b>5. URL</b> <br />
                 </p>
            
                    <h1 className='text-2xl font-bold text-white mt-5 text-pink-600'>2. How does prototypical inheritance work?</h1>
            <p className='text-white mt-5'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                   
                 </p>
            
            <h1 className='text-2xl font-bold text-white mt-5 text-pink-600'>3.  What is a unit test?Why should we write unit tests?</h1>
            <p className='text-white mt-5'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. <br /> <br />
                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                   
                 </p>
            
            <h1 className='text-2xl font-bold text-white mt-5 text-pink-600'>4. what is the defference between React , Angular & Vue?</h1>
            <p className='text-white mt-5'><b className='text-cyan-500'>Angular: </b>Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: <br /> <br />

                <b className='text-cyan-500'> “The modern web developer’s platform”</b> <br /> <br />

                It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.


                   
                 </p>
            <p className='text-white mt-5'><b className='text-cyan-500'>React: </b>React is considered a UI library.They define themselves as: <br /> <br />

                <b className='text-cyan-500'>“A JavaScript library for building user interfaces”</b> <br /> <br />

                Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                   
                 </p>
            <p className='text-white mt-5'><b className='text-cyan-500'>Vue.js : </b>Vue.js is, according to its site: <br /> <br />

                <b className='text-cyan-500'>“A progressive JavaScript framework”</b> <br /> <br />

                Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                 </p>

            </div>
       
    );
};

export default Blog;