# CICD-LAB2
# Jenkins CI/CD Pipeline with GitHub Integration

### Project Overview
This assignment demonstrates continuous integration and delivery (CI/CD) using Jenkins integrated with GitHub via webhook.

### Integration Method
Webhook-based integration using Ngrok.

### Pipeline Stages
- **Checkout:** Cloning from GitHub
- **Build:** Running `npm install`
- **Test:** Executing `npm test`

### Challenges & Solutions
- **Branch Issue:** Changed from `master` to `main`
- **Pipeline Errors:** Corrected Jenkinsfile and ensured Node.js setup

### Outcome
Automatic builds triggered successfully from GitHub changes, passing all stages.


