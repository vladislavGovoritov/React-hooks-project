import React,{useContext, useState} from 'react'
import{AlertContext} from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
  const [value, setValue] =  useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)


  const  onSubmit = event => {
      if(event.key !== 'Enter') {
          return
      }

      github.clearUsers()

      if(value.trim()) {
        alert.hide()  
        github.search(value.trim())
      } else {
          alert.show('Введите данные пользователя!')
      }
  }

    return (
        <div className = "form-group">
            <input 
            className = "form-control"
            type="text"
            placeholder="Введите ник пользователя ..."
            onKeyPress={onSubmit}
            value={value}
            onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}