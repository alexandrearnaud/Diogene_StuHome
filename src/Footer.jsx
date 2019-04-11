import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
                <div className="Footer">
                    <footer id="footer">

                        <div id="link">

                        <li><a href="QuiSommesNous">Qui sommes-nous ?</a></li>
                        <li><a href="ContactezNous">Contactez-nous</a></li>
                        <li><a href="MentionsLegales">Mentions légales</a></li>
                        <li><a href="CGV">CGV</a></li>
                        
                        <li> &#9400; Diogène - 2019 </li>

                        </div>

                    </footer>
                </div>
        );
    }
}

export default Footer;