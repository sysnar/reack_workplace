import React, {Component} from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc
    };
  }
  render() {
    console.log(this.props.data);
    console.log('UpdateContet render');
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="POST"
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            
          }.bind(this)}
          >
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title"
                value={this.state.title}
                onChange={function(e) {
                  console.log(e.target.value);
                  this.setState({title:e.target.value});
                }.bind(this)} >
              </input>
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description"
                value={this.state.desc}
                onChange={function(e) {
                  console.log(e.target.value);
                  this.setState({desc:e.target.value});
                }.bind(this)} >
              </textarea>
            </p>
            <p>
              <input type="submit" value="제출"></input>
            </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;