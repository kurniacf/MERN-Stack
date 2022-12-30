import { useState } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        })

        const json = await response.json()

        if(response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        } else {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>
            <label for="">Title: </label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''} />
        
            <label for="">Load (kg): </label>
            <input type="number" required value={load} onChange={(e) => setLoad(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''} />

            <label for="">Number of repetition: </label>
            <input type="number" required value={reps} onChange={(e) => setReps(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''} />
        
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm