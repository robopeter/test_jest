import { LocalStorage } from 'quasar'

export function setMyVal (state, newVal) {
  state.myVal = newVal
  LocalStorage.set('myVal', newVal)
}
