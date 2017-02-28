import React from 'react'
import ReactDOM from 'react-dom'
import ReadingTime from '../src/reading-time'

class ReactReadingTime extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      text: 'This is sample text'
    }
  }

	updateText(ev) {
		this.setState({ text: ev.target.value })
	}

	render () {
	  return (
	    <div className='container' style={{ marginTop: '50px' }}>
	      <div className='col-lg-8 col-lg-offset-2 form-group'>
	        <textarea
	          value={this.state.text}
	          onChange={this.updateText.bind(this)}  //http://stackoverflow.com/questions/38863028/cant-fix-module-build-failed-syntaxerror-unexpected-token-error
	          className='form-control'
	          style={{ height: '500px', resize: 'none' }}>
	        </textarea>
	      </div>
	      <ReadingTime text={this.state.text} className='col-lg-2 well' />
	    </div>
	  );
	}
}

ReactDOM.render(<ReactReadingTime />, document.getElementById('react'));
