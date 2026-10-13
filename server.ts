import app from "./src/app";
import connectDb from "./src/config/db";


connectDb()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
