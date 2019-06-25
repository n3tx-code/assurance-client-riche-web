import React, { Component } from 'react';
import "./contractCard.css";

class OtherContract extends Component{

    render() {
        const { contract } = this.props;
        return (
            <div className="row">
                {contract.map((content, key) => (
                    <div className="col-md-4 contract-card-other zoomIn animated" key={key}>
                        <div className="card contract-card">
                            <img className="card-img-top contrat-icon"
                                 src={process.env.PUBLIC_URL + "/img/" + content.img}
                                 alt={content.name}
                                 title={content.name}
                            />
                                <div className="card-body contact-other-card-body">
                                    <h5 className="card-title text-center">{content.name}</h5>
                                    <a href="/offres/" className="btn btn-primary btn-block btn-bottom">{content.name}</a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default OtherContract;