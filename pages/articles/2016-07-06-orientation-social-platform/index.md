---
title: Orientation Social Platform
date: "2016-07-06T23:33:00.169Z"
layout: post
path: "/orientation-social-platform/"
category: "FrontEnd"
description: "Summer 2015. All of my classmates have to do a two month worker internship.
Because I had already done mine in my first year at ESSTIN,
I had to find out what to do in my 3 month holidays. Back in time, I was in charge of the
orientation team at my school and we decided to offer to the new students something never done before :
an entire platform whose purpose was to help every student to know each other."
---
####  Context
Summer 2015. All of my classmates have to do a two month worker internship.
Because I had already done mine in my first year at [ESSTIN](https://www.esstin.univ-lorraine.fr/),
I had to find out what to do in my 3 month holidays. Back in time, I was in charge of the
orientation team at my school and we decided to offer to the new students something never done before :
an entire platform whose purpose was to help every students to know each other.

#### The code

This project was my first major project in full javascript (client & server) and it taught me a lot.
I decided to use this language because of its increasing popularity among web developers last years.
As I said earlier, it was my first [Node.js](https://nodejs.org/en/) project and we haven't maid only good choices : our server was based
on [Express](http://expressjs.com/fr/), but we thought it would have been to hard for us to learn and use a MEAN stack (popular Mongo, Express,
Angular & Node). So our client was made in [jQuery](https://jquery.com/) with a [socket.io](http://socket.io/) communication and we were using our old MySQL database system.

At first, it was fun and relatively easy to build the different pages of our application. I remember the main difficulty
we've had was to manage some of our synchronous/asynchronous requests who was quite boring... But regardless of this fact, our
logic resided in two main files : one for defining all the routes with Express and another one for setting all of our socket
used for real time communication. After long nights spent, the application was finished and ready to be deployed.

With hindsight, I have to admit that I find the maintainablity really hard because of its schemaless development.
Indeed, few months later, when we have to add some little new features it was really hard to do it. I regret not having used
a bigger framework or a specification but for now, the app is still working as we expect !

#### The reason

Great fan of my school (joining it was an objective I've fixed to myself several years ago while I was in High School), I quickly wanted to do stuff for it, for all the students and for me. As a freshman, I decided to lead the orientation team to help the future new students to feel as great as possible in this school. With my 6 freshmen's team, we spent days and days to organize several big events but that really enjoyed us.
During the summer before the beginning of my second year, my treasurer Kilian who had an Associate’s degree in Computer Science, and I had the whole holidays for us. So we decided to build a simple app to add some fun in the orientation. At first, it was only a ranking page with all the new freshmen listed where the older students were able to give them points but it was quickly improved with a challenge page, a photo gallery, a newsfeed, and the biggest thing we've done : the godchildren / godparents attribution script.

A role was given to all parts of the application, and a great majority of the new features we've decided to add were added with a specific thought. Thereby, the Facebook link button added to user's profiles was here to help people to connect each other, the rank page encouraged freshmen to participate to all of our activities in order to get noticed by a good godfather, the limitation of 3 points given per day helped to create some sort of addiction to the application, even the challenges were precisely thought. One of them was to upload 200 photos of the events of the beginning of the year into the application to unlock a teaser for a special event. This challenge was set up to be sure that the gallery was going to be used and it work very well. A special files counter was even made to dynamically display the number of pictures uploaded. 5 challenges were made to encourage everyone to participate in school life with rewards in counterpart.

It was a first release but everyone was using it. During classes, at lunch, after school, all freshmen were talking about it. We were really proud of what we've done here. Even late at night, while we were spying on the data, we could find 10 people still online. This movement last 3 months, until the end of the orientation and it will certainly be one of the most happy memory I'll have of my studies at TELECOM Nancy.   
