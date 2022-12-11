
// made to learn global component
const AnotherListItem = ({data}) =>{
    return(
        <>
            {
                data.map((item,id)=>{
                    return <p key={item.id}>{item.name}</p>
                })
            }
        </>
    )
}
export default AnotherListItem;