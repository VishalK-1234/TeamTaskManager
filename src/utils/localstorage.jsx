localStorage.clear()

const employees = [
  {
    "id": 1,
    "email": "emp1@ttm.com",
    "password": "1234",
    "name": "Chris Hemsworth",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Prepare Movie Script",
        "task_description": "Refine the movie script draft thoroughly by enhancing dialogue and ensuring vivid, real action sequences.",
        "task_date": "2025-03-01",
        "category": "Film Production"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Attend Stunt Training",
        "task_description": "Complete advanced stunt training sessions to perfect physical moves and synchronize dynamic, safe action routines.",
        "task_date": "2025-02-28",
        "category": "Action Training"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "PR interview",
        "task_description": "Take the spotlight in a PR interview to highlight your expertise, share your story, and strengthen your personal brand.",
        "task_date": "2025-03-02",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task_title": "Costume Fitting",
        "task_description": "Try on final costume designs and verify they fit perfectly, matching exactly the character's look for the movie.",
        "task_date": "2025-02-27",
        "category": "Wardrobe"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 2,
    "email": "emp2@ttm.com",
    "password": "1234",
    "name": "Paul Rudd",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Rehearse Scene",
        "task_description": "Rehearse a comedy scene while perfecting timing and expressions to evoke genuine laughter from the audience.",
        "task_date": "2025-03-03",
        "category": "Theater"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Film Audition",
        "task_description": "Perform a dynamic film audition to showcase versatility and secure a role that matches your diverse acting range.",
        "task_date": "2025-03-04",
        "category": "Casting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Branding Photoshoot",
        "task_description": "Join a stylish branding photoshoot to capture his charismatic smile and natural charm for the new brand launch.",
        "task_date": "2025-03-05",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task_title": "Script Review",
        "task_description": "Review detailed script and offer creative input to enhance narrative flow and dialogue in the production for a better flow of work.",
        "task_date": "2025-03-06",
        "category": "Production"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Voice-over Recording",
        "task_description": "Record clear voice-over lines for animated sequences while capturing deep emotions that complement the plot.",
        "task_date": "2025-03-07",
        "category": "Dubbing"
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "email": "emp3@ttm.com",
    "password": "1234",
    "name": "Margot Robbie",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Film Premiere",
        "task_description": "Grace the film premiere red carpet while engaging with media and fans to boost the movie’s solid public image.",
        "task_date": "2025-03-08",
        "category": "Public Relations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Press Interview",
        "task_description": "Deliver an articulate press interview that highlights creative insights and the emotional depth of her latest role.",
        "task_date": "2025-03-09",
        "category": "Media"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Scene Rehearsal",
        "task_description": "Rehearse an intense scene meticulously to capture raw emotions and portray a character with striking authenticity.",
        "task_date": "2025-03-10",
        "category": "Rehearsals"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Final Cut Editing",
        "task_description": "Edit the final film cut with precision, ensuring smooth narrative flow and visually captivating scene transitions.",
        "task_date": "2025-03-11",
        "category": "Post Production"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Acting Workshop",
        "task_description": "Participate actively in an intensive acting workshop to refine skills and adopt innovative methods for character growth.",
        "task_date": "2025-03-12",
        "category": "Workshops"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Charity Event",
        "task_description": "Participate in a charity event, supporting community causes and promoting a positive image through public engagement.",
        "task_date": "2025-03-13",
        "category": "Charity"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 3,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "emp4@ttm.com",
    "password": "1234",
    "name": "Timothée Chalamet",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Script Reading",
        "task_description": "Attend a detailed script reading session to analyze dialogue and understand the emotional layers of the upcoming role.",
        "task_date": "2025-03-14",
        "category": "Workshops"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Podcast Recording",
        "task_description": "Record a compelling podcast discussing film insights, personal experiences, and the creative challenges on set.",
        "task_date": "2025-03-15",
        "category": "Media"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Location Scouting",
        "task_description": "Scout diverse film locations, evaluating scenic appeal and logistical feasibility for shooting the next dramatic scene.",
        "task_date": "2025-03-16",
        "category": "Location"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Final Cut Editing",
        "task_description": "Edit the final cut meticulously, ensuring each scene blends seamlessly while preserving the director’s original vision.",
        "task_date": "2025-03-17",
        "category": "Post Production"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Q&A Session",
        "task_description": "Attend an intimate Q&A session with emerging filmmakers to discuss narrative techniques and storytelling trends.",
        "task_date": "2025-03-18",
        "category": "Public Relations"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "emp5@ttm.com",
    "password": "1234",
    "name": "Florence Pugh",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Character Workshop",
        "task_description": "Join an immersive character workshop to hone acting techniques and explore diverse methods for role development.",
        "task_date": "2025-03-15",
        "category": "Workshops"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Script Critique",
        "task_description": "Critique the film script with keen precision to suggest changes that boost narrative depth and character arcs.",
        "task_date": "2025-03-16",
        "category": "Script"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Rehearsal Session",
        "task_description": "Engage in a rigorous rehearsal to perfect emotional delivery and synchronize performance with the director’s vision.",
        "task_date": "2025-03-17",
        "category": "Rehearsals"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "task_title": "On-set Interview",
        "task_description": "Record a compelling on-set interview that reveals her approach to challenging roles and insights into creative process.",
        "task_date": "2025-03-18",
        "category": "Media"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Scene Rehearsal",
        "task_description": "Perform an on-camera scene rehearsal to master dialogue delivery and ensure a flawless, deeply charged performance.",
        "task_date": "2025-03-19",
        "category": "Rehearsals"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Media Campaign",
        "task_description": "Promote the film by engaging in a media campaign that highlights behind-the-scenes creativity and cast unity.",
        "task_date": "2025-03-20",
        "category": "Marketing"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  }
];

  
const admin = [
    {
      "id": 1,
      "email": "admin@ttm.com",
      "password": "admin"
    }
  ];
  

export const setLocalStorage =() =>{
        localStorage.setItem("employees",JSON.stringify(employees))
        localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage =() =>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return{employees,admin}
}