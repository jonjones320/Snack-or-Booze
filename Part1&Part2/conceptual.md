### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
	- The purpose of React Router is to handle the multiple pages and endpoints of an app and direct the user around them.
#
- What is a single page application?
	- A single page application is an app that does not separate it's components or functions. It has everything, or mostly everything, that makes it run on a single page.
#
- What are some differences between client side and server side routing?
	- The biggest difference is that server side routing requires a new request and response between the user and the server for any routing to be executed.
	- Client side routing attempts to always have all of the data it needs from the initial request so there is no request/response each time. If more data is needed, a smaller request may be executed, but the page does not refresh.
#
- What are two ways of handling redirects with React Router? When would you use each?
	- The `useNavigate` hook offers a way to redirect a user after they have completed something like submitting a form. `useNavigate()` can be integrated into a function for a button execution and it simply redirects the user once they are done with that page.
	
	- There is also the React component `Redirect` which is often used for protecting authorization-only endpoints. It can be used to check if a user is logged in before allowing them to a website. 
#
- What are two different ways to handle page-not-found user experiences using React Router? 
	- One React Router page-not-found method would be to have the endpoint asterisk ("*"). Used within a `Switch` component, the asterisk will be placed at the end of the URLs and, when any non-existent URL is attempted, load a `<Not Found />` component, usually with a 404 message.
	- A second way is to, again, use the asterisk endpoint and then use the React component `<Navigate />` with the redirect to a home page or 404 page.
#
- How do you grab URL parameters from within a component using React Router?
	- You use the hook `useParams()`. It tracks parameters included in a URL.
#
- What is context in React? When would you use it?
	- Context in React is basically a hook for managing state globally. You use it when you need to share state with nested components without having to pass the state down between the components.
#
- Describe some differences between class-based components and function
  components in React.
	- Class-based components are mostly self-contained. They rely on using `.this` variables instead of using `state`.
	- Function components use hooks to access state. The state will be managed by one function but can be passed between functions, whereas, `.this` variables cannot be passed between class-based components. 
	- Both types of components use props, but with class-based the props need to be rendered, whereas function components simply need to have the prop passed to the function.
#
- What are some of the problems that hooks were designed to solve?
	- Hooks greatly reduce the amount of re-used code. Most code that will be used multiple times can now be moved to it's own component and passed amongst the application.
	- Hooks solved the complexity and "fragile" engineering that it took to build successful class-components.
	- Hooks allowed code to function across the multiple phases of the React lifecycle, instead of before, where the code needed to be designed to operate on each lifecycle and then new code designed for the next lifecycle (while sometimes reusing code).
#