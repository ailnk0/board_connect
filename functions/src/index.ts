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
import * as bodyParser from 'body-parser'
import * as multer from 'multer'

// OpenAI
import * as openai from 'openai'
import { ChatCompletionRequestMessage } from 'openai'

const upload = multer() // for parsing multipart/form-data
const app = express()

app.use(cors({ origin: true }))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const openAi = new openai.OpenAIApi(
  new openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
)

app.get('/', (_req, _res) => {
  logger.info('Hello logs!', { structuredData: true })
  _res.send(`Hello from Firebase!`)
})

app.post('/jarvis-board', async (_req, _res) => {
  const MAX_CONTENT_LENGTH = 255
  const chatData: Array<ChatCompletionRequestMessage> = []
  const requestData = _req.body
  const joinedChatData = chatData.concat(requestData).map((chat) => {
    if (chat.role == 'user' && chat.content.length > MAX_CONTENT_LENGTH) {
      chat.content = chat.content.slice(0, MAX_CONTENT_LENGTH)
    }
    return chat
  })

  if (joinedChatData.length >= 10) {
    _res.json({ role: 'assistant', content: 'You have reached the maximum number of messages.' })
    return
  }

  const completion = await openAi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: joinedChatData
  })
  _res.json(completion.data.choices[0].message)
})

app.post('/test', upload.none(), () => {})

exports.app = functions.region('asia-northeast3').https.onRequest(app)
