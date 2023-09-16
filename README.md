
## FAQ

#### Add at least 3 Project features

- Course Selection and Validation: Users can browse through a list of courses and select the ones they are interested in by clicking the "Select" button. The project ensures that users cannot add a course that exceeds the maximum allowed credit hours (20 hours) or has already been added to their selection. It displays appropriate toast notifications (error or warning) to inform users of these conditions.

- Cart Display: As users select courses, the project dynamically updates a cart section to display the selected courses. It lists the course names and calculates the total credit hours and total price of the selected courses. Users can see the remaining credit hours they can add before reaching the maximum limit. This provides users with real-time feedback on their course selections.

- Toast Notifications: The project utilizes toast notifications to provide feedback to users based on their interactions. It displays error notifications when users attempt to add a course that violates the credit hour limits or has already been added. Additionally, it shows warning notifications when users attempt to add courses beyond the maximum credit hours or go below 0 credit hours. Toast notifications improve user experience by conveying important information without disrupting the user's workflow.

#### Discuss how you managed the state in your assignment project.

- Course Data State:

The course data, which includes information about various courses such as title, description, price, hours, and image, is fetched from an external JSON file using the fetch API and stored in the courses state array using the useState hook.

```
const [courses, setCourses] = useState([]);

```

The useEffect hook is used to fetch and set the course data when the component is mounted.

```
useEffect(() => {
  fetch("./course.json")
    .then((res) => res.json())
    .then((data) => setCourses(data));
}, []);

```

- Selected Courses State:

The selected courses, which the user adds to their cart, are stored in the selectedCourse state array using the useState hook.

```
const [selectedCourse, setSelectedCourse] = useState([]);

```

When a user selects a course, it is added to this state, and when they remove a course, it is removed from this state.

- Total Credit Hours State:

The total credit hours of the selected courses are stored in the sumCreditHrs state variable.

```
const [sumCreditHrs, setSumCreditHrs] = useState(0);

```

When a user selects a course, its credit hours are added to this state, and when a course is removed, its credit hours are subtracted.

- Total Price State:

The total price of the selected courses is stored in the sumPrice state variable.

```
const [sumPrice, setSumPrice] = useState(0);

```

When a user selects a course, its price is added to this state, and when a course is removed, its price is subtracted.

- Maximum Credit Hours State:

The maximum credit hours allowed, which is 20 in this project, is stored in a constant variable called maxCreditHrs.

```
const maxCreditHrs = 20;

```

This constant is used to check whether adding a course would exceed the maximum credit hours.

