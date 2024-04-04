// PathMark: ./src/conflicts/code-samples/jsx.jsx
/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const codeToLint = `
import * as React from "react";
import React, { createContext, forwardRef, lazy, Suspense, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState, Fragment, memo, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import Greeting, { Button } from './components'; // Importing default and named exports
const Nine = () => <div>{9}</div>;
export default Nine;
export default function Greeting({ name }) { // Default export
  return <h1>Hello, {name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired, // Prop type validation
};
export const Button = ({ onClick, children }) => ( // Named export
  <button onClick={onClick}>{children}</button>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export class Counter extends React.Component { // Exporting a class
  state = { count: 0 }; // State declaration
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <Button onClick={this.increment}>Increment</Button>
      </div>
    );
  }
}
React.useEffect(() => {
  import('./Calculator').then(Calculator => { // Dynamic import
    const calc = new Calculator.default();
    console.log(calc.add(1, 2));
  });
}, []);
export const ThemeContext = React.createContext({ theme: 'light' }); // Exporting context
const _ = require('lodash'); // CommonJS require
const List = ({ items }) => ( // Fragment shorthand
  <>
    {items.map(item => <li key={item}>{item}</li>)}
  </>
);
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const DangerouslySetMarkup = ({ htmlContent }) => ( // dangerouslySetInnerHTML
  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
);
DangerouslySetMarkup.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};
const style = { backgroundColor: 'blue' }; // Inline style object
const StyledComponent = () => <div style={style}>Styled Content</div>;
export class LegacyComponent extends React.Component { // Use of deprecated lifecycle method
  UNSAFE_componentWillMount() {
    console.log('Component will mount');
  }
  render() {
    return <div>Legacy Component</div>;
  }
}
export const UserContext = createContext(); // Context without a default value
const ContextConsumerComponent = () => (
  <UserContext.Consumer>
    {user => <div>User: {user.name}</div>}
  </UserContext.Consumer>
);
const initialState = { count: 0 };
const CounterWithReducer = () => {
  const [state, dispatch] = useReducer((state, action) => { // Inline reducer function
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};
const DirectDOMManipulation = () => {
  const divRef = useRef(null); // Direct DOM manipulation
  useEffect(() => {
    divRef.current.style.backgroundColor = 'red';
  }, []);
  return <div ref={divRef}>Direct DOM Manipulation</div>;
};
const MaybeRenderComponent = ({ shouldRender, children }) => (
  <div>
    {shouldRender && children} // Implicit coercion to boolean
  </div>
);
MaybeRenderComponent.propTypes = {
  shouldRender: PropTypes.any,
  children: PropTypes.node.isRequired,
};
const CustomDataAttribute = () => (
  <div custom-attribute="value">Non-standard HTML attribute</div> // Non-standard HTML attribute
);
const NestedTernary = ({ condition1, condition2 }) => (
  <div>
    {condition1 ? 'Condition 1 true' : condition2 ? 'Condition 2 true' : 'Both false'} // Nested ternary operator
  </div>
);
NestedTernary.propTypes = {
  condition1: PropTypes.bool.isRequired,
  condition2: PropTypes.bool.isRequired,
};
const FunctionAsProp = ({ render }) => ( // Function as prop
  <div>{render()}</div>
);
FunctionAsProp.propTypes = {
  render: PropTypes.func.isRequired,
};
const ListWithIndexKeys = ({ items }) => ( // Array indexes as keys
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)} // Using index as key
  </ul>
);
ListWithIndexKeys.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const ButtonWithExcessiveUseOfCallback = ({ onClick }) => {
  const handleClick = React.useCallback(() => { // useCallback without dependencies
    onClick();
  }, []);
  return <button onClick={handleClick}>Click me</button>;
};
ButtonWithExcessiveUseOfCallback.propTypes = {
  onClick: PropTypes.func.isRequired,
};
const HooksInsideLoop = ({ items }) => {
  items.forEach(item => {
    const [state, setState] = useState(false); // Hook inside a loop
    console.log(state);
  });
  return (
    <div>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};
HooksInsideLoop.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const DestructureWithRename = ({ user: { name: userName, age: userAge } }) => ( // Complex destructuring with rename
  <div>{\`Name: \${userName}, Age: \${userAge}\`}</div>
);
DestructureWithRename.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};
const ExpensiveComponent = ({ complexData }) => {
  const calculatedValue = useMemo(() => complexData.reduce((acc, curr) => acc + curr, 0), []); // useMemo with empty dependencies

  return <div>{calculatedValue}</div>;
};
ExpensiveComponent.propTypes = {
  complexData: PropTypes.arrayOf(PropTypes.number).isRequired,
};
const ThemeContext = React.createContext();
const UseContextWithoutProvider = () => {
  const theme = useContext(ThemeContext); // useContext without a Provider
  return <div>{\`The theme is \${theme}\`}</div>;
};
const NonBooleanAttributesWithBooleanValues = () => (
  <input type="text" readOnly={true} /> // Non-boolean attribute with boolean value
);
const InlineFunctionAsProp = () => (
  <button onClick={(e) => console.log(e)}>Click Me</button> // Inline function as prop
);
const SwitchStatementRendering = ({ condition }) => {
  switch (condition) {
    case 'a':
      return <div>Condition A</div>;
    case 'b':
      return <div>Condition B</div>;
    default:
      return <Fragment>Default Condition</Fragment>;
  }
};
SwitchStatementRendering.propTypes = {
  condition: PropTypes.string.isRequired,
};
const MisusedFragmentShorthand = () => (
  <> {/* Misused Fragment shorthand */}
    <React.Fragment key="key1">Fragment 1</React.Fragment>
    <React.Fragment key="key2">Fragment 2</React.Fragment>
  </>
);
class LegacyStringRefsComponent extends React.Component {
  componentDidMount() {
    console.log(this.refs.myRef); // Use of legacy string ref
  }
  render() {
    return <div ref="myRef">Legacy String Refs</div>;
  }
}
class DirectStateMutation extends React.Component {
  state = { count: 0 };
  increment() {
    this.state.count += 1; // Direct state mutation
    console.log(this.state.count);
  }
  render() {
    return <button onClick={() => this.increment()}>Increment</button>;
  }
}
const withPropLogger = WrappedComponent => {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props:', this.props);
      console.log('Previous props:', prevProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return position;
}
const MouseTracker = () => {
  const { x, y } = useMousePosition(); // Using custom hook
  return (
    <div>
      Mouse is at ({x}, {y})
    </div>
  );
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root') // Assumes a div with this id exists in index.html
  );
};
const LazyComponent = lazy(() => import('./LazyComponent')); // Lazy-loaded component
const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
const FancyButton = forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
const TextInputWithFocusButton = forwardRef((props, ref) => {
  const inputRef = React.useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} type="text" />;
});
const MemoizedComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
const AccessibleButton = () => (
  <button aria-label="Close" onClick={() => console.log('Button clicked')}>
    X
  </button>
);



`;

export default codeToLint;
// EOF
