const Languageoption = (props) => {

    return(
        <div style={{marginTop:'50px'}}>
            <select className="dropmenu" onChange={props.onChange}>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'} img="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/62721/india-flag-emoji-clipart-xl.png">Hindi</option>
            </select>
        </div>
    )
}

export default Languageoption;