import React, { useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";

function App() {
    useEffect(() => {
        microsoftTeams.app.initialize();
    }, []);

    return (
        <div>
            <h1>Welcome to Microsoft Teams Web App!</h1>
            <p>This app runs inside Teams as a Tab.</p>
        </div>
    );
}

export default App;