import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";
import AuthContext from "../../context/auth-context";

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] Rendering...");
    return (
      <AuthContext.consumer>
        {context =>
          this.props.persons.map((person, index) => {
            return (
              <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={event => this.props.changed(event, person.id)}
                isAuthenticated={this.props.isAuthenticated}
              />
            );
          })
        }
      </AuthContext.consumer>
    );
  }
}

export default Persons;
