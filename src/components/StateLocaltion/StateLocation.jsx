import React, { Component } from 'react'
import EventCard from '../EventCard/EventCard';

class StateLocation extends Component {
  state = { 
    events: [],
    markers: [],
    user: this.props.user
   }



  render = () => { 
    return ( 
      <>
      {/* <EventCard
      event={this.props.event} 
      history={this.props.history}
      user={this.props.user} */}
      {/* /> */}
      </>
     );
  }
}
 
export default StateLocation ;