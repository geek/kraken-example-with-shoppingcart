/*-------------------------------------------------------------------------------------------------------------------*\
 |  Copyright (C) 2015 PayPal                                                                                          |
 |                                                                                                                     |
 |  Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance     |
 |  with the License.                                                                                                  |
 |                                                                                                                     |
 |  You may obtain a copy of the License at                                                                            |
 |                                                                                                                     |
 |       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
 |                                                                                                                     |
 |  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
 |  on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
 |  the specific language governing permissions and limitations under the License.                                     |
 \*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

var React = require('react');

module.exports = React.createClass({

    render: function render() {
        var msgs = this.props.messages['layouts/master'];
        return (
            <html lang='en' className='nm-np'>
                <head>
                    <meta charset='utf-8'/>
                    <title>{msgs.storeName}</title>
                    <link rel='stylesheet' href='css/app.css'/>
                    <script src='/bundle.js'></script>
                </head>
                <body className='nm-np'>
                <header className='grey'>
                    <div className='wrapper'>
                        <h1>{msgs.storeName}</h1>
                        <nav>
                            <ul className='nm-np inline'>
                                <li><a href='/'>{msgs.buy}</a></li>
                                <li><a href='/products'>{msgs.edit}</a></li>
                                <li><a href='/cart'>{msgs.cart}</a></li>
                            </ul>
                        </nav>
                        <div className='lang'>
                            <ul className='nm-np inline'>
                                <li><a href='/setLanguage/EN-us'><img src='/img/us.png' alt='English'/></a></li>
                                <li><a href='/setLanguage/ES-es'><img src='/img/es.png' alt='Spanish'/></a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className='wrapper'>
                    {this.props.children}
                </div>
                <div id='tentacle'></div>
                </body>
            </html>
        );
    }
});
