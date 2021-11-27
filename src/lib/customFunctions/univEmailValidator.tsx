const univEmailValidator = (email: string): boolean =>
  String(email).match(new RegExp('.*@.*ac.jp$', 'g')) !== null

export default univEmailValidator
