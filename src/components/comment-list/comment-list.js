import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "../comment";
import CommentForm from "../comment-form";
import toggleOpen from "../../decorators/toggleOpen";

@toggleOpen
class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    //from @toggleOpen
    toggleOpen: PropTypes.func,
    isOpen: PropTypes.bool
  };

  render() {
    return (
      <div data-id="comment-container">
        <button onClick={this.props.toggleOpen} data-id="comment-list-btn">
          {this.props.isOpen ? "hide" : "show"} comments
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.props.isOpen) return null;
    const { comments, articleId } = this.props;

    return (
      <div data-id="comment-list-body">
        {comments && comments.map(id => <Comment id={id} key={id} />)}
        {!comments && <h3>No comments yet</h3>}
        <CommentForm articleId={articleId} />
      </div>
    );
  }
}

/*

CommentList.propTypes = {

}
*/

export default CommentList;
