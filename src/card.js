const NamCard = (props)=> {

    const  {title ,id } = props.todo
    return  (
        <div className="card" onClick={()=>props.handleCardClick(id)}>
            <span>`Hey {title}`</span>
        </div>
    )
}

export default NamCard;