import React, { Component } from 'react'
import Identicon from 'react-identicons';
import kyotoNetwork from '../DSLogo.png';
<<<<<<< HEAD
=======
import metamasklogo from '../metamask.png';
>>>>>>> cef9dd4 (second commit)

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
<<<<<<< HEAD
          href="https://www.digital-self.com"
=======
          href="https://digitalselflive.com/onboarding"
>>>>>>> cef9dd4 (second commit)
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kyotoNetwork} height='48' alt=""/>
        </a>
<<<<<<< HEAD
        <ul className="navbar-nav px-3 text-white">
            { ! this.props.account
              ? <div className="row text-center text-monospace">    
=======
        
        <ul className="navbar-nav px-3 text-white">
        
            { ! this.props.account
              ? <div className="row text-center text-monospace">
              
>>>>>>> cef9dd4 (second commit)
                  <button
                    type="submit"
                    onClick={(e) => this.props.on(e)}
                    className="btn btn-success btn-sm"
                    style={{ width: '125px', fontSize: '17px'}}
                    ><b>Connect</b>
                  </button>&nbsp;
<<<<<<< HEAD
=======
                  <img src={metamasklogo} height='30' width='30' alt=""/>
>>>>>>> cef9dd4 (second commit)
                </div>
              : 
              <div className="row text-center text-monospace">
                    <span style={{fontSize: '12px', margin: 'auto', color: 'white'}}>
<<<<<<< HEAD
                      {this.props.account}&emsp;
=======
                      {this.props.account.slice(0,6)}...{this.props.account.slice(-4)}
>>>>>>> cef9dd4 (second commit)
                    </span>
                    <Identicon string={this.props.account} size="30" className='align-text-bottom' bg='#343A40'/>&nbsp;
                </div>
            }
          </ul>
      </nav>
    );
  }
}

export default Navbar;
<<<<<<< HEAD
=======


//{nft.owner.slice(0,6)}...{nft.owner.slice(-4)}
//{this.props.account}&emsp;
>>>>>>> cef9dd4 (second commit)
