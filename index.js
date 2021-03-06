import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function () {
  console.log(`Express app listening on port ${PORT}`);
});
