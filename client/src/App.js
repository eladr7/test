import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleArithmetics2.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, n1: 0, n2: 0};


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      debugger
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample2);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample2 = async () => {
    const { accounts, contract } = this.state;
      // Get the value from the contract to prove it worked.
      const response = await contract.methods.Mul(this.state.n1, this.state.n2).call();
  
      // Update state with the result.
      this.setState({ storageValue: response });
  }

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Do some arithmetics you cunt!</h1>
        <input type="number" onChange={e => this.setState({n1: e.target.value})}/>
        <input type="number" onChange={e => this.setState({n2: e.target.value})}/>
        <button onClick={e => this.runExample2()}>Click me to calculate your cunt calculation you cunt</button>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
