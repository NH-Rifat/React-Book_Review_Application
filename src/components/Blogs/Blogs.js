import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='semantic_context'>
            <div className="semantic_tag">
                <h2>What is Semantic tag</h2>
                <p>Semantic tags Specify the purpose of a Element. By using semantic markup we can help the browser understand the meaning of the content as well as for human. Basically semantic HTML elements are specifically describe their meaning in a human and for the Browser.There are so many semantic elements such as header,footer, article,aside,details,main,nav,section etc. By seeing this semantic elements search engine easily can read the page and find the required information faster.</p>
            </div>
            <div className="context_api">
                <h2>What is Context API in React</h2>
                <p>Context API is a way that can helps us to remove props drilling concept. Props drilling means when we will need some data from grandparent element to root level child element then we pass the pass the expected data by using props which is so many cumbersome. To eradicate this kind of cumbersome or props drilling concept we are using Context API concept.In a sense we can say Context API is a way for a React app to effectively produce global variables that can be passed around.To use context we have to use React.createContext().It returns a consumer and a provider.Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
        </div>
    );
};

export default Blogs;