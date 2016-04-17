import React, { Component } from 'react';

export default class HomeLayout extends Component{
  render(){
    return(
      <div>
        <header>
          <h1>My Recipe Book</h1>
          <AccountsUI />
        </header>
        <main>
          <div className="billboard">
            <h2>Organize Your Meals</h2>
          </div>
        </main>
      </div>
    )
  }
}
