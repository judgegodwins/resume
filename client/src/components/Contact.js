import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.phoneRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    });

  }

  sendMessage(name, email, message, phoneNumber) {
    let { setStatus } = this.props;
    setStatus('sending');

    return fetch('/api/message/deliver', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message, phoneNumber: Boolean(phoneNumber) ? phoneNumber : undefined })
    })
      .then(data => data.json())
      .then(res => {
        setStatus('sent');
        console.log('response: ', res)

        if (res.success) {
          setStatus('success');
          return this.setState({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setStatus('failure');
        }

      })
      .catch(error => setStatus('failure'));

  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
      this.sendMessage(name, email, message, this.phoneRef.current.value)
    } else
      return;
  }

  render() {
    return (
      <div style={this.props.style} className="contact-div" id="contact">
        <form className="leave-message">
          <h2 style={{ marginBottom: "20px" }}>Leave Me a Message</h2>
          <div className="short-input-child outside">
            <label htmlFor="name">Name*</label>
            <div className="is-relative">
              <input type="text" value={this.state.name} id="name" name="name" onChange={this.handleChange} required />
              <span className="focus-border"></span>
            </div>
          </div>

          <div className="short-input">
            <div className="short-input-child">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="is-relative">
                <input type="tel" id="phoneNumber" name="phoneNumber" ref={this.phoneRef} onChange={this.handleChange} required />
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="short-input-child">
              <label htmlFor="email">Email*</label>
              <div className="is-relative">
                <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>
          
          <div className="short-input-child outside">
            <label htmlFor="message">Message*</label>
            <div className="is-relative">
              <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange} required />
              <span className="focus-border"></span>
            </div>
          </div>
          <button type="submit" disabled={this.props.status === 'sending' ? true : false} style={{ marginTop: "20px" }} onClick={this.handleSubmit}>
            {
              this.props.status === 'sending' ?
                <div className="cover">
                  <div className="tuner"></div>
                  <div className="tuner"></div>
                  <div className="tuner"></div>
                </div>
                : 'Send Message'
            }
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;