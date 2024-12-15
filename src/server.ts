import app from "./app";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const main = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

main();