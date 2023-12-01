const NamCard = (props)=> {

    const  {title ,id } = props.todo
    return  (
        <div className="card">
            <span>`Hey {title}`</span>
        </div>
    )
}

export default NamCard;