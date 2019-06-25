import React, { Component } from 'react';
import "./UserForm.css";
import TAB_PROFIL from "./profil";


class UserForm extends Component{

    constructor(props) {
        super(props)
        this.state = {
            automobile: 0,
            habitation: 0,
            vie: 0,
            deces: 0,
            vie_privee: 0,
            vie_pro: 0,
            handicap: 0,
            emploi: 0,
            activite_pro: 0,
            resp_civile: 0
        }
    }

    getCatAge = (a) =>
    {
        if(a < 18)
        {
            return "enfant";
        }
        else if (18 <= a && a < 25)
        {
            return "adulte";
        }
        else if(25 <= a && a < 50)
        {
            return "parent";
        }
        else
        {
            return "vieux";
        }
    }

    getFormValue = (event) =>
    {
        event.preventDefault();
        console.log("TAB_PROFIL :");
        console.log(TAB_PROFIL);
        let score = [];

        const cat_sociaux_pro = document.getElementById("cat-sociaux-pro").value;
        const secteur_travail = document.getElementById("secteur-travail").value;
        const mode_transport = document.querySelector('input[name="mode-transport"]:checked').value;
        const zone_habitation = document.querySelector('input[name="habitation"]:checked').value;
        const sport = document.querySelector('input[name="sport"]:checked').value;
        const age = document.getElementById("age").value;

        let automobile = TAB_PROFIL["automobile"][cat_sociaux_pro] + TAB_PROFIL["automobile"][secteur_travail] +
            TAB_PROFIL["automobile"][mode_transport] + TAB_PROFIL["automobile"][zone_habitation] +
            TAB_PROFIL["automobile"][sport] + TAB_PROFIL["automobile"][this.getCatAge(parseInt(age))];

        let habitation = TAB_PROFIL["habitation"][cat_sociaux_pro] + TAB_PROFIL["habitation"][secteur_travail] +
            TAB_PROFIL["habitation"][mode_transport] + TAB_PROFIL["habitation"][zone_habitation] +
            TAB_PROFIL["habitation"][sport] + TAB_PROFIL["habitation"][this.getCatAge(parseInt(age))];

        let vie = TAB_PROFIL["vie"][cat_sociaux_pro] + TAB_PROFIL["vie"][secteur_travail] +
            TAB_PROFIL["vie"][mode_transport] + TAB_PROFIL["vie"][zone_habitation] +
            TAB_PROFIL["vie"][sport] + TAB_PROFIL["vie"][this.getCatAge(parseInt(age))];

        let deces = TAB_PROFIL["deces"][cat_sociaux_pro] + TAB_PROFIL["deces"][secteur_travail] +
            TAB_PROFIL["deces"][mode_transport] + TAB_PROFIL["deces"][zone_habitation] +
            TAB_PROFIL["deces"][sport] + TAB_PROFIL["vie"][this.getCatAge(parseInt(age))];

        let vie_privee = TAB_PROFIL["vie_privee"][cat_sociaux_pro] + TAB_PROFIL["vie_privee"][secteur_travail] +
            TAB_PROFIL["vie_privee"][mode_transport] + TAB_PROFIL["vie_privee"][zone_habitation] +
            TAB_PROFIL["vie_privee"][sport] + TAB_PROFIL["vie_privee"][this.getCatAge(parseInt(age))];

        let vie_pro =  TAB_PROFIL["vie_pro"][cat_sociaux_pro] + TAB_PROFIL["vie_pro"][secteur_travail] +
            TAB_PROFIL["vie_pro"][mode_transport] + TAB_PROFIL["vie_pro"][zone_habitation] +
            TAB_PROFIL["vie_pro"][sport] + TAB_PROFIL["vie_pro"][this.getCatAge(parseInt(age))];

        let handicap = TAB_PROFIL["handicap"][cat_sociaux_pro] + TAB_PROFIL["handicap"][secteur_travail] +
            TAB_PROFIL["handicap"][mode_transport] + TAB_PROFIL["handicap"][zone_habitation] +
            TAB_PROFIL["handicap"][sport] + TAB_PROFIL["handicap"][this.getCatAge(parseInt(age))];

        let emploi = TAB_PROFIL["emploi"][cat_sociaux_pro] + TAB_PROFIL["emploi"][secteur_travail] +
            TAB_PROFIL["emploi"][mode_transport] + TAB_PROFIL["emploi"][zone_habitation] +
            TAB_PROFIL["emploi"][sport] + TAB_PROFIL["emploi"][this.getCatAge(parseInt(age))];

        let activite_pro = TAB_PROFIL["activite_pro"][cat_sociaux_pro] + TAB_PROFIL["activite_pro"][secteur_travail] +
            TAB_PROFIL["activite_pro"][mode_transport] + TAB_PROFIL["activite_pro"][zone_habitation] +
            TAB_PROFIL["activite_pro"][sport] + TAB_PROFIL["vie_pro"][this.getCatAge(parseInt(age))];

        let responsabilite_civile = TAB_PROFIL["responsabilite_civile"][cat_sociaux_pro] + TAB_PROFIL["responsabilite_civile"][secteur_travail] +
            TAB_PROFIL["responsabilite_civile"][mode_transport] + TAB_PROFIL["responsabilite_civile"][zone_habitation] +
            TAB_PROFIL["responsabilite_civile"][sport] + TAB_PROFIL["responsabilite_civile"][this.getCatAge(parseInt(age))];

        score[0] = vie;
        score[1] = deces;
        score[2] = vie_privee;
        score[3] = vie_pro;
        score[4] = handicap;
        score[5] = emploi;
        score[6] = automobile;
        score[7] = habitation;
        score[8] = activite_pro;
        score[9] = responsabilite_civile;

        /*console.log("automobile : " + automobile);
        console.log("habitation : " + habitation);
        console.log("vie : " + vie);
        console.log("deces : " + deces);
        console.log("vie_privee : " + vie_privee);
        console.log("vie_pro : " + vie_pro);
        console.log("handicap : " + handicap);
        console.log("emploi : " + emploi);
        console.log("vie : " + vie);
        console.log("activite_pro : " + activite_pro);
        console.log("responsabilite_civile : " + responsabilite_civile);*/

        this.props.updateContract(score)

        document.querySelector('#offres-title').scrollIntoView({
            behavior: 'smooth'
        });

    };


    render() {
        return (
            <div id="user-form">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Découvrez le contrat qui vous correspont</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form id="user-form-wrapper" onSubmit={this.getFormValue}>
                            <div className="form-group">
                                <label htmlFor="cat-sociaux-pro">Catégorie sociaux professionel :</label>
                                <select className="form-control" id="cat-sociaux-pro" required>
                                    <option disabled selected>Catégorie sociaux professionel</option>
                                    <option value="agriculteur">Agriculteurs exploitants</option>
                                    <option value="chef">Artisans, commerçants, chefs d’entreprise, auto-entrepreneur</option>
                                    <option value="cadre">Cadres et professions intellectuelles supérieures</option>
                                    <option value="employe">Employé</option>
                                    <option value="ouvrier">Ouvrier</option>
                                    <option value="retraite">Retraité</option>
                                    <option value="chomage">Autres personnes sans activité professionnelle</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="secteur-travail">Secteur de travail :</label>
                                <select className="form-control" id="secteur-travail" required>
                                    <option disabled selected>Secteur de travail</option>
                                    <option value="agroalimentaire">Agroalimentaire</option>
                                    <option value="banque">Banque / Assurance</option>
                                    <option value="batiment">Batîment</option>
                                    <option value="chimie">Chimie / Pharmaceutique</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="communication">Comunication</option>
                                    <option value="info">Informatique</option>
                                    <option value="conseil">Études et conseils</option>
                                    <option value="transport">Transport</option>
                                    <option value="tourisme">Tourisme</option>
                                    <option value="energie">Energie</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mode-transport">Mode de transport :</label>
                                <div className="radio">
                                    <label><input type="radio" name="mode-transport" value="voiture" required/> Voiture</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="mode-transport" value="deux_roues"/> Deux roues</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="mode-transport" value="commun"/> Transport en commun</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="mode-transport" value="velo"/> Vélo</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="mode-transport" value="pied"/> A pied</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="habitation">Lieu d'habitaion :</label>
                                        <div className="radio">
                                            <label><input type="radio" name="habitation" value="urbaine" required/> Zone urbaine</label>
                                        </div>
                                        <div className="radio">
                                            <label><input type="radio" name="habitation" value="rurale"/> Zone rurale</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="sport">Pratiquez vous un activité sportive ?</label>
                                        <div className="radio">
                                            <label><input type="radio" name="sport" value="sport" required/> Oui <i className="fas fa-check"></i></label>
                                        </div>
                                        <div className="radio">
                                            <label><input type="radio" name="sport" value="pas_sport"/> Non <i className="fas fa-times"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="age">Votre âge:</label>
                                        <input type="number" min="18" className="form-control" id="age" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 offset-3">
                                    <button type="submit" className="btn btn-light btn-block">Valider</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default UserForm;