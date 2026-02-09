/*
JSX is JavaScript XML — a syntax extension that lets you write HTML-like code inside JavaScript, most commonly used with React.

Think of it as a friendly mash-up of JS + markup.
*/


function App() {

  return (
    <>
    const element = <h1>Hello, world!</h1>;
    {/* That looks like HTML, but it’s actually JavaScript.
    Under the hood, JSX gets compiled into plain JavaScript that React understands. */}
    </>
  )
}

export default App

/*
Key things to know about JSX
1. It’s not HTML
It looks like HTML, but it’s JavaScript
Browsers don’t understand JSX directly — a tool like Babel converts it
*/
