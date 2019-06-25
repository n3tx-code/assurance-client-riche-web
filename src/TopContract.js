import React, { Component } from 'react';
import "./contractCard.css";

class TopContract extends Component{

    first20Words(txt)
    {
        let txt_split = txt.split(" ");
        let shorted_text = "";
        for (var i=0; i<20 ;i++)
        {
            shorted_text += " " + txt_split[i];
        }
        shorted_text += " ...";

        return shorted_text;
    }
    render() {
        const { contract } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-12" id="offres-title">
                        <h2 className="text-center">Nos offres</h2>
                    </div>
                </div>
                <div className="row">
                    {contract.map((content, key) => (
                        <div className="col-md-6 fadeIn animated" key={key}>
                            <div className="card contract-card top-contract-card">
                                <img
                                    className="card-img-top contrat-icon"
                                    src={process.env.PUBLIC_URL + "/img/" + content.img}
                                    alt={content.name}
                                    title={content.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center text-center">{content.name}</h5>
                                    <p className="card-text">{this.first20Words(content.txt)}</p>
                                    <a href="/offres/" className="btn btn-primary btn-block">Notre contrat {content.name}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default TopContract;