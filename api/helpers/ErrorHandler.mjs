import { sendErrorResponse } from './../utils.mjs'

const handleError = ({ tryFunc, res }) => {
  try {
    tryFunc();
  } catch {
    return sendErrorResponse({ res });
  }
}

export default handleError;