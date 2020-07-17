/**
    {
        title:"",
        content:"",
        link:"",
    },
 */

const post = [
    {
        title:"What are good developer habits?",
        content:"Curated answers from the Code Connector community Slack channel to this question. Example: Communication skills like public speaking (demos), writing (technical pitches or design documents), and group conversation etiquette (inclusive communication) are really important. For example, it doesn’t matter how good you are at coding if you interrupt people in meetings so they don’t want to work with you.",
        link:"https://dev.to/jcsmileyjr/what-are-good-developer-habits-2bfp",
    },
    {
        title:"Learning new skills while breaking into tech",
        content:"I have been trying to get into tech for a long time and have made every classic mistake possible. I hope by reading this, you can avoid these painful mistakes and get into the tech industry faster.",
        link:"https://medium.com/codeconnective/learning-new-skills-while-breaking-into-tech-b8793f61a1c2?source=friends_link&sk=df5c9187686a2c0dcc0e59bb9773e925",
    },
    {
        title:"How do you stay inspired, motivated, and productive while living in a super active home?",
        content:"Curated answers from the Code Connector community Slack channel to this question. Example: Realize some days will be more than others so try to adjust your estimations. Designate routine & area as much as possible. Shifting your hours to when no one is awake helps.",
        link:"https://dev.to/jcsmileyjr/how-do-you-stay-inspired-motivated-and-productive-while-living-in-a-super-active-home-13l7",
    },
    {
        title:"What is a RESTful API",
        content:"RESTful API is a way for a client (website, mobile app, etc.) to communicate to a web service regarding a resource (data, picture, web page, etc.). An example of this is when you use Google search. You will type in a parameter instructing Google to retrieve and display data for you to view. This article will explain what RESTful API is and how it is commonly used. You can read a brief guide to creating an API with Node and Express in the article A Simple Guide to Node/Express.",
        link:"https://medium.com/codeconnective/what-is-a-restful-api-930671cdd713?source=friends_link&sk=3019c9cd263b72ee75964df33e2b4ebd",
    },
    {
        title:"How do you improve your programming skills?",
        content:"Curated answers from the Code Connector community Slack channel to this question. Example: This all comes down to keys on the keyboard. Repeated practice is the mantra here and increased skill doesn't yield itself to any other shortcuts",
        link:"https://dev.to/jcsmileyjr/how-do-you-improve-your-programming-skills-1dk0",
    },
    {
        title:"8 Tips to Improve Comments in Your Code",
        content:"I have a problem; I know code should have comments but I don’t know how to write good comments or alternatives to commenting. I was given a take home project for a job interview. As a hot shot aspiring developer I went crazy writing code. The app looked beautiful, the code worked, and I documented every line of code.",
        link:"https://medium.com/codeconnective/8-tips-to-improve-comments-in-your-code-59d2b638ee38?source=friends_link&sk=aff4fe9739c50fe911a0282b7dd1d268",
    },
    {
        title:"Athletes train their physical abilities and their sports specific skills. How can developers do the same using that analogy?",
        content:"Curated answers from the Code Connector community Slack channel to this question. Example: Athletes train hard to be able to handle any situation encountered in their sport. Therefore, in tech if we expose ourselves to many concepts, we will build a powerful arsenal of resources to handle any situation.",
        link:"https://dev.to/jcsmileyjr/athletes-train-their-physical-abilities-and-their-sports-specific-skills-how-can-developers-do-the-same-using-that-analogy-mbi",
    },
    {
        title:"How to Setup Multiple API Routes with Node & Express",
        content:"In this article, we will: Create an API route that deploys an 'index.html', develop a router that has multiple API routes, and write an API that returns a json object.",
        link:"https://medium.com/codeconnective/how-to-setup-multiple-api-routes-with-node-express-12b7cabcd13c?source=friends_link&sk=1defc009388bf6ea2e7d04ef382649db",
    },
    {
        title:"All my heroes start early",
        content:"Its 5am and I noticed through social media that my heroes were already up and active. They were creating content, sharing resources, and learning. This got me thinking if this was a common theme among high performers.",
        link:"https://dev.to/jcsmileyjr/all-my-heroes-start-early-153c",
    },
    {
        title:"A Simple Guide to Node/Express",
        content:"This is a stupidly simple short guide full of pictures to create and start a Node web service with an Express API. This is the first article in a series using Node, Express, MongoDB, and React to teach the process of creating a simple full stack application.",
        link:"https://medium.com/codeconnective/a-simple-guide-to-node-express-1986a9904d63?source=friends_link&sk=3cf75bf7adf93ddb04be07db07be199f",
    },
    {
        title:"While learning to code, What limits have you had in the past and how did you overcome them?",
        content:"It's just too much to remember. Solution: Use digital flash cards, have someone quiz you, and build small projects until certain concepts sink into muscle memory",
        link:"https://dev.to/jcsmileyjr/while-learning-to-code-what-limits-have-you-had-in-the-past-and-how-did-you-overcome-them-1ein",
    },
    {
        title:"What I Learned From a Single Lesson using Exercism.io",
        content:"What is exercism.io? It’s a website that allows users to practice coding in a huge variety of programming languages for free. What makes it fantastic is mentors review your code and make suggestions for improvements. This is beneficial for aspiring beginners or self-taught developers, like myself, to learn how to write good code and use good coding practices.",
        link:"https://medium.com/codeconnective/exercism-io-what-i-learn-from-a-mentor-in-one-lesson-9a56e5a0e042",
    },
    {
        title:"What are the challenges to getting a job in tech? If possible, share advice to overcome that challenge!",
        content:"My biggest challenge is me. Mentality, focus, motivation, consistency, belief factor, etc. Advice: Do not give up.",
        link:"https://dev.to/jcsmileyjr/what-are-the-challenges-to-getting-a-job-in-tech-if-possible-share-advice-to-overcome-that-challenge-3n07",
    },
    {
        title:"What app should I build",
        content:"At a past Code Connector tech meetup, I was asked for advice from an aspiring developer on what to build. This developer had a passion building apps, but didn’t know how to start things up from scratch. How do you build a Facebook or Uber by yourself and at the beginning of your career? How many versions of to-do lists, Twitter clones, or calculators can you build? In that moment, I gave that developer a short suggestion. This article is what I would have said if I had given it more thought.",
        link:"https://medium.com/codeconnective/what-app-should-i-build-90df747fe603",
    },
    {
        title:"Hackathons are rewarding experiences",
        content:"I went in with the goal of learning something new, to network with other programmers, and to build something that will help others. I came out with a new perspective on how programming can help the community.",
        link:"https://medium.com/codeconnective/hackathons-are-rewarding-experiences-ae3bd4d56d0d",
    }
];

export default post;