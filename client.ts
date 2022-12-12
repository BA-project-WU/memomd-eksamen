//Importing the Client Library
const { Client } = require('@umbraco/headless-client')

//Connecting to the Heartcore project on Cloud
const client = new Client({ projectAlias: 'nicole-ba-test' })

//If protection is turned on you will have to add the API Key that has been asigned to your user 
client.setAPIKey('3wvrfahXVBS0vPH3YqBv')

//Create an async function to fetch all content from the root of the project
async function run() {

    //Getting the content from the method where root is targeted
    const contentResult = await client.delivery.content.root()

    //Getting the content from the method where a media item is targeted by its Id
    const mediaResult = await client.delivery.media.byId('b21f3fc4-7d8e-47f7-885b-65b770cb5374')

    //Printing to the console as JSON with indentation for readability
    console.log(JSON.stringify(contentResult, null, 2))
    
    console.log(JSON.stringify(mediaResult, null, 2))
}

run()