module.exports = {
    apps: [
        {
          name: "cloud-sql-auth-proxy",
          script: "./cloud-sql-proxy project-946811af-a352-4637-bec:asia-southeast1:eca-mysql-instance-n project-946811af-a352-4637-bec:us-central1:eca-mysql-instance-new --private-ip",
          log_file: "./logs/cloud-sql-proxy.log",
        },
        {
            name: "student-service",
            script: "java -jar student-service/target/Student-Service-1.0.0.jar",
            log_file: "./logs/student-service.log",
            instances: 2
        },
        {
            name: "program-service",
            script: "java -jar program-service/target/Program-Service-1.0.0.jar",
            log_file: "./logs/program-service.log",
            instances: 2
        },
        {
            name: "enrollment-service",
            script: "java -jar enrollment-service/target/Enrollment-Service-1.0.0.jar",
            log_file: "./logs/enrollment-service.log",
            instances: 2
        }
    ]
}
