import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';


class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/cart'>
            <Menu.Item name='cart' />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
    
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
       
    );
  }

  leftNavs = () => {
      const { user } = this.props;
      if (user.id) { 
        return (
          <Menu.Menu>
            <Link to='/menu'>
              <Menu.Item name='menu' />
            </Link>
         </Menu.Menu>
        );
      }
      return (
      <Link to='/visitmenu'>
        <Menu.Item name='menu' />
       </Link>
      )
  }

  render() {
    return (
      <div>
        <Segment inverted style={styles.corners}>
        <Menu inverted pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/about'>
            <Menu.Item name='about' />
          </Link>
     
          { this.leftNavs() }
          { this.rightNavs() }
        </Menu>
        </Segment>
      </div>
    );
  }
}

const styles = {
  corners: {
    borderRadius: '0px'
  },
}
const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
