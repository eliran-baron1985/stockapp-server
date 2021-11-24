const express = require('express');
const app = express();
const port = 5000;
var path = require('path');
app.use(express.static(path.join(__dirname, '../uploads')));
const cors = require('cors');
const bodyParser = require('body-parser');
const Manager = require('./models/managerModels');
const Client = require('./models/clientModel');
// const Orders = require('./models/ordersModel');
// const Products = require('./models/productsModel');
// const Category = require('./models/categoryModel');
// const Contact = require('./models/contactModel');
// const Counter = require('./models/userCounterModel');
// const User = require('./models/userModels');
// const City = require('./models/cityModel');
const Sequelize = require('sequelize');
const sequelize = require('./utils/databse');
const Op = Sequelize.Op;

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204.
};

app.use(cors(corsOptions));

const ManagerRoute = require('./routes/mangerRoute');
app.use(ManagerRoute);

// const ProductsRoute = require('./routes/productsRoute');
// app.use(ProductsRoute);

// const CategoryRoute = require('./routes/categoryRoute');
// app.use(CategoryRoute);
// const CityRoute = require('./routes/CityRoute');
// app.use(CityRoute);

const ClientRoute = require('./routes/clientRoute');
app.use(ClientRoute);

// const OrdersRoute = require('./routes/ordersRoute');
// app.use(OrdersRoute);

// const ContactRoute = require('./routes/contactRoute');
// app.use(ContactRoute);

// const CounterRoute = require('./routes/counterRoute');
// app.use(CounterRoute);

// const UserRoute = require('./routes/userRoute');
// const { userInfo } = require('os');
// app.use(UserRoute);

sequelize
// .sync({force : true})
	.sync()
	.then((result) => {
		app.listen(port);
	})
	.catch((err) => {
		console.log(err);
	});
