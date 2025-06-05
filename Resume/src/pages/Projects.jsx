import React from "react";
import "../components/Styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-content">
        {/* CourseHub Project Card */}
        <div className="project-card">
          <h3>CourseHub</h3>
          <p>
            CourseHub is a student-driven forum platform where students can collaborate 
            and assist each other with course materials. Users can join different courses, 
            post discussions, comment, like posts, and follow one another.
          </p>
          <p>
            <strong>Technologies:</strong> Python Flask, React, MongoDB, Supabase
          </p>
          <p>
            <strong>Features:</strong> Authentication, Profiles, Real-time Updates, Course Discussions
          </p>
          <button className="project-button" onClick={() => window.open("https://github.com/Elias0127/CourseHub", "_blank")}>
            View on GitHub
          </button>
        </div>

        {/* Chatting System Project Card */}
        <div className="project-card">
          <h3>Distributed Chatting System</h3>
          <p>
            A distributed communication system where users can join chat rooms, send messages, and communicate in real time over a network.
            This project implements server-client architecture using Python.
          </p>
          <p>
            <strong>Technologies:</strong> Python, Socket Programming
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>Join chat rooms and send messages</li>
              <li>Server broadcasts messages to all clients</li>
              <li>List connected clients</li>
              <li>Server and client stop commands</li>
            </ul>
          </p>
          <button className="project-button" onClick={() => window.open("https://github.com/MNRainDrop/CECS-327-Project1", "_blank")}>
            View on GitHub
          </button>
        </div>
        {/* Idiot Card Game */}
        <div className="project-card">
          <h3>Idiot Card Game</h3>
          <p>
            A game simulator of "Idiot" which is a card game played among multiples. It will have special effects for special cards like 2,5,7,10.
            2 will reset the card pile back to 2.
            5 will reverse the rotating gameplay.
            7 will force the opponenet to play a card smaller than 7.
            10 will force the pile to be removed so the then the next person does not have to take in the whole pile if they lose.
          </p>
          <p>
            <strong>Technologies:</strong> C#, Socket Programming, Vite, React
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>Join chat rooms and send messages</li>
              <li>Server broadcasts messages to all clients</li>
              <li>The ability to kick and transfer hosts.</li>
              <li>Room creation with code</li>
              <li>Real time server card gameplay</li>
            </ul>
          </p>
          <button className="project-button" onClick={() => window.open("https://github.com/looksorn789/Idiot-Card-Game", "_blank")}>
            View on GitHub
          </button>
        </div>
        {/* My Daily Journal */}
        <div className="project-card">
          <h3>My Daily Journal</h3>
          <p>
            A frontend design and features implemented for you to vlog your personal daily life
          </p>
          <p>
            <strong>Technologies:</strong> React, CSS
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>JournalEntry allows you to enter your journal with a mood selector</li>
              <li>MoodBoard allows you to input 4 photos and flip them around to be added to your journal</li>
              <li>MyJournal shows you the pictures and journal entry you have added</li>
              <li>Calendar features allows you to plan out your entire year and each months and days</li>
              <li>Light and Dark Mode</li>
              <li>Profile Settings and Authentication</li>
            </ul>
          </p>
          <div className="button-group">
            <button className="project-button" onClick={() => window.open("https://github.com/looksorn789/My-Daily-Journal", "_blank")}>
              View on GitHub
            </button>
            <button className="project-button" onClick={() => window.open("https://looksorn789.github.io/My-Daily-Journal/", "_blank")}>
              View Website
            </button>
          </div>
        </div>
        {/* Keys to the kingdom */}
        <div className="project-card">
          <h3>Keys To The Kingdom</h3>
          <p>
            A small indie game created using unity and c#. This game was created with free assets and c# scripts to control how characters move.
            The game includes a combat feature that will allow players to defeat enemies which will drop items that is used to unlock doors.
            The end goal of the game is to find the final item in the game which will lead you to beat the game.
          </p>
          <p>
            <strong>Technologies:</strong> Unity, C#
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>Combat Feature</li>
              <li>Dialogue Feature</li>
              <li>Inventory System</li>
              <li>Door Spawnpoints</li>
            </ul>
          </p>
          <button className="project-button" onClick={() => window.open("https://github.com/zsanchez6/KeysToTheKingdom", "_blank")}>
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
