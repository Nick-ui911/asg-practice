import os from "os";
import cluster from "cluster";
import { app } from "./index.js"; // Add .js extension if using ES Modules

const CPUs = os.cpus().length; // `cpus`, not `CPUs`
console.log(`Number of CPUs: ${CPUs}`);

if (cluster.isPrimary) {
    for (let i = 0; i < CPUs; i++) {
        cluster.fork();
    }
} else {
    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started on port 3000`);
    });
}
