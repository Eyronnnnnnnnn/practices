export function displayQuestion (){
      const Quiz_Questions = [
        {
            id: 1,
            Question: "What is the structured sequence of stages in software development called?",
            Options: ["SDLC", "Agile", "Scrum", "Waterfalls"],
            Answer: "SDLC"
        },

        {
            id: 2,
            Question: "Which SDLC phase involves actual coding?",
              Options: ["Planning", "Implementation", "Testing", "Maintenance"],
            Answer: "Implementation"
        },
        
        {
            id: 3, 
            Question:"What is the main purpose of Software Testing?",
            Options: ["Add new features", "Find errors/bugs", "Deploy the system", "Design the UI"],
            Answer: "Find errors/bugs"
        }
    
    ];

    const showdata = JSON.stringify(Quiz_Questions[0].Answer);
    console.log(showdata);

    
}