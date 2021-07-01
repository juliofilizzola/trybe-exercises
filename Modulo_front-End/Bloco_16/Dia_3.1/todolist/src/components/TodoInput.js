import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTask} from '../redux/action/getTask';

export class TodoInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputTask: '',
    }
  }

  getInputTask = ({target}) => {
    const { value } = target;
    this.setState({ 
      inputTask: value,
    });
  }

  render() {
    const {sendTask} = this.props;
    const { inputTask } = this.state;
    return (
      <div>
        <label> 
          <input type="text" onChange={this.getInputTask} />
        </label>
        <button
          onClick={() => sendTask(inputTask)}
        >ADD</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> ({
  sendTask: (tasks) => dispatch(getTask(tasks))
})

export default connect(null, mapDispatchToProps)(TodoInput)
