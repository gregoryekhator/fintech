import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

console.log("hello"); // just to ensure everything is working

/* ROUTES */
app.use("/kpi", kpiRoutes); //setting up entry points for our routes that we imported
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000; //Setting Connection to .env we created of backup port 9000
mongoose
    .connect(process.env.MONGODB_URL, { // Connecting with Mongoose too
    useNewUrlParser: true, //setting these to true although optional, it helps
    useUnifiedTopology: true,
})
.then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`)); //the actual connection, connection is async

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    //Product.insertMany(products);
    //Transaction.insertMany(transactions);
})
.catch((error) => console.log(`${error} did not connect`)) //important to catch the error if can't connect
