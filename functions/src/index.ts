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

// The Firebase Admin SDK to access Firestore.
import * as admin from 'firebase-admin'
admin.initializeApp()

// Web framework
import * as express from 'express'

// Middleware
import * as cors from 'cors'

// OpenAI
import * as openai from 'openai'

const app = express()
app.use(cors({ origin: true }))

const openAi = new openai.OpenAIApi(
  new openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
)

app.get('/', (_req, _res) => {
  logger.info('Hello logs!', { structuredData: true })
  _res.send(`Hello from Firebase!`)
})

app.get('/jarvis-board', async (_req, _res) => {
  const completion = await openAi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Who won the world series in 2020?' },
      { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
      { role: 'user', content: 'Where was it played?' }
    ]
  })
  logger.info('Completion data', completion.data)
  _res.send(completion.data.choices[0].message)
})

exports.app = functions.region('asia-northeast3').https.onRequest(app)
