import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'

class Footer extends Component {
    render() {
        const LinkStyle = {
            color : 'white', 
            textDecoration: 'none',
            paddingRight: '10px',
            marginTop: '20px',
            position: 'relative',
            marginLeft: '30px',
          }
        return (
                <div className="Footer">
                    <footer id="footer" style={{paddingTop: '10px'}}>

                        <div id="link">
                            <a href="QuiSommesNous" style={LinkStyle}> Qui sommes-nous ?</a> 
                            <a href="ContactezNous" style={LinkStyle}> Contactez-nous</a>
                            <a href="MentionsLegales" style={LinkStyle}> Mentions légales</a> 
                            <a href="CGV" style={LinkStyle}> CGV</a> 
                            <br/>
                            <p style={LinkStyle}> <strong>  &#9400; Diogène - 2019 </strong> </p>
                        </div>

                    </footer>
                </div>
        );
    }
}

export default Footer;