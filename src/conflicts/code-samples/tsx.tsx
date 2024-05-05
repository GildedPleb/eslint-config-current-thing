// PathMark: ./src/conflicts/code-samples/tsx.tsx
/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const codeToLint = `
import * as React from "react";
import React, { Fragment, memo, createContext, Component, useContext, useEffect, useRef, useState, useReducer, forwardRef, useImperativeHandle, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

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

const toggle = true;
const uniqueItems: Array<{ index: number; word: string }> = [];
const result: Array<{ index: number; word: string }> = [];
const active = "asdf";

const toggleComp = toggle
  ? uniqueItems.map((item) => (
      <div
        className={\`item\${active.includes(item.word) ? "Active" : ""}\`}
        key={\`\${item.word}+\${item.index}\`}
      >
        {item.word}
      </div>
    ))
  : result.map((item) => (
      <div
        className={\`item\${active.includes(item.word) ? "Active" : ""}\`}
        key={\`\${item.word}+\${item.index}\`}
      >
        {item.word}
      </div>
    ));

const permutations = 2345n;

const conclusion =
  permutations > 0n ? (
    <>
      <h1>allegedly</h1>
      <div>allegedlySlug</div>
    </>
  ) : (
    <>
      <h1>no</h1>
      <div>noSlug</div>
    </>
  );

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

const MisusedFragmentShorthand: React.FC = () => {
  return (
    <>
      {/* This usage is not necessarily a TypeScript issue but a React pattern to be aware of */}
      <Fragment key="key1">Fragment 1</Fragment>
      <Fragment key="key2">Fragment 2</Fragment>
    </>
  );
};
class LegacyStringRefsComponent extends Component {
  private myRef: React.RefObject<HTMLDivElement>;
  constructor(props: {}) {
    super(props);
    this.myRef = React.createRef<HTMLDivElement>();
  }
  componentDidMount() {
    console.log(this.myRef.current); // Accessing the ref
  }
  render() {
    return <div ref={this.myRef}>Legacy String Refs</div>;
  }
}
interface DirectStateMutationState {
  count: number;
}
class DirectStateMutation extends Component<{}, DirectStateMutationState> {
  state: DirectStateMutationState = { count: 0 };
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    return <button onClick={this.increment}>Increment</button>;
  }
}
function withPropLogger<T>(WrappedComponent: React.ComponentType<T>) {
  return class extends Component<T> {
    componentDidUpdate(prevProps: T) {
      console.log('Current props:', this.props);
      console.log('Previous props:', prevProps);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
function useAdvancedCustomHook(): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(value => value + 1);
  }, []);
  return [value, setValue];
}
interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
interface FancyInputProps {
  // Any additional props
}
const FancyInput = forwardRef<HTMLInputElement, FancyInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));
  return <input ref={inputRef} type="text" />;
});
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
function List<T>(props: ListProps<T>): React.ReactElement {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{props.renderItem(item)}</li>
      ))}
    </ul>
  );
}
interface FormState {
  name: string;
}
const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '' });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={formData.name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};



`;

export default codeToLint;
// EOF
