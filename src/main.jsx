import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Amplify} from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Authenticator>
            {({signOut, user}) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                    <App/>
                </main>
            )}
        </Authenticator>
    </React.StrictMode>,
)
