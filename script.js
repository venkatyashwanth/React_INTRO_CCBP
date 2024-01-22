const user = { firstName: "Venkat", lastName: "Yashwanth" };
const user1 = { firstName: "Naveen", lastName: "Reddy" };
const fullName = user => user.firstName + " " + user.lastName;
const className = "greeting";
const element = (
    <div>
        <h1 className={className}>Hello {fullName(user1)}!</h1>
        <p>Code from external JS File.</p>
        <span>Note: Code will not run from local, you have to use server for this. </span>
    </div>
)
ReactDOM.render(element, document.getElementById("root"));