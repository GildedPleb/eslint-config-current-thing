/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const codeToLint = `
import * as React from "react";
import ReactDOM from 'react-dom';
import { createContext, useContext, useEffect, useRef, useState, useReducer, forwardRef, useImperativeHandle, lazy, Suspense } from 'react';
interface GreetingProps {
  name: string;
}
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
interface CounterState {
  count: number;
}
interface ItemProps {
  items: string[];
}
interface DangerouslySetMarkupProps {
  htmlContent: string;
}
const Nine: React.FC = () => <div>{9}</div>;
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
class Counter extends React.Component<{}, CounterState> {
  state: CounterState = { count: 0 };
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
const UserContext = createContext<{name?: string} | undefined>(undefined);
const ContextConsumerComponent: React.FC = () => (
  <UserContext.Consumer>
    {user => <div>User: {user?.name}</div>}
  </UserContext.Consumer>
);
interface StateType {
  count: number;
}
interface ActionType {
  type: 'increment' | 'decrement';
}
const initialState: StateType = { count: 0 };
const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer((state: StateType, action: ActionType) => {
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
const DirectDOMManipulation: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'red';
    }
  }, []);
  return <div ref={divRef}>Direct DOM Manipulation</div>;
};
interface MaybeRenderComponentProps {
  shouldRender: boolean;
  children: React.ReactNode;
}
interface NestedTernaryProps {
  condition1: boolean;
  condition2: boolean;
}
interface FunctionAsPropProps {
  render: () => React.ReactNode;
}
interface ListWithIndexKeysProps {
  items: string[];
}
const MaybeRenderComponent: React.FC<MaybeRenderComponentProps> = ({ shouldRender, children }) => (
  <div>
    {shouldRender && children}
  </div>
);
const NestedTernary: React.FC<NestedTernaryProps> = ({ condition1, condition2 }) => (
  <div>
    {condition1 ? 'Condition 1 true' : condition2 ? 'Condition 2 true' : 'Both false'}
  </div>
);
const FunctionAsProp: React.FC<FunctionAsPropProps> = ({ render }) => (
  <div>{render()}</div>
);
const ListWithIndexKeys: React.FC<ListWithIndexKeysProps> = ({ items }) => (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);
interface MousePosition {
  x: number;
  y: number;
}
function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return position;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
};
interface FancyButtonProps {
  children: React.ReactNode;
}
const FancyButton = forwardRef<HTMLButtonElement, FancyButtonProps>((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
interface TextInputWithFocusButtonProps {
  // You can define props if needed
}
const TextInputWithFocusButton = forwardRef<HTMLInputElement, TextInputWithFocusButtonProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));
  return <input ref={inputRef} type="text" />;
});
import { lazy, Suspense, memo, Fragment } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
const SuspenseWrapper: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
interface MyComponentProps {
  // Define the props you need
}
const MyComponent: React.FC<MyComponentProps> = memo(props => {
  return <div>{/* render logic here */}</div>;
});
const AccessibleButton: React.FC = () => (
  <button aria-label="Close" onClick={() => console.log('Button clicked')}>
    X
  </button>
);
interface ComplexComponentProps {
  // Complex prop definitions
}
const ComplexConditionalRendering: React.FC<ComplexComponentProps> = props => {
  return <div>{/* render based on conditions */}</div>;
};
function useAdvancedCustomHook(): any {
  return {};
}
interface ContextType {
  state: any; // Define a more specific type for your use case
  setState: React.Dispatch<React.SetStateAction<any>>; // Adjust type as needed
}
const MyContext = createContext<ContextType | undefined>(undefined);
const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<any>(); // Define the initial state with a specific type
  return <MyContext.Provider value={{ state, setState }}>{children}</MyContext.Provider>;
};
interface RefComponentProps {
  // Props definition
}
const RefComponent = forwardRef<HTMLDivElement, RefComponentProps>((props, ref) => {
  return <div ref={ref}>{/* content */}</div>;
});


`;

export default codeToLint;
// EOF
