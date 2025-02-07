// PathMark: ./src/conflicts/code-samples/css-in-js.jsx
/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const codeToLint = `
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";

/**
 *
 */
function EmotionShowcase() {
  // 1. Basic styled component
  const BasicStyledButton = styled.button\`
    background: linear-gradient(to right, #6ee7b7, #3b82f6);
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  \`;

  // 2. Dynamic styling using props
  const DynamicStyledButton = styled.button\`
    color: \${(properties) => (properties.primary ? "white" : "#333")};
    background: \${(properties) =>
      properties.primary ? "#3b82f6" : "transparent"};
    border: 2px solid #3b82f6;
    padding: 8px 16px;
    border-radius: 4px;
  \`;

  // 3. Using the css prop for inline styles
  const color = "white";
  const style = css\`
    color: \${color};
    background-color: #10b981;
    padding: 12px;
    border-radius: 4px;
  \`;

  // 4. Composing multiple style blocks
  const base = css\`
    background-color: transparent;
    border: 2px solid #f43f5e;
    color: #f43f5e;
  \`;
  const hover = css\`
    &:hover {
      background-color: #f43f5e;
      color: white;
    }
  \`;

  // 5. Theming support
  const ThemeButton = styled.button\`
    background-color: \${(properties) => properties.theme.colors.primary};
    color: \${(properties) => properties.theme.colors.text};
    padding: 10px;
    border: none;
    border-radius: 4px;
  \`;

  // 6. Animation with keyframes
  const rotate = css\`
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation: rotate 1s linear infinite;
  \`;

  // 7. Global styles
  /**
   *
   */
  function GlobalStyle() {
    return (
              <Global
    styles={css\`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, sans-serif;
          }
        \`}
/>
)
    );
  }

  // 8. Using "as" prop to change the element dynamically
  const StyledComponent = styled.div\`
    padding: 20px;
    margin: 10px;
    background-color: #cbd5e1;
    border-radius: 8px;
  \`;

  // 9. CSS selectors and nested elements
  const List = styled.ul\`
    list-style-type: none;
    padding: 0;
    li {
      padding: 8px;
      &:hover {
        background-color: #f9fafb;
      }
    }
  \`;

  // 10. Media queries
  const ResponsiveBox = styled.div\`
    background: #e5e7eb;
    padding: 20px;
    width: 100%;
    @media (min-width: 768px) {
      background: #f3f4f6;
      width: 50%;
    }
  \`;

  return (
    <div>
      <GlobalStyle />
      <BasicStyledButton>Basic Button</BasicStyledButton>
      <DynamicStyledButton primary>Primary Button</DynamicStyledButton>
      <DynamicStyledButton>Secondary Button</DynamicStyledButton>
      <style>Inline Styled Box</style>
      <div css={[base, hover]}>Composed Style Box</div>
      <div style={rotate}>Rotating Box</div>
      <StyledComponent as="section">Section Styled as Div</StyledComponent>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
      <ResponsiveBox>Responsive Box</ResponsiveBox>
    </div>
  );
}
/**
 *
 */
function EmotionAdvancedShowcase() {
  // 11. More complex theming with nested themes
  const darkTheme = {
    colors: {
      background: "#333",
      text: "#fff",
    },
  };

  const Button = styled.button\`
    background-color: \${(properties) => properties.theme.colors.background};
    color: \${(properties) => properties.theme.colors.text};
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: \${(properties) => properties.theme.colors.text};
      color: \${(properties) => properties.theme.colors.background};
    }
  \`;

  // 12. Using the useTheme hook for conditional styling
  const ConditionalStyledBox = styled.div\`
    padding: 20px;
    background: \${(properties) =>
      properties.theme.colors.background === "#333" ? "#444" : "#ccc"};
    border-radius: 8px;
  \`;

  // 13. Advanced selectors for sibling and child components
  const Parent = styled.div\`
    & > span {
      color: blue;
    }
    &:hover > span {
      color: red;
    }
  \`;

  // 14. Using CSS Grid with Emotion
  const GridContainer = styled.div\`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  \`;

  // 15. Optimize performance with the css prop and memoization
  const style = css\`
    color: blue;
    font-size: 20px;
  \`;
  const MemoizedComponent = React.memo(({ text }) => (
    <div css={style}>{text}</div>
  ));

  // 16. Using pseudo-classes and pseudo-elements effectively
  const BeforeAfterBox = styled.div\`
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 255, 0.2);
    }
    &:before {
      z-index: -1;
    }
    &:after {
      z-index: 1;
      background: rgba(255, 0, 0, 0.2);
    }
  \`;

  // 17. Complex animation using keyframes in Emotion
  const bounce = css\`
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    animation: bounce 2s infinite;
  \`;

  // 18. Emotion's css prop with multiple styles
  const multipleStyles = css({
    "&:hover": {
      backgroundColor: "lightcoral",
    },
    backgroundColor: "lightblue",
    padding: "10px",
  });

  // 19. Conditional styling based on props
  const ConditionalButton = styled.button\`
    color: \${(properties) => (properties.isActive ? "green" : "red")};
    border: \${(properties) =>
      properties.isActive ? "2px solid green" : "2px solid red"};
  \`;

  // 20. Responsive utilities
  const ResponsiveText = styled.p\`
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 24px;
    }
    @media (min-width: 1024px) {
      font-size: 32px;
    }
  \`;

  return (
    <ThemeProvider theme={darkTheme}>
      <Button>Themed Button</Button>
      <ConditionalStyledBox>Conditional Styles</ConditionalStyledBox>
      <Parent>
        <span>Child Component</span>
      </Parent>
      <GridContainer>
        <div>Grid Item</div>
        <div>Grid Item</div>
        <div>Grid Item</div>
      </GridContainer>
      <MemoizedComponent text="Memoized Component" />
      <BeforeAfterBox>Before and After Pseudo-elements</BeforeAfterBox>
      <div css={bounce}>Bouncing Box</div>
      <div css={multipleStyles}>Multiple Styles</div>
      <ConditionalButton isActive>Active Button</ConditionalButton>
      <ConditionalButton>Inactive Button</ConditionalButton>
      <ResponsiveText>Responsive Text</ResponsiveText>
    </ThemeProvider>
  );
}

/**
 *
 */
function EmotionAdvancedFeatures() {
  // 21. Server-Side Rendering (SSR) example
  // This would be part of your server setup, using \`extractCritical\` to pull styles.
  // const { css, ids } = extractCritical(renderToString(<App />));

  // 22. Dynamic theming with user interaction
  const [theme, setTheme] = React.useState({
    colors: {
      background: "#ffffff",
      text: "#333333",
    },
  });

  const toggleTheme = () => {
    setTheme(
      theme.colors.background === "#ffffff"
        ? {
            colors: {
              background: "#333333",
              text: "#ffffff",
            },
          }
        : {
            colors: {
              background: "#ffffff",
              text: "#333333",
            },
          },
    );
  };

  const ThemeToggleButton = styled.button\`
    background: none;
    border: 2px solid \${(properties) => properties.theme.colors.text};
    color: \${(properties) => properties.theme.colors.text};
    padding: 10px 20px;
    margin: 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: \${(properties) => properties.theme.colors.text};
      color: \${(properties) => properties.theme.colors.background};
    }
  \`;

  // 23. Composition with \`css\` prop and multiple styles
  const combinedStyles = css\`
    background: #eee;
    color: #333;
    &:hover {
      background: #ddd;
    }
  \`;

  const ComposedComponent = styled.div\`
    \${combinedStyles};
    padding: 20px;
    margin: 10px;
  \`;

  // 24. Integration with styled-system
  // Note: This requires installing styled-system
  // import { space, color } from 'styled-system';
  // const Box = styled.div\`
  //   \${space};
  //   \${color};
  // \`;

  // 25. Testing Emotion components using Jest and React Testing Library
  // Example test snippet:
  // expect(render(<Box bg="red" p={3} />).container.firstChild).toHaveStyleRule('background-color', 'red');

  // 26. Advanced Pseudo-Classes
  const SpecialList = styled.ul\`
    li:not(:first-of-type) {
      margin-top: 10px;
    }
    li:last-child {
      font-weight: bold;
    }
  \`;

  // 27. Dynamic animation based on props
  const bounceAnimation = (height) => css\`
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-\${height}px);
      }
    }
    animation: bounce 2s infinite;
  \`;

  // 28. Performance optimization with shouldForwardProp
  const FilteredButton = styled("button", {
    shouldForwardProp: (property) => property !== "color",
  })\`
    color: \${(properties) => properties.color};
  \`;

  // 29. Using Emotion with React Context for theming
  const ThemeContext = React.createContext({});
  /**
   *
   */
  function ThemeConsumerComponent() {
    const theme = useTheme();
    return <div style={{ color: theme.colors.text }}>Context Theme Text</div>;
  }

  // 30. Responsive utilities with custom properties
  const ResponsiveComponent = styled.div\`
    padding: 20px;
    @media (max-width: 600px) {
      padding: 10px;
    }
  \`;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ThemeToggleButton onClick={toggleTheme}>
          Toggle Theme
        </ThemeToggleButton>
        <ComposedComponent>Composed with multiple styles</ComposedComponent>
        {/* <Box m={2} p={3} color='tomato' bg='black'>Styled-system integration</Box> */}
        <SpecialList>
          <li>First Item</li>
          <li>Second Item</li>
          <li>Last Item</li>
        </SpecialList>
        <div css={bounceAnimation(20)}>Bouncing Animation</div>
        <FilteredButton color="#ff6347">Filtered Prop Button</FilteredButton>
        <ThemeConsumerComponent />
        <ResponsiveComponent>Responsive Padding</ResponsiveComponent>
      </div>
    </ThemeProvider>
  );
}

/**
 *
 */
function TailwindShowcase() {
  return (
    <div className="space-y-4">
      {/* 1. Responsive utility: Different margin on different screen sizes */}
      <div className="mt-4 md:mt-8 lg:mt-12">Responsive margin top</div>

      {/* 2. Hover state utility: Change background color on hover */}
      <div className="rounded bg-blue-500 p-2 text-white hover:bg-blue-700">
        Hover me!
      </div>

      {/* 3. Focus state utility: Change border color on focus within input */}
      <input
        className="rounded border-2 border-gray-300 p-2 outline-none focus:border-blue-500"
        placeholder="Focus me!"
      />

      {/* 4. Active state utility: Change scale when active/clicked */}
      <button className="rounded bg-red-500 p-2 text-white active:scale-90">
        Click me!
      </button>

      {/* 5. Flexbox utility: Create a flex container with spaced items */}
      <div className="flex justify-between space-x-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>

      {/* 6. Grid utility: Create a grid layout */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-2">Column 1</div>
        <div className="bg-gray-300 p-2">Column 2</div>
        <div className="bg-gray-400 p-2">Column 3</div>
      </div>

      {/* 7. Aspect ratio utility: Fix aspect ratio of a container */}
      <div className="aspect-w-16 aspect-h-9 bg-blue-200">
        16:9 Aspect Ratio
      </div>

      {/* 8. Shadows utility: Applying shadow to a box */}
      <div className="p-4 shadow-lg">Shadow effect</div>

      {/* 9. Text utilities: Applying font size, weight, and color */}
      <p className="text-lg font-bold text-red-600">Large bold red text</p>

      {/* 10. Animation utility: Adding animation to an element */}
      <div className="size-10 animate-spin rounded-full border-b-2 border-gray-900">
        Spinning element
      </div>

      {/* 11. Gradient utility: Applying gradient backgrounds */}
      <div className="rounded bg-gradient-to-r from-green-400 to-blue-500 p-2 text-white">
        Gradient from green to blue
      </div>

      {/* 12. Transition utility: Smooth transitions on hover */}
      <div className="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
        Hover with transition
      </div>

      {/* 13. Pseudo-classes: Using before and after pseudo-elements */}
      <div className="relative before:block before:size-16 before:bg-red-300 before:content-[''] after:block after:size-16 after:bg-blue-300 after:content-['']">
        With pseudo-elements
      </div>

      {/* 14. Container queries: Styles that apply at specific container widths */}
      <div className="md:container-md lg:container-lg xl:container-xl container">
        Responsive container
      </div>

      {/* 15. Filter utilities: Applying CSS filters */}
      <div className="grayscale hover:grayscale-0">
        <img alt="Grayscale to color on hover" src="/path/to/image.jpg" />
      </div>

      {/* 16. Blend mode utilities: Using blend modes */}
      <div className="bg-red-500 mix-blend-multiply">
        <div className="bg-blue-500 p-4 text-white">Mixed blend mode</div>
      </div>

      {/* 17. Box-decoration-break utility: Applying styles to inline elements across lines */}
      <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 box-decoration-slice">
        Multi-line gradient text that flows
      </span>

      {/* 18. Opacity utility: Control the opacity of an element */}
      <div className="opacity-50 hover:opacity-100">Hover to full opacity</div>

      {/* 19. Typography utility: Responsive typography */}
      <p className="text-base md:text-lg lg:text-xl">
        Responsive typography size
      </p>

      {/* 20. Custom utilities (extending Tailwind): Using custom classes */}
      <div className="custom-rounded">Element with custom rounded corners</div>

      {/* Dark mode example */}
      <div className="bg-white p-2 text-gray-900 dark:bg-gray-800 dark:text-white">
        Toggleable dark mode text and background
      </div>

      {/* Accessibility: hidden elements that are still screen reader accessible */}
      <div className="sr-only focus:not-sr-only">
        Hidden until focused (accessible for screen readers)
      </div>

      {/* State variants: disabled button */}
      <button
        className="cursor-not-allowed rounded bg-blue-500 p-2 text-white opacity-50"
        disabled
      >
        Disabled button
      </button>

      {/* Just-In-Time (JIT) Mode demonstration */}
      <div className="hover:bg-random-500">
        {" "}
        {/* JIT allows for arbitrary values like \`random-500\` which are not predefined */}
        Hover over me to see JIT in action
      </div>

      {/* Complex selector example */}
      <ul className="m-0 list-none p-0">
        <li className="group">
          <a className="text-blue-500 group-hover:text-red-500" href="#">
            Hover over me and my text changes
          </a>
        </li>
      </ul>

      {/* Animation keyframes utility */}
      <div className="animate-bounce">Bouncing animation</div>
    </div>
  );
}

`;

export default codeToLint;
// EOF
