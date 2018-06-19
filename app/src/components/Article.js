import React, {Component} from 'react';

class Article extends Component{

 /* state = {
    isOpen: false
  }*/
  constructor(props){
    super(props)
    this.state = {
      isOpen: props.defaultOpens
    }
  }

 componentWillMoumt(){
   console.log('---', 'mounting')
  }

  render(){
    //console.log('---', this.props);
    const {article} = this.props;
    const body = this.state.isOpen && <section className='card-text'>{article.text}</section>;
      return(
      <div className = 'card mx-auto' style = {{width: '70%'}} >
            <div className='card-header'> 
            <h2>
                {article.title}
                <button onClick = {this.handleClick} className='btn btn-outline-secondary btn-lg float-right' style = {{transition: '0.2s'}}>
                {this.state.isOpen ? 'close' : 'open'}
                </button>
            </h2>
            </div>
         <div className='card-body'>
          <h6 className='card-subtitle text-muted'>
              creation date: {(new Date(article.date)).toDateString()}
          </h6>
              {body}
         </div>
      </div>     
        )
  } 
    handleClick = () => {
    console.log('---', 'click')
    this.setState ({
      isOpen: !this.state.isOpen
    })
  }
     /*handleClick = () => {
      console.log('---', 'click')
    }*/  
}


export default Article