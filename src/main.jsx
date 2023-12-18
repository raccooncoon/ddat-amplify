import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {Amplify} from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import {Authenticator, useTheme, View} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Image} from '@aws-amplify/ui-react';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

Amplify.configure(amplifyconfig);

const queryClient = new QueryClient();

const components = {
    Header() {
        const {tokens} = useTheme();
        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    height="35%"
                    width="35%"
                    alt="DDAT logo"
                    src="public/ddat.png"
                />
            </View>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Authenticator components={components}>
            {({signOut}) => (
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools initialIsOpen={true}/>
                    <main>
                    <button onClick={signOut}>Sign out</button>
                        <App signOut={signOut} />
                    </main>
                </QueryClientProvider>
            )}
        </Authenticator>
    </React.StrictMode>,
)
