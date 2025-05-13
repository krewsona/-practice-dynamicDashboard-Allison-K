const DynamicDashboard = () => {

    const userName = "Bob";

    const isPremium = true;

let premiumStatus = isPremium => {
    return (
        isPremium
            ? "Thank you for being a premium member!" 
            : "Upgrade to premium to enjoy exclusive features!"
        )};

//TASK LIST
    const tasks = [

        { taskName: "Finish Homework", completed: true},
        { taskName: "Do laundry", completed: false},
        { taskName: "Grocery shopping", completed: true},
        { taskName: "Walk dog", completed: true}    
    ];

// COMPLETE/INCOMPLETE
   const completeCount = tasks.filter(task => task.completed).length;
   const incompleteCount = tasks.length - completeCount;

// MAP METHOD, HIGHLIGHT COMPLETED TASKS IN GREEN, USE EMOJIS 
let taskCompletion = tasks.map(task => {
            return (
                <li style= {{color: task.completed ? 'green' : ''}}>
                 {task.completed ? '✅' : '❌'} {task.taskName}
                </li>) 
            });








 return (
    <div>
{/* DATE DISPLY */}
        <header>
            Date: {new Date().toLocaleDateString()}
        </header>

{/* GREETING */}
        <h1>Hello, {userName}!</h1> 


{/* CONDITIONAL MESSAGE */}
        <p> {premiumStatus(isPremium)} </p>


{/* TASK LIST */}
        <h2>Your Tasks:</h2>
        <ul> {taskCompletion} </ul>

{/* DISPLAY TASK COUNTS */}
        <p>Completed: {completeCount} | Incomplete: {incompleteCount}</p>

    </div>
 )};

export default DynamicDashboard;