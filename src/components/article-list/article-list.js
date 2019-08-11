import React, { useState } from "react";
import { connect } from "react-redux";
import Article from "../article";
import Filters from "../filters";
import accordion from "../../decorators/accordion";

@connect(state => ({ articles: state.articles, filters: state.filters }))
@accordion
class ArticleList extends React.Component {
  getArticles() {
    const { articles, filters } = this.props;
    const { comments, date } = filters;
    let filteredArticles = [...articles];
    if (comments) {
      filteredArticles = filteredArticles.filter(article =>
        comments === "comments"
          ? article.comments && article.comments.length
          : !article.comments || !article.comments.length
      );
    }
    if (date) {
      filteredArticles = filteredArticles.filter(article => {
        const articleDate = new Date(article.date);
        articleDate.setHours(0);
        articleDate.setMinutes(0);
        articleDate.setSeconds(0);
        articleDate.setMilliseconds(0);
        return articleDate.toISOString() === date;
      });
    }
    return filteredArticles;
  }

  render() {
    const { isOpen, setOpenId } = this.props;

    return (
      <div ref={this.setContainerRef}>
        <Filters />
        <div className={"article-list"}>
          {this.getArticles().map(article => {
            return (
              <Article
                key={article.id}
                article={article}
                isOpen={isOpen(article.id)}
                onBtnClick={setOpenId(article.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  setContainerRef = containerRef => console.log("container: ", containerRef);
}

/*
class ArticleList extends Component {
  state = {
    openArticleId: this.props.defaultOpenId
  };

  render() {
    if (this.state.error) {
      return <h3>Some error</h3>;
    }
    return (
      <div>
        {this.props.articles.map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={article.id === this.state.openArticleId}
            onBtnClick={this.toggleOpenArticle(article.id)}
          />
        ))}
      </div>
    );
  }

  toggleOpenArticle = openArticleId => () => this.setState({ openArticleId });
}
*/

export default ArticleList;
