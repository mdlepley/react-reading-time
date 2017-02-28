import React from 'react';

export default class ReadingTime extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readTime: 0
    }
  }

  // react lifecycle hooks
  componentWillMount() {
    this.updateReadingTime(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateReadingTime(nextProps);
  }

  updateReadingTime(props) {
    const words = this.countWords(props.text);
    const readTime = Math.round(words / props.wordsPerMinute);

    this.setState({ readTime });
  }

  countWords(text) {
    return text.split(/\s+/).length
  }

  render() {
    const { textColor, ...rest } = this.props;
    const { readTime } = this.state;
    const minutes = readTime === 1 ? 'minute' : 'minutes';

    return (
      <div {...rest}>
        <p style={{ color: textColor }}>
          Estimated read time:<br/><br/>
          <span>{readTime} {minutes}</span>
        </p>
      </div>
    )
  }
}

ReadingTime.propTypes = {
  wordsPerMinute: React.PropTypes.number,
  textColor: React.PropTypes.string
};

ReadingTime.defaultProps = {
  wordsPerMinute: 270,
  textColor: 'blue'
};
