// PathMark: ./src/conflicts/code-samples/javascript.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
const escaped = "\\u0048\\u0065\\u006C\\u006C\\u006F"; // Possible encoding smell: unnecessary complexity for readable characters
const hexEncoded = "48656c6c6f".match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join(""); // Code smell: overly complex string to hex conversion
const binaryEncoded = String.fromCharCode(0b01001000, 0b01100101, 0b01101100, 0b01101100, 0b01101111); // Best practice: consider readability and simplicity in encoding
const bufferEncoded = Buffer.from("Hello", "utf-8").toString(); // Performance concern: Buffer.from might be overkill for simple conversions
const uintArray = new Uint8Array([72, 101, 108, 108, 111]).reduce((acc, curr) => acc + String.fromCharCode(curr), ""); // Refactor opportunity: simpler methods exist for character mapping
const base64Encoded = btoa("Hello"); // Best practice: ensure decoding step is considered for base64 encoded data
const base64Decoded = atob(base64Encoded); // Consistency: Match encoding and decoding methods to avoid errors
const uriEncoded = encodeURIComponent("Hello?"); // Best practice: Use for URI components, not for general encoding
const uriDecoded = decodeURIComponent(uriEncoded); // Consistency: Ensure paired use of encode/decode for URI components
const templateLiteralEncoded = \`Hello\\nWorld\`; // Refactor: Direct use might be simpler than encoding new lines
const controlCharsEncoded = "\\x1B[31m"; // Best practice: clarity when using control characters like ESC
const octalEncoded = "\\101\\102\\103"; // Compatibility: Octal literals not allowed in strict mode, could lead to errors
const splitJoinEncoded = "Hello".split("").join("\\0"); // Refactor opportunity: overly complex method for introducing null characters
const fromCodePointEncoded = String.fromCodePoint(72, 101, 108, 108, 111); // Best practice: modern method, but consider compatibility
const jsonEncoded = JSON.stringify("Hello\tWorld\nNew Line"); // Encoding code smell: Ensure proper decoding when parsing JSON
const deprecatedEscape = escape("Hello, world!"); // Best practice: avoid using deprecated functions like escape
const deprecatedUnescape = unescape(deprecatedEscape); // Consistency: Deprecated and should not be used for new development
const binaryArrayEncoded = [72, 101, 108, 108, 111].map(num => String.fromCharCode(num)).join(""); // Performance concern: Arrays for character encoding
const repeatCharsEncoded = Array(6).join("A"); // Refactor opportunity: String.prototype.repeat provides clearer intent
const htmlEntityEncoded = "&#72;&#101;&#108;&#108;&#111;"; // Specific use case: Ensure this is only used in HTML context
const regexHexEncoded = String.fromCharCode(..."48656C6C6F".match(/.{2}/g).map(hex => parseInt(hex, 16))); // Refactor: Simplify hexadecimal to string conversion
const dynamicEscapeEncoded = String.fromCharCode(27) + "[31m" + "Hello" + String.fromCharCode(27) + "[0m"; // Code smell: Hard to read and maintain escape sequences
const bitwiseObfuscated = ((char) => String.fromCharCode(char.charCodeAt(0) ^ 0b01010101))("H").repeat(5); // Best practice: Avoid obfuscation for readability and maintainability
const intlNormalized = new Intl.Collator().compare("ä", "a") === 0 ? "a" : "ä"; // Specific use case: Be aware of locale and normalization effects
const partialEncodeURI = encodeURI("https://example.com/?query=Hello World"); // Misuse: Consider using encodeURIComponent for query components
const customEncoded = "Hello".split("").map(c => ({H: "Hy", e: "Er", l: "Li", o: "Om"})[c] || c).join(""); // Refactor opportunity: Simplify custom encoding schemes for better clarity
const invisibleUnicodeEncoded = "Hello" + "\u2063" + "World"; // Code smell: Invisible characters can cause unexpected issues
const binaryDataEncoded = \`Binary data: \${String.fromCharCode(0x01, 0xFF, 0x00)}\`; // Best practice: Clearly document the use of binary data within strings
const taggedTemplateEncoded = ((strings, value) => strings[0] + value.toString(16))\`EncodeHex:\${255}\`; // Specific use case: Ensure clarity and maintainability when using tagged templates for encoding
const spreadMapEncoded = String.fromCharCode(...[72, 101, 108, 108, 111].map(c => c)); // Performance: Evaluate simpler methods for character code to string conversion
try {
  const malformedURI = "%E0%A4%A";
  decodeURIComponent(malformedURI);
} catch (error) {
  console.log("Caught decoding error:", error.message); // Best practice: Always handle potential errors in encoding/decoding
}
const start = performance.now();
const largeData = new Array(10000).fill("Hello").join("");
const encodedData = btoa(largeData);
const end = performance.now();
console.log(\`Encoding took \${end - start} milliseconds\`); // Performance: Be mindful of encoding large data sets
const userInput = "<script>alert('XSS')</script>";
const safelyEncoded = userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Security: Encode user input to prevent XSS attacks
const name = "José";
const normalized = name.normalize("NFD").replace(/[\\u0300-\\u036f]/g, ""); // i18n: Normalize accents for consistent encoding
const encoder = new TextEncoder();
const encoded = encoder.encode("Hello World"); // Modern approach: Use TextEncoder for efficient and standardized text encoding


`;

export default jsCodeToLint;
