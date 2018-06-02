import cloneDeep from 'clone-deep'

class UndoRedoHistory {
  store
  history = []
  currentIndex = -1

  init (store) {
    this.store = store
  }

  addState (state) {
    // may be we have to remove redo steps
    if (this.currentIndex + 1 < this.history.length) {
      this.history.splice(this.currentIndex + 1)
    }
    this.history.push(state)
    this.currentIndex++
  }

  undo () {
    const prevState = this.history[this.currentIndex - 1]
    // take a copy of the history state
    // because it would be changed during store mutations
    // what would corrupt the undo-redo-history
    // (same on redo)
    this.store.replaceState(cloneDeep(prevState))
    this.currentIndex--
  }

  redo () {
    const nextState = this.history[this.currentIndex + 1]
    this.store.replaceState(cloneDeep(nextState))
    this.currentIndex++
  }
}

const undoRedoPlugin = (store) => {
  var undoRedoHistory = new UndoRedoHistory()

  undoRedoHistory.init(store)

  let firstState = cloneDeep(store.state)
  undoRedoHistory.addState(firstState)

  store.subscribe((mutation, state) => {
    undoRedoHistory.addState(cloneDeep(state))
  })
}

export default undoRedoPlugin
