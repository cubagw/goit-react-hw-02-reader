import React, { Component } from 'react';
import T from 'prop-types';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        text: T.string.isRequired,
        title: T.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    currenPage: 0,
  };

  nextPage = () => {
    this.setState(prevState => ({
      currenPage: prevState.currentArticle + 1,
    }));
  };

  prevPage = () => {
    this.setState(prevState => ({
      currenPage: prevState.currenPage - 1,
    }));
  };

  render() {
    return (
      <div>
        {/* <h2>Quiz</h2>
        <p>{this.props.questions[this.state.questionIdx]}</p> */}
      </div>
    );
  }
}
