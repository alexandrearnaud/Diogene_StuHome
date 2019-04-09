import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
                <div className="Footer">
                    <footer id="footer">

                        <div id="link">

                        <li><a href="ContactezNous">Contactez nous</a></li>
                        <li><a href="MentionsLegales">Mention légales</a></li>
                        <li><a href="CGV">CGV</a></li>

                        </div>

                    </footer>
                </div>
        );
    }
}

export default Footer;