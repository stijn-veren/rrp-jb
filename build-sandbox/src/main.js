class App {
  constructor() {
    this.run = (name = 'World') => {
      console.log(`Hello ${name}`)
    }
  }
}

const app = new App()
app.run()
