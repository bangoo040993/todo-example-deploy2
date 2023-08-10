require('dotenv').config()
require('./config/database')//require making it run you dont need to be a variable or a state
const app =require('./app-server')

const PORT = process.env.PORT || 8889


app.listen(PORT, () => {
	console.log(`andre ${PORT}`)
})
