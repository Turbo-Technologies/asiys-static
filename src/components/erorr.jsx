import React from 'react'
import { Button } from "@material-ui/core";

export default function Error() {
    return (
        <main style={{display:'flex', height:"90vh", width:"100%", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1>We Don't recognize this route</h1>
            <p>
                <a href="/" style={{textDecoration:'none'}}>
                    <Button variant="outlined" color="primary">
                        Back to Home
                    </Button>
                </a>
            </p>
        </main>
    )
}
