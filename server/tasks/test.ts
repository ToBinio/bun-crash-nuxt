export default defineTask({
    meta: {
        name: "db:migrate",
        description: "Run database migrations",
    },
    run() {
        console.log("Running");
        return { result: "Success" };
    },
});