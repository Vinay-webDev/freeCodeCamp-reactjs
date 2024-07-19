/* Once you define a component's initial state, 
you can display any part of it in the UI that is rendered. 
If a component is stateful, it will always have access to the data in state in its render() method. 
You can access the data with this.state. */
/* Note: The h1 should only render the value from state and nothing else. 
In JSX, any code you write with curly braces { } will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces.*/


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };