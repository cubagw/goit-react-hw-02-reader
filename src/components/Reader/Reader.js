import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Reader.module.css';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf().isRequired,
  };

  state = {
    currentPage: 0,
  };

  nextPage = () => {
    this.state.currentPage + 1 < this.props.items.length &&
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1,
      }));
  };

  prevPage = () => {
    this.state.currentPage + 1 > 1 &&
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1,
      }));
  };

  render() {
    const { currentPage } = this.state;
    const { items } = this.props;

    return (
      <div className={styles.reader}>
        {/* <!-- Разметка компонента <Controls> --> */}
        <Controls
          onNextPage={this.nextPage}
          onPrevPage={this.prevPage}
          nextPageDisabled={currentPage >= items.length - 1}
          prevPageDisabled={currentPage <= 0}
        />

        {/* <!-- Разметка компонента <Counter> --> */}
        <Counter
          totalNumberOfPages={items.length}
          numberOfCurrentPage={currentPage + 1}
        />

        {/* <!-- Разметка компонента <Publication> --> */}
        <Publication item={items[currentPage]} />
      </div>
    );
  }
}
