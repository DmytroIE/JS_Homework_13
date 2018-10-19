export function handleHTTPRequestError(err) {
  if (err.code) {
    switch (err.code) {
      case -1: return err.message; break; // custom errors
      case 424: return 'URL is not found or doesn\'t exist in the database'; break;
      case 429: return 'Too many requests'; break;
      case 502: return 'Server error';break;
      default: return `Error with code ${err.code} has been occured`;
    } 
  }
  return `Error ${err.message} has been occured`
}