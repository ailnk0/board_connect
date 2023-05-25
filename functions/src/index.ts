/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import * as functions from 'firebase-functions'
import { logger } from 'firebase-functions'
import { Configuration, OpenAIApi } from 'openai'

// const functions = require('firebase-functions')
// const { logger } = require('firebase-functions')
// const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

exports.helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: functions.https.Request, res: functions.Response<any>) => {
    logger.info('Hello logs!', { structuredData: true })
    res.send('Hello from Firebase!')
  })

exports.callGpt = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: functions.https.Request, res: functions.Response<any>) => {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Hello world'
    })
    res.send(completion.data.choices[0].text)
  })
