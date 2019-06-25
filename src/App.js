import React, { Component } from 'react';
import './App.css';
import TopContract from "./TopContract";
import OtherContract from "./OtherContract";
import UserForm from "./UserForm";
import CONTRACT from "./contract";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      contract: CONTRACT,
      topContract: [],
      otherContract : [],
    }
    this.updateContract = this.updateContract.bind(this)
  }

  updateContract(score)
  {
    let {contract} = this.state;
    for(var i = 0; i < contract.length; i++)
    {
      contract[i].score = score[i];
    }
    this.setState({contract: contract})
  }

  setTopContract()
  {
    const {contract} = this.state;
    const top_contract = [];
    let top1 = {
        score: 0
    }
    let top2 = {
        score: 0
    }
    for(var i = 0; i < contract.length; i++)
    {
      if(contract[i].score > top1.score)
      {
        top2 = top1;
        top1 = contract[i];
      }
      else if(contract[i].score > top2.score)
      {
        top2 = contract[i];
      }

    }
    top_contract.push(top1);
    top_contract.push(top2);

    this.setState({topContract: top_contract});
  }

  setOtherContract()
  {
    const {contract} = this.state;
    const other_contract = [];
    for(var i = 2; i < contract.length; i++)
    {
      other_contract.push(contract[i]);
    }

    let contact = {
      name: "Nous contacter",
      img: "smartphone.png",
    };

    other_contract.push(contact);

    this.setState({otherContract: other_contract});
  }

  getTopContract()
  {
    const {contract} = this.state;
    console.log(contract);
    const top_contract = [];
    let top1 = {
      score: 0
    }
    let top2 = {
      score: 0
    }
    for(var i = 0; i < contract.length; i++)
    {
      if(contract[i].score > top1.score)
      {
        top2 = top1;
        top1 = contract[i];
      }
      else if(contract[i].score > top2.score)
      {
        top2 = contract[i];
      }

    }
    top_contract.push(top1);
    top_contract.push(top2);

    return top_contract;
  }
  getOtherContract()
  {
    const {contract} = this.state;
    let topContract = this.getTopContract()
    let top1_index = contract.indexOf(topContract[0]);
    let tmp_other_contract = [];
    let other_contract = [];

    for(var i = 0; i < contract.length; i++)
    {
      if(i != top1_index)
      {
        tmp_other_contract.push(contract[i]);
      }
    }


    let top2_index = tmp_other_contract.indexOf(topContract[1]);
    for(var i = 0; i < tmp_other_contract.length; i++)
    {
      if(i != top2_index)
      {
        other_contract.push(tmp_other_contract[i]);
      }
    }

    let contact = {
      name: "Nous contacter",
      img: "smartphone.png",
    };

    other_contract.push(contact);

    return other_contract;

  }

  componentDidMount()
  {
    this.setTopContract();
    this.setOtherContract();
  }

  btnOffres()
  {
    document.querySelector("#offres-title").scrollIntoView({
      behavior: 'smooth'
    });
  }
  btnForm()
  {
    document.querySelector("#user-form").scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const topContract = this.getTopContract();
    const otherContract = this.getOtherContract();
    return (
        <div id="app">
          <div className="container-fluid" id="top-main-page">
            <h1 className="text-center" id="main-title">
              Bienvenue chez BBCDP Assurance
            </h1>
            <div className="row main-btn-wrapper">
              <div className="col-md-4 offset-md-2">
                <button className="btn btn-primary btn-block main-btn" onClick={this.btnOffres}>
                  Découvrez nos offres
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-light btn-block main-btn"  onClick={this.btnForm}>
                  Trouvez l'offre qui vous correspond
                </button>
              </div>
              <div className="col-md-3 offset-md-3">
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="row contrat-wrapper">
                  <TopContract
                      contract = {topContract}
                  />
                </div>
                <div className="row contrat-wrapper">
                  <OtherContract
                      contract = {otherContract}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <UserForm
                updateContract = {this.updateContract}
            />
          </div>
        </div>
    );
  }
}

export default App;