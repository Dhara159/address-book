import { sendErrorResponse } from './../utils.mjs'

// Basic error handler to generalize try/catch block
const handleError = async ({ tryFunc, res }) => {
  try {
    await tryFunc();
  } catch {
    return sendErrorResponse({ res });
  }
}

export default handleError;