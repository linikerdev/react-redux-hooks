import React from 'react';
import { useSelector, useDispatch } from 'react-redux'


export default function Courses () {
  const qtd = 2
  const courses = useSelector(
    state => state.data,
    [qtd]
  )
  const dispatch = useDispatch()


  function addCourse () {
    dispatch({ type: 'ADD_COURSE', title: 'GraphQl' })
  }

  return (
    <div>
      <ul>
        {courses.map(course => <li>{course}</li>)}
      </ul>

      <br />

      <button type="button" onClick={addCourse}>
        Add
      </button>


    </div>
  );


}
