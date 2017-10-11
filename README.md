# Static Web Group Project

As a team, build the web site for a fictitious product company. The team gets to decide what the name of the company is, and what types of products it manufactures. Be creative and have fun.

## Setup

Every teammate copy and run the following commands in the host machine terminal.

```bash
mkdir -p ~/workspace/group-projects && cd $_
```

## Requirements

### Theme

Pick a theme that the team likes. A good place for inspiration is the [Wordpress themes](https://wordpress.org/themes/) site. Do not purchase, or copy the theme code, just browse them for inspiration. Everyone should agree on a theme and ensure that each page is consistent with the colors, fonts, and/or images chosen. Your team will build **all** of the CSS for each page.

### Pages

Each team member is going to be responsible for the content of a different page, so decide on the name and content for each of those pages. Some possible options are...

1. Home page
1. Products we sell
1. Employee listing
1. Company history
1. Company culture/mission
1. Job listings
1. Company awards
1. Office locations

### Page Functionality

The team member's page will be driven from JavaScript code. You will create a database structure that suits the data that you will be building for your page. It could be an array of objects, or an object of objects. Discuss with your teammates.

Once you have built your Database object, and populated it with the raw data, serialize it into a string and store it into local storage. Then use your DOM query &amp; manipulation skills to build semantic HTML element strings, and then insert them into the DOM.

### Modular JavaScript

Remember to split your JavaScript into two files.

#### Factory

The factory deals with data. The factory should read from local storage and see if the database is there. If it is, use that object, otherwise, build it and store it.

#### Controller

The job of the controller is to use the data to query and manipulate the DOM.

### Design First

Use your whiteboard and communication skills to design each page before you build it.

1. What information will be on it?
1. How should the information be presented?
1. What is the layout? Just a list, or a grid?

### Git / Github Workflow

Your team is going to learn how to use git, and Github, to enable good teamwork when building a software product.

1. Now that everyone has joined the same team, everyone clone the Github Classroom project into your current directory - which should be `group-projects` if you ran the setup commands.
1. `cd` into the directory that got created.
1. Before anyone on the team writes a single line of code, the team will decide on a branch naming strategy. Branches should be descriptive of the work that is going to be done on that branch. Some teams also decide to add the developer's information to the branch name, such as initials. For example, a developer named Jasmine Sheboygen is going to work on the job listings page for the web site. A good name for the branch would be `js-job-listing-page`.
1. Again, before you write any code, one team member volunteer to create the ignore file on the master branch. This is the **ONLY COMMIT YOU WILL MAKE ON MASTER**.
    1. `touch .gitignore`
    1. `git add .`
    1. `git commit -m "Initial commit with .gitignore file"`
    1. `git push origin master`
1. Now everyone should `git pull origin master`.
1. At this point, each teammate will create their feature branch with `git checkout -b feature_branch_name` and start work on their page.

Only when teammates feel that the work is complete, the teammate will push up their branch to Github and create a pull request. One of the other teammates must review the pull request and give a thumbs up (Just type :+1 in the comment box).

Once the PR gets a thumbs up, the teammates can merge the branch by following this process.

```bash
git checkout master
git merge [your approved branch name] 
# Fix any merge conflicts, if you have them
git push origin master
```
