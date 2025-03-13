# Continuous Integration with GitHub Actions: A Beginner-Friendly Guide
### Introduction
Continuous integration also short form for CI is a software development lifecycle where code changes are automatically tested and validated before merging into the main branch. This helps catch errors early, maintain code quality, and streamline development.

In this project, we'll use GitHub Actions as our CI tool to check for syntax errors in an HTML/CSS form page whenever changes are pushed to the repository.

### What You'll Learn

- Basics of CI and why it's important.

- How to set up GitHub Actions in a project.

- How to create a simple HTML/CSS form page.

- How to configure a GitHub Actions workflow to run a syntax check.

## Project Overview

We'll create a basic HTML form and use a GitHub Actions workflow to check for syntax errors whenever we push changes. The workflow will be defined in a .yml file inside the .github/workflows/ directory.

### Steps:

### 1. Create the index.html File

Inside the repository, create an index.html file and add the following basic form code from w3school:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Form</title>
</head>
<body>
<h2>The name Attribute</h2>

<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" value="John"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

<p>Notice that the value of the "First name" field will not be submitted, because the input element does not have a name attribute.</p>

</body>
</html>
```





