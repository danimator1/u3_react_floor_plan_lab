<img src="https://i.imgur.com/fx2orT2.png">

# Floor Plan Lab

## Intro

In the _Intro to JSX_ lesson, you saw the following React basics:

- How to define components as functions
- How to return a function component's UI defined using JSX
- How to pass props to components
- How to access the properties on props within a component

## Setup

Create a new React app using Vite

```sh
npm create vite@latest
```

cd into  your new project, run your
```sh
npm i
```
to install all dependencies, and begin!

You may want to read through the instructions before you load up your server, as you will need your command line to create a few new folders and files

## Minimum Requirements

1. Define each component in its own file. The naming convention to use for a component's file is UpperCamelCase.
2. Export each component from its module. For example:

	```js
	// FloorPlan.jsx
 	
	export default function FloorPlan(props) {
	  return (
	    <div>
	      <h1>Floor Plan</h1>
	    </div>
	  );
	}
	```

3. Define the following components as functions and code them such that they fulfill their responsibilities:

	| Component | Responsibilities |
	|---|---|
	| `<FloorPlan>` | Rendered by `<App>`.<br>Renders the following components:<br>- A `<Kitchen>` component<br>- A `<LivingRoom>` component<br>- Three `<Bedroom>` components<br>- Two `<Bath>` components<br>**Render the components in any order you wish to make the floor plan more interesting.** |
	| `<Kitchen>` | Renders the text "Kitchen" and the following components:<br>- A `<Oven>` component<br>- A `<Sink>` component |
	| `<LivingRoom>` | Renders the text "Living Room" |
	| `<Bedroom>` | Accepts a `member` prop and renders the text "Bedroom [member]" (substituting the value of the `member` prop) |
	| `<Bath>` | Accepts a `size` prop and renders the text "[size] Bath", i.e., "Half Bath", "Full Bath" |
	| `<Oven>` | Renders the text "Oven" |
	| `<Sink>` | Renders the text "Sink" |

Add the following CSS inside of **styles.css** to style each component's wrapping `<div>` to make it easier to visualize the components:

```css
div {
  border: 1px solid grey;
  margin: 5px;
  padding: 5px;
}
```

With the minimum requirements complete, the output should resemble:

<img src="https://i.imgur.com/K8eVbuC.png">

## Bonus I 

Pass the owner of each room into each bedroom via props, so the rooms say something like "Parent's Bedroom", "Baby's Room"... or anything else you'd like for each



#### Hints

- If a component accepts a prop, that prop must be passed to it by the component that renders it, in other words, parent components pass props to their children components.
```jsx
//Parent component
  <Bedroom member={"Baby"}/>
```

```jsx
//Child component
<h1> {props.member}'s room</h1>
```

## Bonus II

Style the components to make the output look like a floor plan:

<img src="https://i.imgur.com/AHq1tCF.png">






