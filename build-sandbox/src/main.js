class App {
  run() {
    const name = 'World'
    console.log(`Hello ${name}`)
  }
}

const app = new App()
app.run()

// npx babel src --out-dir build --plugins @babel/plugin-transform-template-literals,@babel/plugin-transform-block-scoping,@babel/plugin-transform-classes
// after adding .babelrc we can use:
// npx babel src --out-dir build
