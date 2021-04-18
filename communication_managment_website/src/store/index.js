import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resources:[{
      type: 'Article',
      title: 'Good Product Manager vs Bad product manager',
      desc: 'Old but gold. A classic on what it takes to be a good product manager from the co-founder of a16z',
      author: 'Ben Horowitz'
    },
    {
      type: 'Article',
      title: 'What IT TAKES TO BE a GREAT Product Manager?',
      desc: 'Checkout the skills required to become a great PM and what can set you up on the path to success.',
      author: 'Julia Austin'
    },
    {
      type: 'Article',
      title: 'The Past and the future of Product Management',
      desc: 'Before we jump in, would be great to observe the evolution of product management over the years to it\'s current form',
      author: 'Matt Lemay'
    },
    {
      type: 'Article',
      title: 'Good Product Manager vs Bad product manager',
      desc: 'Old but gold. A classic on what it takes to be a good product manager from the co-founder of a16z',
      author: 'Ben Horowitz'
    },
    {
      type: 'Article',
      title: 'What IT TAKES TO BE a GREAT Product Manager?',
      desc: 'Checkout the skills required to become a great PM and what can set you up on the path to success.',
      author: 'Julia Austin'
    },
    {
      type: 'Article',
      title: 'The Past and the future of Product Management',
      desc: 'Before we jump in, would be great to observe the evolution of product management over the years to it\'s current form',
      author: 'Matt Lemay'
    },
    {
      type: 'Slides',
      title: 'What does a Product Manager do?',
      desc: 'As an extension, hear directly from Josh who\'s worked with what others might consider as "Dream Companies" on what a PM\'s job looks like!',
      author: 'Josh Elman'
    },
    {
      type: 'Video',
      title: 'The art of Product Management?',
      desc: 'Another cracker from Mr. Rekhi on The Art of Product Management - as the first comment says - it\'s an entire semester class in one presentation.',
      author: 'Sachin Rekhi'
    },
    {
      type: 'Article',
      title: 'Minimum viable Product Manager',
      desc: 'If there is one article you should start with, it\'s this one - what are the minimum set of skills to get started as a PM? The MVPM.',
      author: 'Brandon Chu'
    }
  ],
  caseStudies: [
    {
    title:'AirBnb - Reducing Customer Churn',
    paragraph:'Every PM aims to minimise their customer churn, but how do you do it? Read this case study on AirBnB, and how it reduces churn through personalisation. Use this case study to enhance your understanding of user psychology, and design principles.',
    bottom_line:'Late Stage'
    },
    {
      title:'Behind every great product',
      paragraph:'Recounting the chronicles behind 6 products that have dramatically changed the world around us, Marty Cagan creatively unpacks how the Product Managers behind them were able to overcome the hurdles to craft these products. Highly suggested to get Inspired.',
      bottom_line:'Late Stage'
      },
      {
        title:'Classpass - Finding Produc market fit',
        paragraph:'Read this case study to understand the need to spend your time and resources figuring out what your customer want, and how you can affect a behavioural change to ultimately solve the problem you set out on. It\'s a long read, but in the end it will be all worth it.',
        bottom_line:'Late Stage'
      }
]
  },
  mutations: {},
  actions: {},
  modules: {},
});
