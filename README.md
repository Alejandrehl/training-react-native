# training-react-native

Creation of an application to practice React Native. Best practices everywhere. :smile::star2:

## Concepts

1. Props: System to pass data from a parent to a child.
2. State: System to track a piece of data that will change over time. If that data changes, our app will "rerenderer".

## Notes

React Component - Four Parts

1. Import libraries we need to create a Component.
2. Create a Component - A function that returns some "JSX".
3. Create a StyleSheet to style our Component.
4. Export the Component so we can use it elsewhere in our project.

- (Component files create and export exactly one React Component)

## Some Basic Elements

- Text: Show some text to the user. Any text placed outside of a Text will result in error.
- View: General purpose element used for grouping other elements or styling.
- Image: Show an image.
- Button: Show a Button that the user can press. Give us some feedback wherever the user pressed it.

## FlatList

1. Turns an array into a list of elements.
2. We are required to pass in a prop of 'data'.
3. Also required pass a 'renderItem' prop: Function that will turn each individual element item into an element.
4. If you are coming from React on the web, you might be used to "Mapping" an array of data to build a list; FlatList in better in React Native.

- Important/Optional props
  - horizontal
  - showHorizontalScrollIndicator

## Buttons

1. Button: Very simple component for showing a button and detecting a press.
2. TouchableOpacity: Highly customizable component that can detect a press on just about any kind element.

## Rules of JSX

- We can assemble different JSX elements like normal HTML.
- We configure different JSX elements using props.
- We can refer to JS variables inside of a JSX block by using curly braces.
- We can assign JSX elements to a variable, then show that variable inside of a JSX block.

## Layout Systems

1. Box Object Model: The height/width of an element + the space around it -> Use this to affect the positioning of a single element.
2. Flex Box: How some number of sibling elements get laid out inside a parent -> Use this position multiple elements with a common a parent.
3. Position: How a single elements gets laid out inside of a parent -> Use this to override Box Object Model + Flex Box.

- alignItems: "stretch" by default
