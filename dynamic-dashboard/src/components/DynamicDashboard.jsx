const DynamicDashboard = () => {

    const userName = "Bob";
    const isPremium = false;

//TASK LIST
    const tasks = [

        { taskName: "Finish Homework", completed: true},
        { taskName: "Do laundry", completed: false},
        { taskName: "Grocery shopping", completed: true},
        { taskName: "Walk dog", completed: false}    
    ];

// COMPLETE/INCOMPLETE
   const completeCount = tasks.filter(task => task.completed).length;
   const incompleteCount = tasks.length - completeCount;

 return (
    <div>
{/* DATE DISPLY */}
        <header>
            Date: {new Date().toLocaleDateString()}
        </header>

{/* GREETING */}
        <h1>Hello, {userName}!</h1> 


{/* CONDITIONAL MESSAGE */}
        <p>
            {isPremium 
            ? "Thank you for being a premium member!" 
            : "Upgrade to premium to enjoy exclusive features!"}
        </p>


{/* TASK LIST */}
        <h2>Your Tasks:</h2>
        <ul>
        {/* MAP METHOD, HIGHLIGHT COMPLETED TASKS IN GREEN, USE EMOJIS */}
            {tasks.map(task => (
                <li style= {{color: task.completed ? 'green' : ''}}>
                 {task.completed ? '✅' : '❌'} {task.taskName}
                </li> 
            ))}
        </ul>

{/* DISPLAY TASK COUNTS */}
        <p>
            Completed: {completeCount} | Incomplete: {incompleteCount}
        </p>
    </div>
 )    
};

export default DynamicDashboard;