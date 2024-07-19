/* Remember "state" it should always be declared inside the class component's constructor **** */
/* syntax = this.state */
/* this.state = is always a {javascript object} */

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state = {
        firstName: "Bro!"
      }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1>
        </div>
      );
    }
  };