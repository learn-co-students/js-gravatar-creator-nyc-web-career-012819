class Identicon {
  constructor(string) {
    this._md5Array = md5.array(string)
  }

  get values() {
    return this._md5Array
  }

  rehash(string) {
    this._md5Array = md5.array(string)
  }
}
