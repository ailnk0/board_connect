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
const openAi = new OpenAIApi(configuration)

exports.helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: functions.https.Request, res: functions.Response<any>) => {
    logger.info('Hello logs!', { structuredData: true })
    res.send('Hello from Firebase!')
  })

exports.callGpt = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: functions.https.Request, res: functions.Response<any>) => {
    const completion = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Hello world'
    })
    res.send(completion.data.choices[0].text)
  })

exports.callChatGpt = functions
  .region('asia-northeast1')
  .https.onRequest(async (req: functions.https.Request, res: functions.Response<any>) => {
    const completion = await openAi.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Who won the world series in 2020?' },
        { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
        { role: 'user', content: 'Where was it played?' }
      ]
    })
    res.send(completion.data.choices[0].message)
  })
