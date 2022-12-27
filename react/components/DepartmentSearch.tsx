import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmnetGroup.graphql'
import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const {data, loading, error} = useQuery(QUERY_VALUE)
  if(error) {
    console.log(error)
  }
  const [slug, setSlug] = useState("")
  console.log("mi slug seleccionado es", slug);
  console.log(data)
  return loading 
  ? 
    <div> loading </div> 
  :  
    <div className='flex'> 
      <DepartmentGroup 
      departments={data?.categories[0]?.children}
      handleSetSlug = {setSlug}
      /> 
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Qué buscas en VTEX University"
        displayMode = "search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch