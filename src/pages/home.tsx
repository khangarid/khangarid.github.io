import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchRequest } from '../store/projects/actions';

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromDispatch;

class HomeComponent extends React.Component<AllProps> {
  componentDidMount = () => {
    this.props.fetchRequest();
  }

  render() {
    return (
      <div>
        Hi, I'm Khangarid
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
})

const Home = connect(null, mapDispatchToProps)(HomeComponent);

export { Home };
