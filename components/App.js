import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';

// componenets
import Routers from './Routers';

// contract 

 import PMS from '../abis/PMS.json'



class App extends Component {

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockChainData();
 }


 async   loadBlockChainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts()
    this.setState({account : accounts[0]})

    let networkId = await web3.eth.net.getId();
    let PmsData = PMS.networks[networkId];
    let pms = new web3.eth.Contract(PMS.abi,PmsData.address);
    this.setState({pms})

    const leng = await pms.methods.len().call();
     this.setState({length:leng.toNumber()});

     const tleng = await pms.methods.tlen().call();
     this.setState({tlength:tleng.toNumber()});

    for(let i = 0 ; i < this.state.length; i ++){
      let data = await pms.methods.newData(i).call();
      this.setState({data:[...this.state.data , data]})
    }
 
    for(let i = 0 ; i < this.state.tlength; i ++){
      let trash = await pms.methods.trash(i).call();
      this.setState({trash:[...this.state.trash , trash]})
    }

  }

  async loadWeb3 () {
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
   }else if(window.web3){
     window.web3 = new Web3(window.web3.currentProvider);
   }else{
     alert("please install metamask")
   }
  }

  addInfo =(user,entity,pass) => {
     this.state.pms.methods.CreateCred(user,entity,pass).send({from:this.state.account});
  }

  editInfo = (id,pass) => {
    this.state.pms.methods.update(id,pass).send({from:this.state.account})
  }

  delete = (id) => {
    this.state.pms.methods.destroy(id).send({from:this.state.account})
  }

  deletePermanently = (id) => {
    this.state.pms.methods.destroyPermanently(id).send({from:this.state.account})
  }

  refresh =() => {
    setTimeout(() =>  window.location.reload(false), 12000);
  }

  

  constructor(props) {
    super(props);
    this.state = {
      account:'',
       pms:{},
       data:[],
       length:'',
       tlength:'',
       trash:[],
    }
  }


  render() {
 
    return (
       <Routers  

  con={this.state.data} 
  del={this.delete}
  add={this.addInfo}
  edit={this.editInfo} 
  myTrash={this.state.trash}
   deletePermanently={this.deletePermanently} 
   refresh={this.refresh}
   setData={this.setLoggedInuser}
  loggedInuser={this.state.account}
          />
    );
  }
}

export default App;

