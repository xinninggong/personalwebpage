# Summer of Tech Demo Project

## About

This project is the demo project for the summer of tech developer experience workshop. It's styled in the way of a personal portfolio site, and you're welcome to fork it, make changes, and publish your own version. To change just the text on this site, you won't need much in the way of existing skills, so don't be afraid to jump in and give things a go!

## Installation

0. You will need to install the following things on your computer:
   - [Node.js](https://nodejs.org/en/)
   - An IDE of some sort (I recommend [Visual Studio Code](https://code.visualstudio.com/))
1. Create your own copy of this repo by clicking the "Use this template" button above
2. Clone your own repo locally to your computer [(🔗 Guide)](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Developing

> _Note: Look at the 'Technologies' section of this readme for info and guides regarding the technologies behind this site._

To start developing, open the folder of this repo in the IDE of your choice. Then open a terminal window in the folder of the repo too. This can be done in Visual Studio Code using `` Ctrl + `  `` (on both windows and macOS), that's a backtick not an apostrophe, it's the key to the left of the 1 key.

In the terminal window, first run:

```
npm install
```

This will install all the needed libraries for this project from node package manager. You can see them listed in `package.json`.

Once that's done, run:

```
npm run dev
```

This builds and runs a development version of the site locally on your computer that has live updating. That means when you make changes to the code and then save the file, the local site will update itself automagically.

Head to [localhost:3000](http://localhost:3000) in a browser to preview the site.

Now you're free to make all the changes you see fit. Dont forget to commit and push your changes as you go. [(🔗 Guide)](https://guides.github.com/introduction/git-handbook/)

Move to the 'Publishing' section below when you're ready to make your site public! 🎉

## Publishing

Ready to go live? Thankfully due to choosing the Next.js platform, publishing is super easy, and Vercel, the creators of Next.js, abstract away a bunch of the annoying boilerplate stuff for us.

Head to [vercel.com/new](https://vercel.com/new), and login using GitHub. Then click your import next to your websites repo. In the next step, select your GitHub account in the scope page, then simply click deploy to publish it!

🎉🎉🎉 **Congrats! You're live!** 🎉🎉🎉

You should end up with a URL ending in `.vercel.app`, and that's your live site that anyone can view.

Any commits that are pushed to your main branch will now result in Vercel building and publishing a new version of your site automatically.

Vercel offers free linking to custom domains that you own, but that's outside the scope of this project.

## Technologies

- #### React

  Web UI library that makes UI easier to dev compared to plain JS. Allows us to component-ise elements of our website to be reused with ease across multiple pages, such as the social media buttons on this site. It also allows for many modern methodologies of web development that we don't get into with this project.

  ##### Links:

  - [🔗 GitHub Repo](https://github.com/facebook/react)
  - [🔗 Tutorial](https://reactjs.org/community/courses.html)

- #### Next.js

  Front-end development web framework. It works on top of React, to include routing (having multiple website pages), and other goodies that make the website a faster and smoother experience compared to using straight React. Along with that, Next.js makes the project easier to deploy to a live site.

  ##### Links:

  - [🔗 GitHub Repo](https://github.com/vercel/next.js/)
  - [🔗 Tutorial](https://nextjs.org/learn/basics/create-nextjs-app)

- #### React Bootstrap

  A CSS framework that gives us a bunch of great pre-done, reusable styling for React components, along with easy ways to make our website resposive to mobile devices.

  ##### Links:

  - [🔗 GitHub Repo](https://github.com/react-bootstrap/react-bootstrap)
  - [🔗 Tutorial](https://react-bootstrap.github.io/getting-started/introduction)

- #### Font Awesome Icons

  A really handy, good-looking, and free icon library used for the button icons on this site.

  ##### Links:

  - [🔗 GitHub Repo](https://github.com/FortAwesome/react-fontawesome)
  - [🔗 Tutorial](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
