

const handleChange=(e,updateFunction,dispatch)=>{

    const dataref = e.target.getAttribute('dataref');
    dispatch(updateFunction({dataref,newValue:e.target.value}))
}
export default handleChange