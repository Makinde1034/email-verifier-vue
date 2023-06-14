
export default {
  verifyEmail(data: string[]) {
    const request = {
      emails: data
    }

    return fetch('https://bryans-email-verifier.onrender.com/verify-email', {
      method: 'POST',
      body: JSON.stringify(request)
    })
  }
}
