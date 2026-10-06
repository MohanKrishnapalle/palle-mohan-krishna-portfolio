const projects = [
  {
    title: "AI-Based Hostel Outing & Attendance Management System",
    category: "AI / Full Stack",
    description:
      "A smart hostel management system that combines face recognition, attendance tracking, outing management, approval workflows, and role-based access control.",
    technologies: [
      "Python",
      "AI/ML",
      "Face Recognition",
      "FastAPI",
      "MySQL",
      "React"
    ],
    highlights: [
      "Face-based attendance and outing tracking",
      "Role-based access control",
      "Hostel and room management",
      "Outing approval workflow"
    ],
    github: "#",
    demo: "#"
  },

  {
    title: "Smart Walking Stick using ESP32",
    category: "Embedded Systems / IoT",
    description:
      "An assistive smart walking stick designed to help visually impaired users detect obstacles, water, and manholes while providing emergency location support.",
    technologies: [
      "ESP32",
      "Arduino",
      "Ultrasonic Sensors",
      "GPS",
      "Bluetooth",
      "Telegram"
    ],
    highlights: [
      "Multiple ultrasonic obstacle detection",
      "Water detection",
      "Manhole detection",
      "Emergency GPS location sharing"
    ],
    github:
      "https://github.com/MohanKrishnapalle/Smart-Walking-Stick-ESP32",

    images: [
      {
        src: "/project-media/smart-walking-stick/stick-front.jpeg",
        alt: "Smart Walking Stick front view"
      },
      {
        src: "/project-media/smart-walking-stick/stick-back.jpeg",
        alt: "Smart Walking Stick back view"
      },
      {
        src: "/project-media/smart-walking-stick/stick-left.jpeg",
        alt: "Smart Walking Stick left side view"
      },
      {
        src: "/project-media/smart-walking-stick/stick-top.jpeg",
        alt: "Smart Walking Stick top view"
      },
      {
        src: "/project-media/smart-walking-stick/obstacle-front.jpeg",
        alt: "Front obstacle detection using Smart Walking Stick"
      },
      {
        src: "/project-media/smart-walking-stick/obstacle-left.jpeg",
        alt: "Left obstacle detection using Smart Walking Stick"
      },
      {
        src: "/project-media/smart-walking-stick/obstacle-right.jpeg",
        alt: "Right obstacle detection using Smart Walking Stick"
      },
      {
        src: "/project-media/smart-walking-stick/obstacle-both-sides.jpeg",
        alt: "Obstacle detection on both sides"
      },
      {
        src: "/project-media/smart-walking-stick/water-detection.jpeg",
        alt: "Water detection using Smart Walking Stick"
      },
      {
        src: "/project-media/smart-walking-stick/hole-detection.jpeg",
        alt: "Hole detection using Smart Walking Stick"
      },
      {
        src: "/project-media/smart-walking-stick/gps-location.png",
        alt: "Emergency GPS location output"
      },
      {
        src: "/project-media/smart-walking-stick/serial-front-obstacle.png",
        alt: "Serial monitor front obstacle detection"
      },
      {
        src: "/project-media/smart-walking-stick/serial-left-obstacle.png",
        alt: "Serial monitor left obstacle detection"
      },
      {
        src: "/project-media/smart-walking-stick/serial-right-obstacle.png",
        alt: "Serial monitor right obstacle detection"
      },
      {
        src: "/project-media/smart-walking-stick/serial-water-detection.png",
        alt: "Serial monitor water detection"
      },
      {
        src: "/project-media/smart-walking-stick/serial-hole-detection.png",
        alt: "Serial monitor hole detection"
      }
    ]
  },

  {
    title: "Flight Passenger Satisfaction Prediction",
    category: "Machine Learning",
    description:
      "A machine learning application that predicts whether an airline passenger is satisfied based on passenger and flight-related features.",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Random Forest",
      "Streamlit"
    ],
    highlights: [
      "Data preprocessing",
      "Random Forest classification",
      "Model evaluation",
      "Interactive Streamlit application"
    ],
    github:
      "https://github.com/MohanKrishnapalle/Flight-Passenger-Satisfaction-Prediction",
    demo: "/project-media/flight-passenger-demo.mp4"
  },

  {
    title: "Butterfly Species Identifier",
    category: "Deep Learning / Computer Vision",
    description:
      "A deep learning based image classification system designed to identify butterfly species from images.",
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "TensorFlow"
    ],
    highlights: [
      "Image preprocessing",
      "Deep learning classification",
      "Butterfly species prediction"
    ],
    github:
      "https://github.com/MohanKrishnapalle/Enchanted-Wings-Marvels-of-Butterfly-Species",
    demo: "/project-media/butterfly-demo.mp4"
  },

  {
    title: "Autonomous Obstacle Avoidance Robot",
    category: "Robotics / Embedded Systems",
    description:
      "An autonomous robot that detects obstacles and changes its movement direction to navigate safely.",
    technologies: [
      "Arduino",
      "Ultrasonic Sensor",
      "Embedded C",
      "Robotics"
    ],
    highlights: [
      "Real-time obstacle detection",
      "Autonomous navigation",
      "Sensor-based movement control"
    ],
    github:
      "https://github.com/MohanKrishnapalle/Obstacle-avoidence-robot",

    images: [
      {
        src: "/project-media/autonomous-obstacle-avoidance/robot-front-view.jpg",
        alt: "Autonomous Obstacle Avoidance Robot front view"
      },
      {
        src: "/project-media/autonomous-obstacle-avoidance/robot-internal-components.jpg",
        alt: "Internal components of Autonomous Obstacle Avoidance Robot"
      }
    ],

    demo: "#"
  },

  {
    title: "Fastest Line Following Robot",
    category: "Robotics / Embedded Systems",
    description:
      "A high-speed line-following robot designed to accurately follow a predefined path using sensors and embedded control logic.",
    technologies: [
      "Arduino",
      "Embedded C",
      "IR Sensors",
      "Robotics"
    ],
    highlights: [
      "High-speed line tracking",
      "Sensor-based control",
      "Optimized movement"
    ],
    github:
      "https://github.com/MohanKrishnapalle/PID-Fastest-Line-Follower-Robot",
    demo: "/project-media/fastest-line-demo.mp4"
  },

  {
    title: "Maze Solving Robot",
    category: "Robotics / Embedded Systems",
    description:
      "An autonomous robot capable of navigating through a maze using ultrasonic sensors and a left-hand maze-solving algorithm.",
    technologies: [
      "Arduino",
      "Ultrasonic Sensors",
      "Embedded C",
      "Robotics"
    ],
    highlights: [
      "Maze navigation",
      "Ultrasonic sensing",
      "Left-hand algorithm"
    ],
    github:
      "https://github.com/MohanKrishnapalle/MazeSolver-LeftHandRule-Arduino",
    demo: "#"
  }
];

export default projects;