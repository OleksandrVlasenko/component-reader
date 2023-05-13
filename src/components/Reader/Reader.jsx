import { Component } from 'react';
import { Controls } from 'components/Controls/Controls';
import { Progress } from 'components/Progress/Progress';
import { Publication } from 'components/Publication/Publication';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(prevState => ({
      index: prevState.index + value,
    }));
  };

  componentDidMount() {
    const index = localStorage.getItem('index');
    if (index) {
      this.setState({ index: Number(index) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem('index', this.state.index);
    }
  }
  render() {
    const { index } = this.state;
    const items = this.props.items;

    const currentItem = items[index];
    return (
      <>
        <div>
          <Controls
            current={index + 1}
            total={items.length}
            onChange={this.changeIndex}
          />

          <Progress current={index + 1} total={items.length} />

          <Publication title={currentItem.title} text={currentItem.text} />
        </div>
      </>
    );
  }
}
