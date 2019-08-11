import React from "react";
import { connect } from "react-redux";
import { postComment } from "../../ac";

class CommentForm extends React.Component {
  state = {
    user: "",
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postComment = e => {
    const { articleId } = this.props;
    this.props.postComment({ ...this.state }, articleId);
    this.setState({
      user: "",
      text: ""
    });
    e.preventDefault();
    return false;
  };

  render() {
    const { user, text } = this.state;

    return (
      <form>
        <p>
          <label>
            Name: <input value={user} onChange={this.onChange} name="user" />
          </label>
        </p>
        <p>
          <label>
            Comment:{" "}
            <textarea value={text} onChange={this.onChange} name="text" />
          </label>
        </p>
        <p>
          <button onClick={this.postComment} disabled={!user || !text}>
            Submit
          </button>
        </p>
      </form>
    );
  }
}

export default connect(
  null,
  {
    postComment
  }
)(CommentForm);
