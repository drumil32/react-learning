import { useState, useEffect, useRef } from 'react'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true);
  console.log(isMounted)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          console.log('end');
          if (isMounted.current) {
            console.log('here')
            setTodo(data)
            setLoading(false)
          }else{
            console.log('there');
            console.log(isMounted);
          }
        }, 3000)
      })

    // Runs when component is unmounted
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo
