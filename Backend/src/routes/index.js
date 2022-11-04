import express from "express";
import productRoute from "./productRout";
import purchaseRoute from "./purchaseRoute";
import userRoute from "./userRoute";
import saleRoute from "./salesRoute";

const app = express();
app.use("/product", productRoute);
app.use("/purchase", purchaseRoute);
app.use("/user", userRoute);
app.use("/sale", saleRoute);

export default app;
