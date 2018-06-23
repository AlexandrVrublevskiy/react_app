import React, {PureComponent} from 'react';

class Article extends PureComponent{

 /* state = {
    isOpen: false
  }*/
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

 componentWillMoumt(){
   console.log('---', 'mounting')
  }

  /*componentWillReceiveProps(nextProps) {
    //console.log('---', 'will recive props')
    if(nextProps.defaultOpens !== this.props.defaultOpens) this.setState({
        isOpen: nextProps.defaultOpens
      }) 
  }
  componentWillUpdate = (nextProps, nextState) => {
    
    console.log('---', 'will update')
  }
  */
      render(){
        //console.log('---', this.props);
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className='card-text'>{article.text}</section>;
          return(
          <div className = 'card mx-auto' style = {{width: '70%'}} >
                <div className='card-header'> 
                <h2 onClick ={this.incrementCount}>
                    {article.title} <br/>
                    clicked {this.state.count}
                    <button onClick = {onButtonClick} className='btn btn-outline-secondary btn-lg float-right' style = {{transition: '0.2s'}}>
                    {isOpen ? 'close' : 'open'}
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
      
      incrementCount = () =>{
        this.setState({
          count: this.state.count + 1
        })
      }
}

export default Article