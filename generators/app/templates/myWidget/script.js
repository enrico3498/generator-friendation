import $ from 'jquery'

class <%= componentType %><%= componentName %> extends window.HTMLElement {
  constructor (...args) {
    const self = super(...args)
    self.init()
    return self
  }

  init () {
    this.$ = $(this)
    this.bindFunctions()
    this.bindEvents()
  }

  bindFunctions () {
    // Bind functions here
  }

  bindEvents () {
    // Bind events here
  }
}

window.customElements.define('<%= componentSlug %>', <%= componentType %><%= componentName %>, {
  extends: 'div'
})
