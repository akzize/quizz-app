# React + Vite

# Some new things i've learn

To send the selected answers to the results page, you can use React Router's `history` object to push the selected answers to the results page. Here's how you can do it:

First, you need to import `useHistory` from `react-router-dom`:

```jsx
import { useHistory } from 'react-router-dom';
```

Then, inside your component, you can use the `useHistory` hook:

```jsx
const history = useHistory();
```

Finally, you can modify your button click handler to push the selected answers to the results page:

```jsx
{
    currentQuestionIndex < questions.length - 1  
    ? 
    ( 
        <button className="col-6 btn btn-primary" onClick={handleNextQuestion}>Suivant</button>  
    ) 
    : 
    (
        <button 
            className="col-6 btn valider" 
            onClick={() => history.push('/result', { selectedAnswers })}
        >
            valider
        </button>
    )
}
```

Now, on your results page, you can access the selected answers like this:

```jsx
const selectedAnswers = history.location.state.selectedAnswers;
```

Please note that this solution assumes you're using `react-router-dom` for routing. If you're using a different routing library, the solution might be different.

- you don't need the <a> link when you're using history.push(). The history.push() function will navigate to the new page.

---
`const selectedAnswers = location.state?.selectedAnswers;`