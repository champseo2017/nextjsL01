import React, { Component } from 'react'

class Footer extends Component {

  shouldComponentUpdate() {
    return false
  }
  
  render() {
    return (
        <footer 
            id="sticky-footer" 
            className="py-4 bg-dark text-white-50">
            <div className="container text-center">
              <small>Copyright &copy; Your Website</small>
            </div>
      </footer>
    )
  }
}

export default Footer