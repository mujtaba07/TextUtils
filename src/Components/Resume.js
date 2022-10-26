import React from 'react'
import {Container, Header, Grid,} from 'semantic-ui-react'
import { Page ,Document,pdfjs} from 'react-pdf'
import MSResume from "../assets/MUJTABA_SAYYED.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
    return (
        <Container fluid>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header className='header' as='h1'>Resume</Header>
                        <Document file={MSResume}
                        onLoadError={console.error}
                        style={{width:'auto',height:'auto'}}>
                            <Page pageIndex={0} />
                        </Document>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    );
}
 export default Resume
