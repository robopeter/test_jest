import { LocalStorage } from 'quasar'

export default {
  myVal: (LocalStorage.has('myVal') ? LocalStorage.getItem('myVal') : 1)
}
