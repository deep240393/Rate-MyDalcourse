// Author: Harsh Pamnani - B00802614

// Defining all the libraries required.
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoDbUrl = "mongodb+srv://shrey:web12345@ratemydalcourse-rqsoy.mongodb.net/test?retryWrites=true&w=majority";
var url = "mongodb+srv://shrey:web12345@ratemydalcourse-rqsoy.mongodb.net/test?retryWrites=true&w=majority";

// Initializing the bad-words library.
var badWords = require('bad-words');
var badWordsFilter = new badWords();

// Creating a post mapping for route /createPost.
router.post('/createPost', function (req, res) {
  post = req.body;
  console.log('Server : New post received: ', post)

  // Applying validations on the received post.
  // Checking if the post is empty.
  if (post.postContent == null || post.postContent === '') {
    res.send({ "responseMessage": "Please enter some content for the post." });
    console.log('ERROR: The post is empty.');
  }
  // Checking if the post length is below 20.
  else if (post.postContent.length < 20) {
    res.send({ "responseMessage": "Please enter at least 20 characters for the post." });
    console.log('ERROR: The post has less than 20 characters.');
  }
  // Checking that the post does not contain any bad words.
  else if (badWordsFilter.isProfane(post.postContent)) {
    res.send({ "responseMessage": "Your post contains bad words. Please remove them and try again." });
    console.log('ERROR: The post contains bad words.');
  }
  // If all validation pass, creating the post in database.
  else {
    MongoClient.connect(mongoDbUrl, function (err, client) {
      if (err) {
        // Sending the error response message to client, in case of error.
        res.status(501).send({ "responseMessage": "We could not connect to our database. Please try again later." });
        console.log('Server : MongoDB connection failed.');
      } else {
        // Creating the post in database and sending response to client.
        client.db("RateMyDalCourse").collection('Posts').insertOne(post);
        res.status(200).send({ "responseMessage": "Post successfully created on discussion forum." });
        console.log('Server : Post successfully created.');
        client.close();
      }
    });

  }
})

// Creating a post mapping for route /createPost.
router.get('/getPosts/:courseCode', function (req, res) {

  // Creating an empty array for storing posts.
  var posts = [];

  // Getting the course code from request
  const courseCodeFromClient = req.params.courseCode;

  // Connecting to mongodb database.
  MongoClient.connect(mongoDbUrl, function (err, client) {
    if (err) {
      // Sending the error response message to client, in case of error.
      res.status(501).send({ "Error": "error in connecting to database" });
    }
    else {
      console.log("Course code received from client is: " + courseCodeFromClient);

      // Fetching all the posts related to that course from database and sending it back to client.
      var cursor = client.db("RateMyDalCourse").collection('Posts').find({ courseCode: courseCodeFromClient });
      cursor.forEach(function (dbPost) {
        posts.push(dbPost);
      }, function () {
        res.send({ "Posts": posts });
      });

      client.close();
    }
  })
});

// Exporting the router
router.get('/getCourses', function (req, res) {

  MongoClient.connect(url, function (err, client) {
    var courses = [];

    // Display the error while connecting to the database
    if (err) {
      res.status(501).send({ "Error": "error in connecting to database" });
    }
    else {

      // Check if the courses are present in the Mongo database
      var cursor = client.db("RateMyDalCourse").collection('Courses').find();
      // Callback function to retrieve the all courses
      cursor.forEach(function (course) {
        courses.push(course);
      }, function () {

        // response is sent to the node from the database
        res.send({ "Courses": courses });
      });

      // close the client to stop overflooding
      client.close();
    }
  })
});

router.get('/getCourses/:username', function (req, res) {

  // Username is fetched for which we need to retrieve the courses.
  let username = req.params.username;
  MongoClient.connect(url, function (err, client) {
    // define array to store all the user courses.
    var myCourses = [];
    if (err) {
      // Display the error while connecting to the database
      res.status(501).send({ "Error": "error in connecting to database" });
    }
    else {
      // check for the courses for a logged in user in the database          
      var cursor = client.db("RateMyDalCourse").collection('User').find({ email: username.substring(1) });
      cursor.forEach(function (course) {
        // store all the user's courses in the list
        myCourses.push(course);
      }, function () {

        // send the response to the node which has the list of user's courses
        res.send({ "MyCourses": myCourses });
      });

      // close the client to stop overflooding of request
      client.close();
    }
  })
});



router.get('/displayrating/:subject', function (req, res) {

  // Fetching the course name from the request
  let subject = req.params.subject;

  MongoClient.connect(url, function (err, client) {
    var ratecourses = [];

    // Display the error while connecting to the database
    if (err) {
      res.status(501).send({ "Error": "error in connecting to database" });
    }
    else {

      // Query in the database to find overall rating of the subject 
      var cursor = client.db("RateMyDalCourse").collection('Rate').find({ Name: subject });
      cursor.forEach(function (rate) {

        // store all the ratings in the list
        ratecourses.push(rate);
      }, function () {

        // send the rating to node server
        res.send({ "Ratecourses": ratecourses });
      });


      // close the client to stop overflooding of request
      client.close();
    }
  })
});

module.exports = router;
